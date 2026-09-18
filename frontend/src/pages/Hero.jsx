import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import HeroSectionImg from '../components/HeroSectionImg';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className='max-w-full bg-PageBackground py-16 border '>
                <div className='w-[90%] md:w-[96%] mx-auto flex justify-between items-center'>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className='grid grid-cols-1 md:grid-cols-2 gap-x-48 gap-y-16'>
                        <div className='flex flex-col font-Playfair gap-y-7'>
                            <motion.div animate={{y:[-3,3,-3]}} 
                            transition={{
                                repeat:Infinity,
                                duration:1,
                                ease: "easeInOut"
                            }}
                            className='flex gap-2 items-center w-fit bg-AccentYellow px-3 py-1 rounded-full'>
                                <PiStarFourFill className='text-sm' />
                                <p className=' font-bold'>New Collection 2026</p>
                            </motion.div>
                            <div className='text-6xl font-bold'>
                                <p>Curate Your</p>
                                <p className='text-Primary'>Perfect</p>
                                <p>Living Style</p>
                            </div>
                            <div className='text-mutedtext'>
                                <p>Handpicked fashion that transforms everyday</p>
                                <p>spaces into something worth coming to.</p>
                            </div>
                            <div className='flex gap-3 font-DMSans flex-wrap'>
                                <Link to="/products">
                                    <button className='bg-Primary text-white rounded-full px-6 py-3 font-bold flex gap-2 items-center hover:gap-3 transition-all duration-300 group'><span>Shop Now</span><FaArrowRight className='group-hover:scale-x-110 group-hover:-scale-y-110 transition-transform' /></button>
                                </Link>
                                <Link to="/products">
                                    <button className='border px-6 py-3 rounded-full font-bold hover:bg-LavenderSurface duration-200 hover:scale-105 transition-all '>View Lookbook</button>
                                </Link>
                            </div>
                            <div className='flex gap-10 font-serif'>
                                <div>
                                    <p className='font-bold text-lg'>12k+</p>
                                    <p className='text-xs text-mutedtext'>Happy Customers</p>
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>98%</p>
                                    <p className='text-xs text-mutedtext'>Positive Reviews</p>
                                </div>
                                <div>
                                    <p className='font-bold text-lg'>500+</p>
                                    <p className='text-xs text-mutedtext'>Products</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center h-full max-w-full pr-16'>
                            <HeroSectionImg />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero