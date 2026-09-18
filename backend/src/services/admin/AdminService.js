const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

const addProductService = async(data) => {
    try {
        
        const newProduct = await prisma.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                stock: data.stock,
                category: data.category,
                brand: data.brand,
                image: data.image,
                rating: data.rating,
                numReviews: data.numReviews,
                isFeatured: data.isFeatured
            }
        })

        return newProduct

    } catch (error) {
        throw error;
    }
}

const updateProductService = async(data) => {
    try {
        
        const updatedProduct = await prisma.product.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                stock: data.stock,
                category: data.category,
                brand: data.brand,
                image: data.image,
                rating: data.rating,
                numReviews: data.numReviews,
                isFeatured: data.isFeatured
            }
        })

        return updatedProduct

    } catch (error) {
        throw error;
    }
}

const deleteProductService = async (id) => {
    try {
        const deletedProduct = await prisma.product.delete({
            where: {
                id: id
            }
        })

        return deletedProduct

    } catch (error) {
        throw error;
    }   
}

module.exports = {
    addProductService,
    updateProductService,
    deleteProductService
}