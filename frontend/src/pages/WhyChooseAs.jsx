import React from 'react'
import { LiaTruckSolid } from "react-icons/lia";
import { TbReload } from "react-icons/tb";
import { LuShield } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const WhyChooseAs = () => {
  return (
    <div>
        <div className='max-w-full py-10 overflow-hidden'>
            <div className='w-[90%] md:w-[96%] mx-auto'>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, staggerChildren: 0.2 }}
                    className='grid grid-cols-2 lg:grid-cols-4 gap-6'>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='flex flex-col items-center gap-1'>
                        <div className='bg-Primary/20 w-fit p-3 rounded-full text-xl flex items-center text-Primary'>
                            <LiaTruckSolid />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-DMSans font-bold text-lg text-Foreground'>Free Delivery</h1>
                            <p className='font-DMSans text-sm text-mutedtext'>On orders over $80</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='flex flex-col items-center gap-1'>
                        <div className='bg-Primary/20 w-fit p-3 rounded-full text-xl flex items-center text-Primary'>
                            <TbReload />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-DMSans font-bold text-lg text-Foreground'>Easy Returns</h1>
                            <p className='font-DMSans text-sm text-mutedtext'>30-day hassle-free</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='flex flex-col items-center gap-1'>
                        <div className='bg-Primary/20 w-fit p-3 rounded-full text-xl flex items-center text-Primary'>
                            <LuShield />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-DMSans font-bold text-lg text-Foreground'>Secure Payment</h1>
                            <p className='font-DMSans text-sm text-mutedtext'>256-bit encryption</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='flex flex-col items-center gap-1'>
                        <div className='bg-Primary/20 w-fit p-3 rounded-full text-xl flex items-center text-Primary'>
                            <IoFlashOutline />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-DMSans font-bold text-lg text-Foreground'>Fast Dispatch</h1>
                            <p className='font-DMSans text-sm text-mutedtext'>Same-day if ordered by 2pm</p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseAs