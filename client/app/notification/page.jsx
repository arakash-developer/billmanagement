"use client"
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Container from '../component/layers/Container'
import { Contex } from '@/app/contexapi/Rights'
import { useRouter } from 'next/navigation'
import withAuth from '../auth/withAuth'

const page = () => {
    let { validated, setValidated } = useContext(Contex)
  useLayoutEffect(() => {
    let valid = localStorage.getItem('login');
    if (valid) {
      setValidated(true)
    }
  }, [])
  return (
    <Container>
        <div>Notification Page</div>
    </Container>
  )
}

export default page