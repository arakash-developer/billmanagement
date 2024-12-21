import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <div className='flex justify-between'>
          <Link href={'/cash'} className='w-16 h-10 shadow-md'>Cash-Memo</Link>
          <Link href={'/yourstore'} className='w-16 h-10 shadow-md'>Your Store</Link>
          <Link href={'/yourstore'} className='w-16 h-10 shadow-md'>Product Upload</Link>
        </div>
    </div>
  )
}

export default page