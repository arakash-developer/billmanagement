"use client";
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Container from './Container';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TbHomeFilled } from "react-icons/tb";
import { MdHistoryEdu, MdToken } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { AiFillNotification } from "react-icons/ai";
import Image from 'next/image';
import { LuSearch } from "react-icons/lu";
import { Contex } from '@/app/contexapi/Rights'
import eStoreLogo from '@/public/e-store.png'

const Navbar = () => {
  let [show , setShow] = useState()
  let [data, setData] = useState([])
  useEffect(() => {
      let token = localStorage.getItem("token")
      let getdata = async () => {
        let blobs = await fetch("https://billmanagement-server.vercel.app/profilesetting", {
          headers: {
            "token": token ? token : "",
          }
        })
        let response = await blobs.json();
        setData(response.profileset)
      }
      getdata()
    }, [])
  let { validated,setValidated }= useContext(Contex)
  let  router = useRouter()
  let {com} = useContext(Contex)
  const navLinks = [
    { href: '/cash', label: "Cash", icon: <TbHomeFilled /> },
    { href: '/history', label: 'History', icon: <MdHistoryEdu /> },
    { href: '/yourstore', label: 'Your Store', icon: <FaStoreAlt /> },
    { href: '/notification', label: 'Notification', icon: <AiFillNotification /> },
  ];
  const pubnavLinks = [
    { href: '/', label: "Home", icon: <TbHomeFilled /> },
    { href: '/offers', label: 'Offers', icon: <MdHistoryEdu /> },
    { href: '/services', label: 'Services', icon: <FaStoreAlt /> },
    { href: '/aboutus', label: 'About Us', icon: <ImProfile /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-full py-6 bg-[var(--bg20)] shadow-md z-50">
      <Container className="flex justify-between items-center">
        {/* Profile and Search Section */}
         {
           validated &&
           <div className="relative flex items-center space-x-4">
          <Link
            href="/profile"
            className="w-10 h-10 border-2 border-orange-200 rounded-full overflow-hidden"
          >
            {/* <Image src={data.profileimage} width={200} height={200} alt={kadir} className="w-full h-full object-center" /> */}
          </Link>
          <div className='md:absolute md:left-full md:-right-3 md:top-1/2 md:-translate-y-1/2'>
            <div className="relative w-64 md:w-72">
              <input
                type="text"
                placeholder="Search your client"
                className={`py-2 md:py-2 pl-4 pr-12 border text-sm md:text-base border-gray-300 rounded-full md:w-full w-60 focus:outline-none focus:ring-2 focus:ring-orange-400 `}
              />
              <button className="absolute right-6 md:right-2 top-1/2 -translate-y-1/2 bg-orange-500 p-1.5 md:p-2 rounded-full">
                <LuSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
         }
         {
           !validated &&
           <div className="w-12 md:w-14 logo font-bold text-xl text-gray-700">
           <Link href="/">
           <Image src={eStoreLogo} alt="e-store" className="w-full h-full object-center" />
           </Link>
         </div>
         }
        {/* Logo Section */}
       

        {
          validated &&
          <ul
            className="absolute left-1/2 bottom-0 md:bottom-1/2 md:translate-y-1/2 -translate-x-1/2 flex space-x-10 items-center"
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
                    } hover:text-orange-400 transition duration-300 flex items-center md:gap-x-2 text-xl md:text-base
                     px-5 md:px-0 py-2 md:py-0 hover:bg-gray-300 md:hover:bg-transparent`}
                >
                  <span>{link.icon} </span>
                  <span className='hidden md:block'>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        }
        {validated ? "" :
          <ul
            className="absolute left-1/2 bottom-0 md:bottom-1/2 md:translate-y-1/2 -translate-x-1/2 flex space-x-10 items-center"
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
                    } hover:text-orange-400 transition duration-300 text-xl md:text-base flex items-center md:gap-x-2 px-5
                     md:px-0 py-2 md:py-0 hover:bg-gray-300 md:hover:bg-transparent`}
                >
                  {link.icon}
                  <span className='hidden md:block'>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        }

        {/* Button */}
        {
          validated &&
          <div className='w-12 md:w-14'>
            <Image src={eStoreLogo} alt='estore' className='w-full h-full object-center' />
          </div>
        }
       {
        !validated &&
        <div className="flex items-center space-x-2 group">
        <Link
          href="/verify/login"
          className="bg-blue-600 text-white text-[12px] py-1 px-3 md:text-base md:py-2 md:px-6 rounded-lg group-hover:bg-orange-500 transition duration-300"
        >
          Log In
        </Link>
        <Link
          href="/verify/sign"
          className="bg-orange-500 text-white text-[12px] py-1 px-3 md:text-base md:py-2 md:px-6 rounded-lg group-hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
       }

      </Container>
    </div>
  );
};

export default Navbar;
