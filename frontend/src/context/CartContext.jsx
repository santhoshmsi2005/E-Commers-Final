import { createContext, useContext, useEffect, useState } from "react";
import {
    getCart,
    addToCart,
    updateCart,
    removeCart,
    clearCart
} from "../api/CartApi";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch Cart
    const fetchCart = async () => {

        const token = localStorage.getItem("temp_token");

        if (!token) {
            setCart([]);
            return;
        }

        try {

            setLoading(true);

            const response = await getCart();

            setCart(response.cart || []);

        }
        catch (error) {

            console.log(error);

            setCart([]);

        }
        finally {

            setLoading(false);

        }

    };



    // Add Item
    const addItem = async (productId, quantity = 1) => {

        await addToCart(productId, quantity);

        await fetchCart();

    };



    // Update Quantity
    const updateItem = async (productId, quantity) => {

        await updateCart(productId, quantity);

        await fetchCart();

    };



    // Remove Item
    const removeItem = async (productId) => {

        await removeCart(productId);

        await fetchCart();

    };



    // Clear Cart
    const clearAll = async () => {

        await clearCart();

        await fetchCart();

    };

    // Clear Local Cart State (for logout)
    const clearLocalCart = () => {
        setCart([]);
    };



    useEffect(() => {

        fetchCart();

    }, []);




    return (

        <CartContext.Provider
            value={{
                cart,
                loading,
                fetchCart,
                addItem,
                updateItem,
                removeItem,
                clearAll,
                clearLocalCart
            }}
        >

            {children}

        </CartContext.Provider>

    );

};



export const useCart = () => {

    return useContext(CartContext);

};