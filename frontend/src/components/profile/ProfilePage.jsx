import React from "react";
import { FaUserCircle, FaEnvelope, FaUserShield, FaShoppingBag, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <section className="min-h-screen bg-PageBackground py-10">
            <div className="w-[92%] max-w-6xl mx-auto">

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    <div className="h-40 bg-gradient-to-r from-orange-500 to-amber-400"></div>

                    <div className="px-8 pb-8">

                        <div className="-mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                            <div className="flex items-end gap-5">

                                <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">
                                    <FaUserCircle className="text-8xl text-slate-500" />
                                </div>

                                <div className="pb-3">
                                    <h1 className="text-3xl font-bold">
                                        {user?.name}
                                    </h1>

                                    <p className="text-slate-500 mt-1">
                                        Welcome back 👋
                                    </p>
                                </div>

                            </div>

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition">
                                Edit Profile
                            </button>

                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mt-10">

                            <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-8">

                                <h2 className="text-2xl font-bold mb-6">
                                    Personal Information
                                </h2>

                                <div className="space-y-6">

                                    <div className="flex items-center gap-4">
                                        <FaUserCircle className="text-orange-500 text-xl" />
                                        <div>
                                            <p className="text-slate-500 text-sm">
                                                Full Name
                                            </p>
                                            <h3 className="font-semibold">
                                                {user?.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <FaEnvelope className="text-orange-500 text-xl" />
                                        <div>
                                            <p className="text-slate-500 text-sm">
                                                Email Address
                                            </p>
                                            <h3 className="font-semibold">
                                                {user?.email}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <FaUserShield className="text-orange-500 text-xl" />
                                        <div>
                                            <p className="text-slate-500 text-sm">
                                                Account Role
                                            </p>
                                            <h3 className="font-semibold">
                                                {user?.role}
                                            </h3>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="space-y-5">

                                <div className="bg-white border rounded-2xl p-6 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <FaShoppingBag className="text-3xl text-orange-500" />
                                        <div>
                                            <p className="text-slate-500">
                                                Orders
                                            </p>
                                            <h2 className="text-2xl font-bold">
                                                0
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border rounded-2xl p-6 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <FaHeart className="text-3xl text-red-500" />
                                        <div>
                                            <p className="text-slate-500">
                                                Wishlist
                                            </p>
                                            <h2 className="text-2xl font-bold">
                                                0
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border rounded-2xl p-6 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <FaMapMarkerAlt className="text-3xl text-blue-500" />
                                        <div>
                                            <p className="text-slate-500">
                                                Addresses
                                            </p>
                                            <h2 className="text-2xl font-bold">
                                                0
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Profile;