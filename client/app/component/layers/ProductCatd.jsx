import Image from 'next/image'
import React from 'react'
import kadir from '@/public/kadir.jpg'

const ProductCatd = () => {
  return (
    <div>
       <div className='w-60 bg-gray-200'>
          <div className='w-full h-60 '>
          <Image src={kadir} alt='kadir' className='w-full h-full object-cover' />
          </div>
          <div className='p-3'>
              <div>
              <h1 className='text-lg font-semibold text-gray-800'>Product Name</h1>
              <p className='text-sm font-simebold text-gray-500'>product description</p>
              </div>
              <div>
                <p>Price : 500.00 Tk</p>
                <button className='px-3 py-1 bg-orange-500 text-white'>Buy</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProductCatd