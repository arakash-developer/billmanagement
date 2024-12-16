'use client';
import React, { useState } from 'react';
import Container from '@/app/component/layers/Container';
import Image from 'next/image';
import kadir from '@/public/kadir.jpg';
import Link from 'next/link';
import ProductCatd from '@/app/component/layers/ProductCatd';
import ProductUpload from '../component/ProductUpload';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categoryItems = [
    {
      id: 1,
      cateName: "Electronics",
      subCate: [
        { id: 1, subCateName: "Mobile" },
        { id: 2, subCateName: "Laptop" },
        { id: 3, subCateName: "Printer" },
      ],
    },
    {
      id: 2,
      cateName: "Fashion",
      subCate: [
        { id: 1, subCateName: "Men" },
        { id: 2, subCateName: "Women" },
        { id: 3, subCateName: "Kids" },
      ],
    },
    {
      id: 3,
      cateName: "Home",
      subCate: [
        { id: 1, subCateName: "Furniture" },
        { id: 2, subCateName: "Decor" },
        { id: 3, subCateName: "Kitchen" },
      ],
    },
  ];

  return (
    <div className="">
      <Container className="flex gap-x-10">
        {/* Sidebar */}
        <div className="w-80 h-screen shadow-xl bg-gray-200">
          <h1 className="text-2xl font-bold p-3 text-gray-700">Your Store</h1>
          <div className="flex items-center gap-x-3 px-3 py-2 border-b border-gray-300">
            <div className="w-20 rounded-[25%] overflow-hidden object-center border-2 border-gray-300">
              <Image src={kadir} alt="Store Owner" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h1 className="text-base font-semibold text-orange-500">
                Your Store Name
              </h1>
              <p className="text-sm text-gray-600">Store Holder Name</p>
            </div>
          </div>
          <ul className="pt-5">
            {categoryItems.map((item) => (
              <li key={item.id} className="mb-3 px-3">
                <h2 className="font-bold text-lg text-orange-500">{item.cateName}</h2>
                <ul className="pl-4">
                  {item.subCate.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={`/category/${item.cateName}/${subItem.subCateName}`}
                        className="text-base text-gray-600 hover:text-gray-800"
                      >
                        {subItem.subCateName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center py-5">
            <h1 className="text-2xl font-bold py-2 text-gray-700">Your Products</h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-1 bg-orange-500 text-white hover:bg-orange-600 rounded-md z-[100]"
            >
              {isOpen ? 'Close' : 'Upload Product'}
            </button>
          </div>

          {/* Product Upload Modal */}
          {isOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white pt-44 rounded-lg shadow-lg w-full bg-opacity-60 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-red-500 font-bold text-lg"
                >
                  X
                </button>
                <ProductUpload />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-5 gap-3 h-screen overflow-hidden overflow-y-scroll">
            {Array.from({ length: 30 }).map((_, index) => (
              <ProductCatd key={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
