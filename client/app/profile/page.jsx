"use client"
import React, { useContext, useLayoutEffect } from 'react'
import Container from '../component/layers/Container';
import { Contex } from '@/app/contexapi/Rights'
import { useRouter } from 'next/navigation'
import ProfileInfo from '../component/ProfileInfo';

const page = () => {
  const router = useRouter();
  let { validated,setValidated} = useContext(Contex)
  let handlerlogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    setValidated(false);
    router.push('/')
  }
  useLayoutEffect(() => {
    if (!validated) {
      router.push('/')
    }
  }, [])
  return (
    <div>
      <Container>
        <ProfileInfo/>
        <button onClick={handlerlogOut}>LogOut</button>
      </Container>
    </div>

  )
}

export default page