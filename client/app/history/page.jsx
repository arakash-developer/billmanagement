"use client"
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
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
  let [cashData,setCashData] = useState([])
  useEffect(() => {
    let token = localStorage.getItem("token")
    let getdata = async () => {
      let blobs = await fetch("https://billmanagement-server.vercel.app/cash", {
        headers: {
          "token": token ? token : "",
        }
      })
      let response = await blobs.json();
      let cashData = response.cashData;
      cashData?.reverse();
      setCashData(cashData)
    }
    getdata()
  }, [])
 

  return (
    <div className=''>
      <Container className={"max-w-[700px]"}>
          {
            cashData.map((item , index)=>(
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
              <div>
              <p className='flex gap-x-1'>
                <span className='text-lg font-semibold capitalize text-gray-800 '>Total Price:
                  <span className='text-green-600'> {item.totalPrice}.00</span>
                </span>
                <FaBangladeshiTakaSign className='text-xl text-green-600'/></p>
                <p> 
                  {
                    new Date().toLocaleDateString("en-BG",{
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  } {" - "}
                   <span>
                    {
                      new Date().toLocaleTimeString("en-BG",{
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    }
                   </span>
                </p>
              </div>
            </Link>
            ))
          }
      </Container>
    </div>
  )
}

export default withAuth(page)