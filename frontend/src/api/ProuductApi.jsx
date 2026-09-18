import axios from "axios"

const getBaseUrl = () => {
    const url = import.meta.env.VITE_API_URL || "http://localhost:3000";
    return url.replace(/\/$/, "");
};

const API_URL = getBaseUrl();

export const getAllProducts = async () => {
    try {
        const res = await axios.get(`${API_URL}/products`)
        return res.data.products
    } catch (error) {
        throw error
    }
}

export const productsById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/products/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}