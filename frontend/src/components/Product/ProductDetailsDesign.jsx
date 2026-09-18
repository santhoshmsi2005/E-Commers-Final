import { useState } from "react";
import { FiTruck, FiShield } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetailsUI = ({ product }) => {

    const navigate = useNavigate();
    const { addItem } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);



    const handleAddCart = async()=>{

    const token = localStorage.getItem("temp_token");


    if(!token){
        navigate("/login");
        return;
    }


        try {
            setLoading(true);
            await addItem(product.id, quantity);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 3000);
        } catch (error) {
            console.error("Failed to add item:", error);
            alert(error.response?.data?.message || "Failed to add product to cart. The server might be asleep, please try again.");
        } finally {
            setLoading(false);
        }
    };



    const increaseQuantity = ()=>{

        if(quantity < product.stock){

            setQuantity(quantity + 1);

        }

    };


    const decreaseQuantity = ()=>{

        if(quantity > 1){

            setQuantity(quantity - 1);

        }

    };



    return (
        <section className="bg-PageBackground py-20">

            <div className="w-[92%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">


                <div className="sticky top-24">

                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">

                        <div className="w-full h-[650px] bg-gray-200">

                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[650px] object-cover hover:scale-105 transition duration-500"
                            />

                        </div>


                        <span className="absolute top-5 left-5 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow">
                            {product.category}
                        </span>


                        <span className="absolute top-5 right-5 px-4 py-2 rounded-full text-sm font-semibold bg-green-500 text-white">
                            In Stock
                        </span>


                    </div>

                </div>



                <div>


                    <p className="uppercase text-blue-600 tracking-widest font-semibold">
                        {product.brand}
                    </p>


                    <h1 className="text-5xl font-bold mt-3 leading-tight">
                        {product.name}
                    </h1>



                    <div className="mt-6">

                        <div className="flex items-center gap-3">

                            <div className="text-yellow-400">
                                ★★★★★
                            </div>


                            <span className="font-semibold">
                                {product.rating}
                            </span>

                        </div>


                        <p className="text-gray-500 mt-1">
                            {product.numReviews} Customer Reviews
                        </p>

                    </div>




                    <h2 className="text-5xl font-bold text-orange-500 mt-8">
                        ₹{product.price}
                    </h2>



                    <p className="text-gray-600 leading-8 mt-8">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-10">


                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow">

                            <FiTruck size={22}/>

                            <div>

                                <h4 className="font-semibold">
                                    Free Shipping
                                </h4>

                                <p className="text-sm text-gray-500">
                                    Orders over ₹999
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow">

                            <FiShield size={22}/>

                            <div>

                                <h4 className="font-semibold">
                                    Secure Payment
                                </h4>

                                <p className="text-sm text-gray-500">
                                    100% Protected
                                </p>

                            </div>

                        </div>


                    </div>

                    <div className="flex items-center gap-5 mt-12">


                        <span className="font-semibold">
                            Quantity
                        </span>


                        <div className="flex items-center border rounded-xl overflow-hidden">


                            <button
                                onClick={decreaseQuantity}
                                className="w-12 h-12 hover:bg-gray-100"
                            >
                                -
                            </button>



                            <span className="w-12 text-center font-bold">
                                {quantity}
                            </span>



                            <button
                                onClick={increaseQuantity}
                                className="w-12 h-12 hover:bg-gray-100"
                            >
                                +
                            </button>


                        </div>


                    </div>






                    <div className="flex gap-4 mt-10">


                        <button
                            className="flex-1 bg-black text-white py-4 rounded-xl hover:bg-orange-500 transition font-semibold"
                        >
                            Buy Now
                        </button>



                        <button
                            onClick={handleAddCart}
                            disabled={loading || isAdded}
                            className={`flex-1 border rounded-xl py-4 transition-all duration-300 font-semibold flex items-center justify-center gap-2 ${
                                isAdded
                                ? "bg-green-500 text-white border-green-500 cursor-default"
                                : "hover:bg-black hover:text-white"
                            } disabled:opacity-50`}
                        >

                            {
                                loading
                                ? "Adding..."
                                : isAdded ? (
                                    <>
                                        <FaCheck /> Added
                                    </>
                                ) : "Add to Cart"
                            }

                        </button>



                        <button className="w-16 border rounded-xl hover:bg-red-500 hover:text-white transition">
                            ♡
                        </button>


                    </div>

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
                            <p className="text-xs text-gray-400 mt-1 line-clamp-1 max-w-[200px]">{quantity}x {product.name} is in your cart.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default ProductDetailsUI;