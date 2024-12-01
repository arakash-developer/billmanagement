"use client"
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import withAuth from '../auth/withAuth'
import { useRouter } from 'next/navigation'
import { Contex } from '../contexapi/Rights'

const page = () => {
  let [clients, setData] = useState([])
  const router = useRouter();
  let { validated, setValidated } = useContext(Contex)
  useLayoutEffect(() => {
    let valid = localStorage.getItem('login');
    if (valid) {
      setValidated(true)
    }
  }, [])
  useEffect(() => {
    let token = localStorage.getItem("token")
    let getdata = async () => {
      let blobs = await fetch("https://billmanagement-server.vercel.app/profilesetting", {
        headers: {
          "token": token ? token : "",
        }
      })
      let response = await blobs.json();
      // let clients = response.clientdata;
      // console.log(clients);
      // clients?.reverse();
      setData(clients)
      console.log(clients);
    }
    
    getdata()
  }, [])
  return (
    <div className='bg-red-700'>Book page</div>
  )
}

export default withAuth(page) 