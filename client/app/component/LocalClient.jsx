import Link from 'next/link'
import React from 'react'
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6'
import { HiDotsVertical } from "react-icons/hi";

const LocalClient = () => {
  return (
    <div className='fixed  h-screen overflow-hidden bg-transparent flex flex-col'>
        <h1>Your Clients</h1>
        <ul className=''>
            <li className='hover:bg-gray-200'>
            <Link href="/"
              className='flex justify-between w-64 items-center  border-b-2 border-blue-200 px-4 py-3 bg-blue-100 hover:bg-blue-200 shadow-sm'
            >
              <div>
              <h3 className='font-bold capitalize text-[#FFA500] text-lg '>Abdul Kadir</h3>
                <p className='text-sm font-semibold capitalize text-gray-800 flex gap-x-1'>
                  <FaLocationDot className='text-xl text-gray-800'/>
                  Damurhuda Chuadanga
                  </p>
              </div>
              <p className='flex gap-x-1'>
              <HiDotsVertical className='text-xl text-green-600'/></p>
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default LocalClient