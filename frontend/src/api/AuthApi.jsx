import axios from "axios";

const getAuthApiUrl = () => {
    if (import.meta.env.VITE_AUTH_API_URL) {
        return import.meta.env.VITE_AUTH_API_URL.replace(/\/$/, "");
    }
    const baseUrl = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");
    return `${baseUrl}/auth`;
};

const API_URL = getAuthApiUrl();

export const registerUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URL}/register`, userData);
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message || "Registration failed");
    }
};

export const loginUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URL}/login`, userData);
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message || "Login Failed");
    }
};

export const logoutUser = async () => {
    try {
        const res = await axios.post(`${API_URL}/logout`);
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message || "Logout Failed");
    }
};