import React from 'react'
import SideBar from './SideBar'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className=''>
      <SideBar/>
       <div className='ml-44 '>
          <Link href="/verified/cash" className='text-2xl font-semibold text-blue-600 py-20 px-28 shadow-sm' >Cash-Memo</Link>
          <Link href="/verified/cash" className='text-2xl font-semibold text-blue-600 py-20 px-28 shadow-sm' >Cash-Memo</Link>
          <Link href="/verified/cash" className='text-2xl font-semibold text-blue-600 py-20 px-28 shadow-sm' >Cash-Memo</Link>
       </div>
    </div>
  )
}

export default Dashboard