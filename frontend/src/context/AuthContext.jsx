import React, { createContext, useContext, useState, useEffect } from "react";
import { logoutUser } from "../api/AuthApi";

const AuthContext = createContext();

const loadAuthState = () => {
    const accessToken = localStorage.getItem("temp_token");
    const userData = localStorage.getItem("user");
    const googleUser = localStorage.getItem("google_user");

    if (accessToken && userData) {
        try {
            return { token: accessToken, user: JSON.parse(userData) };
        } catch (e) {
            return { token: null, user: null };
        }
    } else if (googleUser) {
        try {
            const parsed = JSON.parse(googleUser);
            return {
                token: "google_token",
                user: {
                    name: parsed.name,
                    email: parsed.email,
                    role: "user",
                    avatar: parsed.picture
                }
            };
        } catch (e) {
            return { token: null, user: null };
        }
    }
    return { token: null, user: null };
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(loadAuthState);

    const login = (userData, tempToken, mainToken) => {
        localStorage.setItem("temp_token", tempToken);
        if (mainToken) localStorage.setItem("main_token", mainToken);
        localStorage.setItem("user", JSON.stringify(userData));

        setAuthState({
            token: tempToken,
            user: userData
        });

        window.dispatchEvent(new Event("authChange"));
    };

    const loginWithGoogle = (googleUserData) => {
        const userObj = {
            name: googleUserData.name,
            email: googleUserData.email,
            role: "user",
            avatar: googleUserData.picture
        };

        localStorage.setItem("google_user", JSON.stringify(googleUserData));

        setAuthState({
            token: "google_token",
            user: userObj
        });

        window.dispatchEvent(new Event("authChange"));
    };

    const logout = async () => {
        try {
            await logoutUser();
        } catch (e) {
            console.log("Logout API call error:", e);
        } finally {
            localStorage.removeItem("temp_token");
            localStorage.removeItem("main_token");
            localStorage.removeItem("user");
            localStorage.removeItem("google_user");

            setAuthState({ token: null, user: null });

            window.dispatchEvent(new Event("authChange"));
        }
    };

    useEffect(() => {
        const handleAuthChange = () => {
            setAuthState(loadAuthState());
        };

        window.addEventListener("authChange", handleAuthChange);
        window.addEventListener("storage", handleAuthChange);

        return () => {
            window.removeEventListener("authChange", handleAuthChange);
            window.removeEventListener("storage", handleAuthChange);
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token: authState.token,
                user: authState.user,
                login,
                loginWithGoogle,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
