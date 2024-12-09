import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoSearch } from "react-icons/io5";
import tir from '@/public/tir.jpg';

const YourProducts = () => {
  // পণ্যের ডেটার তালিকা
  const products = [
    { id: 1,
      name: 'Tir Shoyabin', 
      description: 'Soybean Oil', 
      price: '৳1200',
      thumbnail: tir
     },
    { id: 2, 
      name: 'Rice Bran Oil', 
      description: 'Healthy Cooking Oil', 
      price: '৳1100',
      thumbnail: tir
    },
    { id: 3, 
      name: 'Olive Oil', 
      description: 'Pure Olive Oil', 
      price: '৳2500',
      thumbnail: tir 
    },
  ];

  return (
    <div className='hidden md:block'>
      <h1 className='text-2xl font-bold py-2 text-gray-700'>YOUR PRODUCTS</h1>
      <div className='relative'>
        <input 
         type="text" 
         className=' w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-orange-500'
         />
         <button className='absolute right-2 top-1/2 -translate-y-1/2 p-2 text-xl bg-orange-500 text-white rounded-full'>
            <IoSearch />
        </button>
      </div>
      <ul className="w-[420px]">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-full p-2 bg-white my-2 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <Link href={`#`}
               className="flex items-center justify-between">
                <div className='flex items-center gap-x-3'>
                    <Image src={product.thumbnail} alt={product.name} width={50} height={50}/>
                <div>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                <p>{product.price}</p>
                <button className='p-1 bg-orange-500 text-white rounded'>Add to Memo</button>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourProducts;
