import React from 'react'
import sofa from '../assets/sofa.jpg'
import { motion } from 'framer-motion'

const HeroSectionImg = () => {
    return (
        <div>
            <div className='max-w-full h-full items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className='absolute rounded-full p-1 h-16 w-16 font-bold text-center z-10 -top-12 -right-12 bg-yellow-400 text-white shadow-lg shadow-yellow-300/70'>
                        <p className='text-xs font-bold'>40%</p>
                        <p className='text-xs'>On this sofa</p>
                    </motion.div>
                    <motion.div animate={{ y: [8, -8, 8], rotate: [-2, 2, -2]}} style={{ transformOrigin: "left center" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className=''>
                        <img src={sofa} alt="" className='rounded-3xl shadow-2xl shadow-red-200' />
                    </motion.div>
                    <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className='absolute bg-green-200 h-14 w-14 rounded-full z-10 -bottom-8 -right-8 shadow-lg shadow-green-300/70'></motion.div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionImg