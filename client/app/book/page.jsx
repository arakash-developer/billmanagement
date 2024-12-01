"use client"
import React from 'react'
import withAuth from '../auth/withAuth'

const page = () => {
  return (
    <div className='bg-red-700'>Book page</div>
  )
}

export default withAuth(page) 