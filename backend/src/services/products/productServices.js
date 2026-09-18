const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const getAllProductsService = async () => {
    try {
        const allProducts = await prisma.product.findMany();
        return allProducts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch products");
    }
}

const getProductService = async (id) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id
            }
        });
        return product;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch product");
    }
}

module.exports = {
    getAllProductsService,
    getProductService
}