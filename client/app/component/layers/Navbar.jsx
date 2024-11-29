import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='py-5 bg-red-300'>
        <Container className='flex justify-between items-center'>
            <div className="logo">Logo</div>
            <ul className='flex items-center gap-x-3'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/cash'>Cash</Link></li>
                <li><Link href='/'>Service</Link></li>
                <li><Link href='/'>History</Link></li>
                <li><Link href='/clientdata'>Client Data</Link></li>
                <li><Link href='/'>About</Link></li>
            </ul>
            <Link href='/'>Button</Link>
        </Container>
    </div>
  )
}

export default Navbar