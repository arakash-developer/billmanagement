"use client"
import React, { useContext,useLayoutEffect } from 'react'
import Login from './component/LogIn'
import { Contex } from '@/app/contexapi/Rights'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  let {validated,setValidated} = useContext(Contex)
  useLayoutEffect(()=>{
    let token = localStorage.getItem('login')
    if(token){
      setValidated(token)
      router.push('/profile')
    }
  },[])
  return (
    <div>
      <Login/>
    </div>

  )
}

export default page