const express = require('express')
const {getAllProductsController, getProductController} = require('../../controller/products/productController')

const productsRouter = express.Router();

productsRouter.get("/", getAllProductsController)

productsRouter.get("/:id", getProductController)

module.exports = productsRouter;