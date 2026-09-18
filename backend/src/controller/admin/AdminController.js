const { addProductService,updateProductService, deleteProductService } = require("../../services/admin/AdminService")

const addProductController = async (req, res) => {
    try {
        
        const data = req.body

        const newProduct = await addProductService(data)

        return res.status(201).json({
            status: "success",
            data: newProduct
        })

    } catch (error) {
        console.error("Error adding product:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })
    }
}

const updateProductController = async (req, res) => {
    try {
        
        const data = req.body
        data.id = req.params.id

        const updatedProduct = await updateProductService(data)

        return res.status(200).json({
            status: "success",
            data: updatedProduct
        })

    } catch (error) {
        console.error("Error updating product:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })
    }
}

const deleteProductController = async (req, res) => {
    try {
        
        const id = req.params.id

        const deletedProduct = await deleteProductService(id)

        return res.status(200).json({
            status: "success",
            data: deletedProduct
        })

    } catch (error) {
        console.error("Error deleting product:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })
    }
}

module.exports = {
    addProductController,
    updateProductController,
    deleteProductController
}