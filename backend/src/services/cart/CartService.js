const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

const AddToCartCollectionServices = async(userId, data) => {
    const product = await prisma.product.findUnique({
        where: {
            id: data.productId
        }
    })

    if(!product){
        throw new Error("Product not found")
    }

    const cartItem = await prisma.cart.findFirst({
        where: {
            userId,
            productId: data.productId
        }
    })

    if(cartItem){
        const quantity = Number(data.quantity) || 1;
        const updatedCart = await prisma.cart.update({
            where: {
                id: cartItem.id
            },
            data: {
                quantity: cartItem.quantity + quantity
            }
        })
        return {
            message: "Cart updated successfully",
            cart: updatedCart
        }
    }

    const cart = await prisma.cart.create({
        data: {
            userId,
            productId: data.productId,
            quantity: data.quantity
        }
    })

    return {
        message: "Product added to cart successfully",
        cart
    }
}

const GetCartService = async(userId) => {
    const cart = await prisma.cart.findMany({
        where: {
            userId
        },
        include: {
            product: true
        }
    })

    return {
        cart
    }
}

const UpdateCartService = async (userId, productId, quantity) => {
    const cartItem = await prisma.cart.findFirst({
        where: {
            userId,
            productId
        }
    })

    if(!cartItem){
        throw new Error("Cart item not found")
    }

    if (quantity < 1) {
        throw new Error("Quantity must br at least 1");
    }

    const updatedCart = await prisma.cart.update({
        where: {
            id: cartItem.id
        },
        data: {
            quantity
        }
    })

    return {
        message: "Cart updated successfully",
        cart: updatedCart
    }
}

const RemoveCartService = async (userId, productId) => {
    const cartItem = await prisma.cart.findFirst({
        where: {
            userId,
            productId
        }
    })

    if(!cartItem){
        throw new Error("Cart item not found")
    }

    await prisma.cart.delete({
        where: {
            id: cartItem.id
        }
    })

    return {
        message: "Cart item removed successfully"
    }
}

const ClearCartService = async (userId) => {
    await prisma.cart.deleteMany({
        where: {
            userId
        }
    })

    return {
        message: "Cart cleared successfully"
    }
}

module.exports = {
    AddToCartCollectionServices,
    GetCartService,
    UpdateCartService,
    RemoveCartService,
    ClearCartService
} 