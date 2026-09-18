const express = require('express');
const { AddToCartCollectionController, GetCartCollectionController, UpdateCartCollectionController, RemoveCartItemCollectionController, ClearCartCollectionController } = require('../../controller/cart/CartController');
const { authMiddleware } = require('../../middleware/authMiddleware');
const CartRoutes = express.Router()

CartRoutes.use(authMiddleware)

// Add to cart
CartRoutes.post('/', AddToCartCollectionController)

// Get cart
CartRoutes.get('/', GetCartCollectionController)

// Update cart
CartRoutes.put('/:productId', UpdateCartCollectionController)

// Delete a single product
CartRoutes.delete('/:productId', RemoveCartItemCollectionController)

// Clear entire cart
CartRoutes.delete('/', ClearCartCollectionController)

module.exports = CartRoutes;