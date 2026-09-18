const { AddToCartCollectionServices, GetCartService, UpdateCartService, RemoveCartService, ClearCartService } = require("../../services/cart/CartService")

const AddToCartCollectionController = async (req, res, next) => {
    try {
        const result = await AddToCartCollectionServices(req.user.id, req.body)

        res.status(201).json({
            success: true,
            message: "Item added to cart successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const GetCartCollectionController = async (req, res, next) => {
    try {
        const result = await GetCartService(req.user.id)

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const UpdateCartCollectionController = async (req, res, next) => {
    try {
        const result = await UpdateCartService(
            req.user.id,
            req.params.productId,
            req.body.quantity
        )

        res.status(200).json(result)

    } catch (error) {
        next(error)
    }
}

const RemoveCartItemCollectionController = async (req, res, next) => {
    try {
        const result = await RemoveCartService(
            req.user.id,
            req.params.productId
        )

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const ClearCartCollectionController = async (req, res, next) => {
    try {
        const result = await ClearCartService(req.user.id)

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    AddToCartCollectionController,
    GetCartCollectionController,
    UpdateCartCollectionController,
    RemoveCartItemCollectionController,
    ClearCartCollectionController
}