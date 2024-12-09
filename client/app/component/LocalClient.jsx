import Link from 'next/link'
import React from 'react'

const LocalClient = () => {
  return (
    <div className='fixed left-[15%] h-screen overflow-hidden bg-transparent flex flex-col'>
        <h1>Your Clients</h1>
        <ul>
            <li>
                <Link
                 href="#"
                 className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                 >
                 Client 1
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default LocalClient