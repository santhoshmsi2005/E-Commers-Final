import React from 'react'
import { motion } from "framer-motion"
import {
    SiNike,
    SiAdidas,
    SiPuma,
    SiApple,
    SiSamsung,
    SiSony,
    SiLenovo,
    SiDell,
} from "react-icons/si";

const TopBrands = () => {

    const brands = [
        { name: "Nike", icon: <SiNike /> },
        { name: "Adidas", icon: <SiAdidas /> },
        { name: "Puma", icon: <SiPuma /> },
        { name: "Apple", icon: <SiApple /> },
        { name: "Samsung", icon: <SiSamsung /> },
        { name: "Sony", icon: <SiSony /> },
        { name: "Lenovo", icon: <SiLenovo /> },
        { name: "Dell", icon: <SiDell /> },
    ]

    return (
        <div>
            <div className='max-w-full py-10'>
                <div className='w-[90%] md:w-[96%] mx-auto overflow-hidden relative'>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='font-bold text-2xl font-Playfair'>Top Brands</motion.h1>
                    {/* Left Fade */}
                    {/* <div className='pinter-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent'></div> */}
                    <motion.div className='flex mt-5 gap-10'
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }} >
                        {[...brands, ...brands].map((brand, index) => (
                            <div key={index}
                                className='border flex items-center gap-2 px-6 py-2 rounded-full'>
                                <span className=''>
                                    {brand.icon}
                                </span>
                                <span className='font-semibold text-lg'>
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TopBrands