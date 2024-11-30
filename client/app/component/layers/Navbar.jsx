"use client";
import React, { useContext } from 'react';
import Container from './Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TbHomeFilled } from "react-icons/tb";
import { MdHistoryEdu } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { AiFillNotification } from "react-icons/ai";
import { Contex } from '@/app/contexapi/Rights'
import kadir from '../../../public/320431773_512500314189000_5607681979314737853_n (1).jpg'
import Image from 'next/image';
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  let { validated } = useContext(Contex)
  let router
  try {
    router = useRouter();
  } catch (error) {
    router = null
  }

  const navLinks = [
    { href: '/cash', label: "Home", icon: <TbHomeFilled /> },
    { href: '/history', label: 'History', icon: <MdHistoryEdu /> },
    { href: '/clientdata', label: 'Your Store', icon: <FaStoreAlt /> },
    { href: '/profile', label: 'Notification', icon: <AiFillNotification /> },
  ];
  const pubnavLinks = [
    { href: '/home', label: "Home", icon: <TbHomeFilled /> },
    { href: '/offers', label: 'Offers', icon: <MdHistoryEdu /> },
    { href: '/services', label: 'Services', icon: <FaStoreAlt /> },
    { href: '/aboutus', label: 'About Us', icon: <ImProfile /> },
  ];

  return (
    <div className="relative py-5 bg-gray-100 shadow-md">
      <Container className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="relative flex items-center space-x-4">
          <Link
            href="/profile"
            className="w-10 h-10 border-2 border-orange-200 rounded-full overflow-hidden"
          >
            <Image src={kadir} alt="Profile Picture" className="w-full h-full object-center" />
          </Link>
          <div className='absolute left-full -right-3 top-1/2 -translate-y-1/2'>
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search your client"
                className="py-2 pl-4 pr-12 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 p-2 rounded-full">
                <LuSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* Logo Section */}
        <div className="logo font-bold text-xl text-gray-700">
          <Link href={validated ? "/profile" : "/"}>Logo</Link>
        </div>

        {
          validated &&
          <ul
            className="flex space-x-10 items-center"
            role="navigation"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${router?.pathname === link.href // Safe access to pathname
                    ? 'text-orange-500 underline'
                    : 'text-gray-700 font-medium'
                    } hover:text-orange-400 transition duration-300 flex items-center gap-x-2`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        }
        {validated ? "" :
          <ul
            className="absolute left-1/2 -translate-x-1/2 flex space-x-10 items-center"
            role="navigation"
            aria-label="Main Navigation"
          >
            {pubnavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${router?.pathname === link.href // Safe access to pathname
                    ? 'text-orange-500 underline'
                    : 'text-gray-700 font-medium'
                    } hover:text-orange-400 transition duration-300 flex items-center gap-x-2`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        }

        {/* Button */}
        <div className="flex items-center space-x-2 group">
          <Link
            href="/"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg group-hover:bg-orange-500 transition duration-300"
          >
            Log In
          </Link>
          <Link
            href="/"
            className="bg-orange-500 text-white py-2 px-6 rounded-lg group-hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </Link>
        </div>

      </Container>
    </div>
  );
};

export default Navbar;
