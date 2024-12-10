import React from 'react';
import Container from '../component/layers/Container';
import Image from 'next/image';
import kadir from '@/public/kadir.jpg';
import Link from 'next/link';
import ProductCatd from '../component/layers/ProductCatd';

const page = () => {
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
    <div>
      <Container className={"flex gap-x-10"}>
        <div className="w-80 h-screen shadow-xl bg-gray-200">
          <h1 className="text-2xl font-bold p-3 text-gray-700">Your Store</h1>
          <div className="flex items-center gap-x-3 px-3 py-2 border-b border-gray-300">
            <div className="w-20 rounded-[25%] overflow-hidden object-center border-2 border-gray-300">
              <Image src={kadir} alt="tir" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h1 className="text-base font-semibold text-orange-500">
                Your Store Name
              </h1>
              <p className="text-sm text-gray-600">Store holder Name</p>
            </div>
          </div>
          <ul className='pt-5'>
            {categoryItems.map((item) => (
              <li key={item.id} className="mb-3 px-3">
                <h2 className="font-bold text-lg text-orange-500">{item.cateName}</h2>
                <ul className="pl-4">
                  {item.subCate.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={`/category/${item.cateName}/${subItem.subCateName}`}
                        className='text-base text-gray-600 hover:text-gray-800'
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
        {/* <YourProducts /> */}
        <div>
          <ProductCatd />
        </div>
      </Container>
    </div>
  );
};

export default page;
