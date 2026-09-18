import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { cart, clearLocalCart } = useCart();
    const { user, token, logout } = useAuth();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            clearLocalCart();
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="w-full bg-Surface shadow-lg sticky top-0 z-50">
            <div className="w-[95%] max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-4">
                    <Link to="/" className="flex items-center gap-2 font-Playfair">
                        <h1 className="bg-Primary text-white px-3 py-1 rounded-full font-bold">
                            T
                        </h1>
                        <h2 className="text-2xl font-semibold">
                            Trends
                        </h2>
                    </Link>

                    <div className="hidden md:flex gap-10 font-medium text-mutedtext">
                        <Link to="/">
                            <p className="hover:text-black transition">
                                Home
                            </p>
                        </Link>

                        <Link to="/products">
                            <p className="hover:text-black transition">
                                Products
                            </p>
                        </Link>

                        <Link to="/cart">
                            <p className="hover:text-black transition">
                                Cart
                            </p>
                        </Link>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="relative hidden lg:block w-64">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="search"
                                placeholder="Search products..."
                                className="w-full rounded-full border py-2 pl-11 pr-4 focus:outline-none"
                            />
                        </div>

                        <Link to="/cart">
                            <div className="relative">
                                <IoCartOutline className="text-3xl hover:text-orange-500 transition" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {token ? (
                            <div className="relative hidden md:block">
                                <button
                                    onClick={() => setProfileOpen(!profileOpen)}
                                    className="font-semibold flex items-center gap-2"
                                >
                                    👤 {user?.name}
                                </button>

                                {profileOpen && (
                                    <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-xl p-5 w-64 z-50 border">
                                        <div className="border-b pb-3 mb-3">
                                            <h3 className="font-semibold text-lg">
                                                {user?.name}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {user?.email}
                                            </p>

                                            <span className="inline-block mt-2 bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                                                {user?.role}
                                            </span>
                                        </div>

                                        <Link
                                            to="/profile"
                                            onClick={() => setProfileOpen(false)}
                                            className="block py-2 hover:text-orange-500"
                                        >
                                            My Profile
                                        </Link>

                                        <button
                                            onClick={() => {
                                                setProfileOpen(false);
                                                handleLogout();
                                            }}
                                            className="block py-2 text-red-500 hover:text-red-700"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="hidden md:flex gap-3">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 hover:text-orange-500"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="bg-black text-white px-5 py-2 rounded-full hover:bg-orange-500 transition"
                                >
                                    Register
                                </Link>
                            </div>
                        )}

                        <button
                            className="md:hidden text-3xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-4 pb-5">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>

                        <Link to="/products" onClick={() => setMenuOpen(false)}>
                            Products
                        </Link>

                        <Link to="/cart" onClick={() => setMenuOpen(false)}>
                            Cart
                        </Link>

                        {token ? (
                            <>
                                <div className="border rounded-lg p-3">
                                    <h3 className="font-semibold">
                                        {user?.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {user?.email}
                                    </p>

                                    <p className="text-xs text-orange-500 mt-1">
                                        {user?.role}
                                    </p>
                                </div>

                                <Link
                                    to="/profile"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Profile
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="text-left text-red-500"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <div className="flex gap-4">
                                <Link
                                    to="/login"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;