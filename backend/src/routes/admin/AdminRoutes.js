const express = require("express")
const {addProductController, updateProductController} = require("../../controller/admin/AdminController");
const { deleteProductController } = require("../../controller/admin/AdminController");
const { authMiddleware, authorize } = require("../../middleware/authMiddleware");

const AdminRoutes = express.Router();

AdminRoutes.post("/addProduct",authMiddleware, authorize("admin"), addProductController);

AdminRoutes.put("/updateProduct/:id",authMiddleware, authorize("admin"), updateProductController)

AdminRoutes.delete("/deleteProduct/:id",authMiddleware, authorize("admin"), deleteProductController)

module.exports = AdminRoutes;