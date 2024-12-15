import Link from 'next/link'
import React from 'react'
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6'
import { HiDotsVertical } from "react-icons/hi";


const LocalClient = () => {

    const clients = [
       {
         id: 1,
         name: "Abdul Kadir",
         address: "Damurhuda Chuadanga",
       },
       {
         id: 2,
         name: "MD Aksh Rahman",
         address: "Damurhuda Chuadanga",
       },
       {
         id: 3,
         name: "Abdul Kadir",
         address: "Damurhuda Chuadanga",
       },
       {
         id: 4,
         name: "Abdul Kadir",
         address: "Damurhuda Chuadanga",
       },
       {
         id: 5,
         name: "Abdul Kadir",
         address: "Damurhuda Chuadanga",
       },
       {
         id: 6,
         name: "Abdul Kadir",
         address: "Damurhuda Chuadanga",
       },
       {
         id: 7,
         name: "Abdul Kadir",
         address: "Damurhuda Chuadanga",
       },
    ];

  return (
    <div className='hidden overflow-hidden bg-transparent md:flex flex-col'>
        <h1 className='text-2xl font-bold py-2 text-gray-700'>Your Clients</h1>
        <ul className='w-80'>
           {
            clients.map((client ,index)=>(
              <li 
              key={index} 
              className='w-full p-2 bg-white my-2 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
              <Link href="/"
                className='flex justify-between w-full items-center shadow-sm'
              >
                <div>
                <h3 className='font-bold capitalize text-orange-500 text-lg '>{client.name}</h3>
                  <p className='text-[12px] capitalize text-gray-500 flex items-center gap-x-1'>
                    <FaLocationDot className='text-sm text-gray-800'/>
                    <span>{client.address}</span>
                    </p>
                </div>
                <p className='flex gap-x-1'>
                <HiDotsVertical className='text-xl text-orange-500'/></p>
              </Link>
              </li>
            ))
           }
        </ul>
    </div>
  )
}

export default LocalClient