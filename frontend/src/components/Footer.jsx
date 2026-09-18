import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='max-w-full py-10'>
            <div className='w-[90%] md:w-[96%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 items-center'>
                            <p className='text-white h-10 w-10 rounded-full flex items-center justify-center bg-Primary font-Playfair font-bold text-2xl'>T</p>
                            <h1 className='font-Playfair font-bold text-2xl'>Trends</h1>
                        </div>
                        <p className='font-DMSans text-mutedtext font-medium text-sm'>Thoughtfully designed objects for the everyday home.</p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-3'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-DMSans font-bold text-lg text-Foreground'>Shop</h1>
                            <ul className='font-DMSans text-mutedtext font-medium text-sm flex flex-col gap-1'>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>New Arrivals</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Best Sellers</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Sale</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Collections</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h1 className='font-DMSans font-bold text-lg text-Foreground'>Help</h1>
                            <ul className='font-DMSans text-mutedtext font-medium text-sm flex flex-col gap-1'>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Contact Us</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Returns & Exchanges</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Shipping Information</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>FAQ</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h1 className='font-DMSans font-bold text-lg text-Foreground'>About</h1>
                            <ul className='font-DMSans text-mutedtext font-medium text-sm flex flex-col gap-1'>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Our Story</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Careers</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Sustainability</li>
                                <li className='hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Press</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer