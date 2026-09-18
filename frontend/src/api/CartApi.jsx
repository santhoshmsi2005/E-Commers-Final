import axios from "axios";

const getCartApiUrl = () => {
    if (import.meta.env.VITE_CART_API_URL) {
        return import.meta.env.VITE_CART_API_URL.replace(/\/$/, "");
    }
    const baseUrl = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");
    return `${baseUrl}/cart`;
};

const API_URL = getCartApiUrl();

const getToken = () => {
    return localStorage.getItem("temp_token");
};

export const addToCart = async (productId, quantity = 1) => {

    const response = await axios.post(
        API_URL,
        {
            productId,
            quantity
        },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};

export const getCart = async () => {

    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
};

export const updateCart = async (productId, quantity) => {

    const response = await axios.put(
        `${API_URL}/${productId}`,
        {
            quantity
        },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};

export const removeCart = async (productId) => {

    const response = await axios.delete(
        `${API_URL}/${productId}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );

    return response.data;
};

export const clearCart = async () => {

    const response = await axios.delete(API_URL, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data;
};