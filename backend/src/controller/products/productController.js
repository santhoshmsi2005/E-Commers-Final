const { getAllProductsService, getProductService } = require("../../services/products/productServices")

const getAllProductsController = async (req, res) => {
    try {
        const allProducts = await getAllProductsService()

        res.status(200).json({
            success: true,
            message: "All products fetched successfully",
            products: allProducts
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: error.message
        })
    }
}

const getProductController = async (req, res) => {
    try {
        const { id } = req.params

        const product = await getProductService(id)

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            product: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch product",
            error: error.message
        })
    }
}

module.exports = {
    getAllProductsController,
    getProductController
}