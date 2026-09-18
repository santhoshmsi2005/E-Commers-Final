import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { cart, loading, updateItem, removeItem, clearAll } = useCart();

    const subtotal = cart.reduce((total, item) => total + (Number(item.product.price) * item.quantity), 0);
    const shipping = subtotal > 999 ? 0 : 99;
    const tax = subtotal * 0.18; // 18% tax for example
    const grandTotal = subtotal + shipping + tax;

    if (loading && cart.length === 0) {
        return (
            <div className="min-h-screen bg-PageBackground flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <section className="min-h-screen bg-PageBackground py-20">
                <div className="w-[90%] max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="bg-white p-12 rounded-3xl shadow-xl w-full flex flex-col items-center">
                        <div className="w-40 h-40 bg-orange-100 text-orange-500 rounded-full flex justify-center items-center mb-8">
                            <FiShoppingBag size={80} />
                        </div>
                        <h2 className="text-4xl font-bold mb-4 font-Playfair text-Foreground">Your cart is empty</h2>
                        <p className="text-mutedtext text-lg mb-8 max-w-md">
                            Looks like you haven't added anything to your cart yet. Discover our latest collections.
                        </p>
                        <Link to="/products" className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 flex items-center gap-2 group">
                            Continue Shopping <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-PageBackground py-16 font-DMSans">
            <div className="w-[95%] max-w-7xl mx-auto">
                <h1 className="text-4xl font-Playfair font-bold text-Foreground mb-10">Shopping Cart</h1>
                
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.div 
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                    className="bg-white rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center gap-6 border border-gray-100"
                                >
                                    <div className="w-full sm:w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0">
                                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>

                                    <div className="flex-1 w-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1">{item.product.brand}</p>
                                                <Link to={`/product/${item.product.id}`}>
                                                    <h3 className="text-xl font-bold text-Foreground hover:text-orange-500 transition line-clamp-1">{item.product.name}</h3>
                                                </Link>
                                            </div>
                                            <button 
                                                onClick={() => removeItem(item.product.id)}
                                                className="text-gray-400 hover:text-red-500 transition p-2 bg-gray-50 rounded-full hover:bg-red-50"
                                                title="Remove item"
                                            >
                                                <FiTrash2 size={20} />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-end mt-4">
                                            <div className="flex items-center gap-4 bg-gray-50 border rounded-xl p-1">
                                                <button 
                                                    onClick={() => {
                                                        if(item.quantity > 1) updateItem(item.product.id, item.quantity - 1)
                                                    }}
                                                    className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition text-gray-600 shadow-sm disabled:opacity-50"
                                                    disabled={item.quantity <= 1 || loading}
                                                >
                                                    <FiMinus size={16} />
                                                </button>
                                                
                                                <span className="w-6 text-center font-bold text-Foreground">{item.quantity}</span>
                                                
                                                <button 
                                                    onClick={() => updateItem(item.product.id, item.quantity + 1)}
                                                    className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition text-gray-600 shadow-sm disabled:opacity-50"
                                                    disabled={loading}
                                                >
                                                    <FiPlus size={16} />
                                                </button>
                                            </div>

                                            <p className="text-2xl font-bold text-Foreground">
                                                ₹{(Number(item.product.price) * item.quantity).toLocaleString('en-IN')}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        
                        <div className="flex justify-end pt-4">
                            <button 
                                onClick={clearAll}
                                disabled={loading}
                                className="text-red-500 font-semibold hover:text-red-700 transition flex items-center gap-2 bg-red-50 px-6 py-3 rounded-full hover:bg-red-100 disabled:opacity-50"
                            >
                                <FiTrash2 /> Clear Entire Cart
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-28 border border-gray-50">
                            <h2 className="text-2xl font-bold mb-6 text-Foreground font-Playfair border-b pb-4">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6 text-mutedtext font-medium">
                                <div className="flex justify-between">
                                    <span>Subtotal ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
                                    <span className="text-Foreground font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-Foreground font-semibold">
                                        {shipping === 0 ? <span className="text-green-500">Free</span> : `₹${shipping}`}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Estimated Tax (18%)</span>
                                    <span className="text-Foreground font-semibold">₹{Math.round(tax).toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                            
                            <div className="border-t pt-6 mb-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-Foreground">Grand Total</span>
                                    <span className="text-3xl font-bold text-orange-500">₹{Math.round(grandTotal).toLocaleString('en-IN')}</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-right">Taxes and shipping calculated at checkout</p>
                            </div>
                            
                            <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 flex justify-center items-center gap-2 group">
                                Proceed to Checkout <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <div className="mt-6 flex items-center justify-center gap-4 text-gray-400 text-sm">
                                <span className="flex items-center gap-1"><FiShoppingBag /> Secure Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
