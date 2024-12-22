import React from 'react'
import Login from './component/LogIn'
import Link from 'next/link'
const page = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1>Website HOME</h1>
      <Link className='py-3 px-5 bg-blue-600 text-white mt-4' href='/verify'>Verify Page</Link>
    </div>

  )
}

export default page