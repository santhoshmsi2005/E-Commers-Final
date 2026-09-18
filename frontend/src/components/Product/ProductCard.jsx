import React, { useState } from "react";
import { FaStar, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = ({ product }) => {

    const navigate = useNavigate();
    const { addItem } = useCart();
    const [isAdded, setIsAdded] = useState(false);


    const handleViewProduct = () => {
        navigate(`/product/${product.id}`);
    };


    const handleAddCart = async (e) => {

        e.stopPropagation();

        const token = localStorage.getItem("temp_token");


        if (!token) {
            navigate("/login");
            return;
        }


        try {
            await addItem(product.id, 1);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 3000);
        } catch (error) {
            console.error("Failed to add item:", error);
            alert(error.response?.data?.message || "Failed to add product to cart. The server might be asleep, please try again.");
        }
    };


    return (
        <div
            onClick={handleViewProduct}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
        >

            <div className="relative overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow">
                    {product.category}
                </span>


                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/90 text-white">
                    In Stock
                </span>


                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 transition-all duration-500">

                    <button
                        onClick={handleAddCart}
                        disabled={isAdded}
                        className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${isAdded
                            ? "bg-green-500 text-white cursor-default"
                            : "bg-black text-white hover:bg-orange-500"
                            }`}
                    >
                        {isAdded ? (
                            <>
                                <FaCheck /> Added
                            </>
                        ) : (
                            "Add to Cart"
                        )}
                    </button>

                </div>

            </div>



            <div className="p-5">

                <p className="text-blue-600 text-xs uppercase font-bold tracking-wider">
                    {product.brand}
                </p>


                <h2 className="text-xl font-bold mt-2">
                    {product.name}
                </h2>


                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {product.description}
                </p>



                <div className="mt-4 flex items-center">

                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            className={
                                star <= product.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                            }
                        />
                    ))}


                    <span className="text-gray-500 text-sm ml-2">
                        ({product.numReviews} Reviews)
                    </span>

                </div>

                <div className="flex justify-between items-center mt-6">

                    <h3 className="text-3xl font-bold text-orange-500">
                        ₹{product.price}
                    </h3>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleViewProduct();
                        }}
                        className="border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
                    >
                        View
                    </button>
                </div>
            </div>

            {/* Modern Toast Notification */}
            <AnimatePresence>
                {isAdded && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-10 right-10 z-50 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-700"
                    >
                        <div className="w-10 h-10 bg-green-500 rounded-full flex justify-center items-center shadow-lg shadow-green-500/30">
                            <FaCheck className="text-white text-lg" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Added to Cart</p>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-1 max-w-[200px]">{product.name} is in your cart.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ProductCard;