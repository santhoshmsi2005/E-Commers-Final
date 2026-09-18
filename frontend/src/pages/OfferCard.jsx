import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import sofa from "../assets/sofa.jpg"
import { motion } from "framer-motion"

const OfferCard = () => {
  return (
    <div>
      <div className='max-w-full py-10 bg-PageBackground border'>
        <div className='w-[90%] md:w-[96%] mx-auto'>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className='border rounded-3xl p-7 bg-gradient-to-r from-Primary shadow-md grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col gap-4'>
              <div className='bg-AccentYellow font-bold text-sm px-4 py-2 rounded-full w-fit'>
                <h1>Limited Time Offer</h1>
              </div>
              <div className='font-Playfair font-bold'>
                <h1 className='text-3xl'>Summer Sale - Up to <span className='text-Primary font-serif'>40% off</span></h1>
                <p className='font-DMSans font-medium text-white text-sm'>Shop our curated summer edit.Ends July 31.</p>
              </div>
              <div>
                <button className='flex items-center gap-2 px-7 py-2 font-DMSans bg-AccentYellow rounded-full hover:shadow-lg transition-all ease-in-out duration-400 hover:-translate-y-2 hover:scale-105'>
                  <span className='font-bold'>Claim Offer</span>
                  <span><FaArrowRight /></span>
                </button>
              </div>
            </div>

            <div className='hidden md:block relative h-52 overflow-hidden items-center'>
              <img src={sofa} alt="sofa" className='w-full h-full object-cover rounded-full' />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className='absolute z-10 right-0 top-3 bg-AccentYellow font-bold rounded-full px-1 py-2'>40%</motion.div>
            </div>
          </motion.div>


        </div>

      </div>
    </div>
  )
}

export default OfferCard