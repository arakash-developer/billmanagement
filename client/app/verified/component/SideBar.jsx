import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import kadir from '@/public/kadir.jpg'

const SideBar = () => {
  return (
    <aside className="w-80 mt-10  overflow-hidden border-r border-gray-200">
          <div className='pl-5'>
             <div>
               <div className='w-20 h-20 overflow-hidden rounded-md ml-3'>
                <Image src={kadir} alt='kadir' className='w-full h-full object-cover'/>
               </div>
               <h2 className="text-xl font-semibold ml-3 text-blue-600">NextEra</h2>
             </div>
            <nav className="mt-6 w-full">
              <ul className="space-y-2 w-full">
                <li>
                  <Link
                    href="/verified"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Your Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
  )
}

export default SideBar