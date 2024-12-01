"use client"
import React, { useContext, useLayoutEffect } from 'react'
import Container from '../component/layers/Container'
import Link from 'next/link'
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import withAuth from '../auth/withAuth';
import { useRouter } from 'next/navigation';
import { Contex } from '../contexapi/Rights';

const page = () => {
  let { validated, setValidated } = useContext(Contex)
  const router = useRouter();
  useLayoutEffect(() => {
      let valid = localStorage.getItem('login');
      if (valid) {
          setValidated(true)
      }
  }, [])
  const transition = [
    {
      id: 1,
      name: "abdul kadir",
      address: "dhaka",
      price: "15,000"
    },
    {
      id: 2,
      name: "md Aksh  ",
      address: "dhaka",
      price: "20,000"
    },
    {
      id: 3,
      name: "Abdur Rohim",
      address: "Khunla",
      price: "5,000"
    },
    {
      id: 4,
      name: "Abdul Korim",
      address: "Rongpur",
      price: "10,000.00"
    },
    {
      id: 5,
      name: "md mirza hasan",
      address: "chuadanga",
      price: "13,000.00"
    },
  ]

  return (
    <div className=''>
      <Container className={"max-w-[700px]"}>
          {
            transition.map((item , index)=>(
              <Link href="/"
              key={index}
              className='flex justify-between items-center  border-b-2 border-blue-200 px-4 py-3 bg-blue-100 hover:bg-blue-200 shadow-sm '
            >
              <div>
                <h3 className='font-bold capitalize text-[#FFA500] text-lg '>{item.name}</h3>
                <p className='text-sm font-semibold capitalize text-gray-800 flex gap-x-1'>
                  <MdLocationCity className='text-xl text-gray-800'/>
                  {item.address}
                  </p>
              </div>
              <p className='flex gap-x-1'>
                <span className='text-lg font-semibold capitalize text-gray-800 '>Total Price:
                  <span className='text-green-600'> {item.price}.00</span>
                </span>
                <FaBangladeshiTakaSign className='text-xl text-green-600'/></p>
            </Link>
            ))
          }
      </Container>
    </div>
  )
}

export default withAuth(page)