import Image from 'next/image'
import React from 'react'
import kadir from '@/public/kadir.jpg'
import { MdFavoriteBorder } from "react-icons/md";

const ProductCatd = () => {
  return (
       <div className='w-72 bg-gray-200 rounded-md shadow-md'>
          <div className='w-full h-60 '>
          <Image src={kadir} alt='kadir' className='w-full h-full object-cover' />
          </div>
          <div className='p-3'>
              <div>
              <h1 className='text-lg font-semibold text-gray-800'>Product Name</h1>
              <p className='text-sm font-simebold text-gray-500'>estor Name</p>
              </div>
              <div>
                <p className='text-base font-semibold text-orange-800'>Price : 500.00 Tk</p>
                <div className='flex justify-between'>
                  <p className='flex gap-1 items-center cursor-pointer'><MdFavoriteBorder /> <span>Favorite</span></p>
                  <button className='px-4 py-1 bg-orange-500 text-white hover:bg-orange-600 rounded-md'>Buy</button>
                </div>
              </div>
          </div>
      </div> 
  )
}

export default ProductCatd