import React from 'react'
import SideBar from './SideBar'
import Link from 'next/link'
import { FcMoneyTransfer } from "react-icons/fc";

const Dashboard = () => {
  return (
    <div className='h-screen flex gap-x-40'>
      <SideBar/>
       <div className='mt-10 mr-40 flex w-full justify-between'>
         <div className=''>
           <Link href="/cash" className='px-20 py-10 bg-orange-50 flex flex-col items-center border rounded-md hover:shadow-2xl transition-all duration-300'>
                <FcMoneyTransfer className='w-40 h-40'/>
               Cash-Memo
           </Link>
         </div>
         <div className=''>
           <Link href="/cash" className='px-20 py-10 bg-orange-50 flex flex-col items-center border rounded-md hover:shadow-2xl transition-all duration-300'>
                <FcMoneyTransfer className='w-40 h-40'/>
               Cash-Memo
           </Link>
         </div>
         <div className=''>
           <Link href="/cash" className='px-20 py-10 bg-orange-50 flex flex-col items-center border rounded-md hover:shadow-2xl transition-all duration-300'>
                <FcMoneyTransfer className='w-40 h-40'/>
               Cash-Memo
           </Link>
         </div>
       </div>
    </div>
  )
}

export default Dashboard