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
    <div className='h-screen overflow-hidden bg-transparent flex flex-col'>
        <h1>Your Clients</h1>
        <ul className='w-80'>
           {
            clients.map((client ,index)=>(
              <li 
              key={index} 
              className='hover:bg-gray-200'>
              <Link href="/"
                className='flex justify-between w-full items-center  border-b-2 border-blue-200 px-4 py-3 bg-blue-100 hover:bg-blue-200 shadow-sm'
              >
                <div>
                <h3 className='font-bold capitalize text-[#FFA500] text-lg '>{client.name}</h3>
                  <p className='text-[12px] capitalize text-gray-800 flex items-center gap-x-1'>
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