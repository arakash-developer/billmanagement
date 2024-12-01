"use client"
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import withAuth from '../auth/withAuth'
import { useRouter } from 'next/navigation'
import { Contex } from '../contexapi/Rights'
import Image from 'next/image'

const page = () => {
  let [loading, setLoading] = useState(false)
  let [data, setData] = useState([])
  const router = useRouter();
  let { validated, setValidated } = useContext(Contex)
  useLayoutEffect(() => {
    let valid = localStorage.getItem('login');
    if (valid) {
      setValidated(true)
    }
  }, [])
  useLayoutEffect(() => {
    let token = localStorage.getItem("token")
    let getdata = async () => {
      setLoading(true)
      let blobs = await fetch("https://billmanagement-server.vercel.app/profilesetting", {
        headers: {
          "token": token ? token : "",
        }
      })
      let response = await blobs.json();
      setData(response.profileset)
      setLoading(false)
    }
    getdata()
    
  }, [])

  if(loading) {
    return null
  }
  return (
    <div className='bg-red-700'>Book page
    <Image src={data.profileimage} alt="cc" width={100} height={100}/>
    </div>
  )
}

export default withAuth(page) 