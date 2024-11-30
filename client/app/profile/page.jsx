"use client"
import React, { useContext, useLayoutEffect } from 'react'
import Container from '../component/layers/Container';
import { Contex } from '@/app/contexapi/Rights'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import kadir from '../../public/320431773_512500314189000_5607681979314737853_n (1).jpg'

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
        <div> 
          <div className='w-[100px] h-[100px] border-2 rounded-full overflow-hidden'>
            <Image src={kadir} alt='kadir'/>
          </div>
           <h1>MD Abdul Kadir</h1>

        </div>
        <button onClick={handlerlogOut}>LogOut</button>
      </Container>
    </div>

  )
}

export default page