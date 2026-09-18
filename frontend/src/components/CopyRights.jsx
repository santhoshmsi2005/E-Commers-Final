import React from 'react'

const CopyRights = () => {
  return (
    <div>
        <div className='max-w-full border'>
            <div className='w-[90%] md:w-[96%] mx-auto py-3'>
                <div className='flex items-center justify-between'>
                    <p className='font-DMSans text-mutedtext font-medium text-sm'>© 2026 Trends. All rights reserved.</p>
                    <div className='flex gap-5 items-center'>
                        <p className='font-DMSans text-mutedtext font-medium text-sm hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Privacy Policy</p>
                        <p className='font-DMSans text-mutedtext font-medium text-sm hover:text-Primary hover:scale-105 transition-all duration-300 cursor-pointer'>Terms of Service</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CopyRights