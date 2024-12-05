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
import kadir from '@/public/kadir.jpg'
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
    { href: '/clientdata', label: 'Your Store', icon: <FaStoreAlt /> },
    { href: '/notification', label: 'Notification', icon: <AiFillNotification /> },
  ];
  const pubnavLinks = [
    { href: '/', label: "Home", icon: <TbHomeFilled /> },
    { href: '/offers', label: 'Offers', icon: <MdHistoryEdu /> },
    { href: '/services', label: 'Services', icon: <FaStoreAlt /> },
    { href: '/aboutus', label: 'About Us', icon: <ImProfile /> },
  ];

  return (
    <div className="absolute top-0 left-0 w-full pb-5 md:py-5 bg-gray-100 shadow-md z-50">
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
          <div className='absolute md:left-full md:-right-3 top-full -right-[265px] md:top-1/2 -translate-y-1/2'>
            <div className="relative w-64 md:w-72">
              <input
                type="text"
                placeholder="Search your client"
                className={`py-1 md:py-2 pl-4 pr-12 border text-sm md:text-base border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-orange-400 ${show ? 'block' : 'hidden md:block'}`}
              />
              <button onClick={() => setShow(!show)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 p-1.5 md:p-2 rounded-full">
                <LuSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
         }
         {
           !validated &&
           <div className="md:w-14 logo font-bold text-xl text-gray-700">
           <Link href="/">
           <Image src={eStoreLogo} alt="e-store" className="w-full h-full object-center" />
           </Link>
         </div>
         }
        {/* Logo Section */}
       

        {
          validated &&
          <ul
            className="absolute left-1/2 -translate-x-1/2 flex space-x-10 items-center"
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
                    } hover:text-orange-400 transition duration-300 flex items-center gap-x-2 pb-4 md:pb-0`}
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
                  <span className='hidden md:block'>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        }

        {/* Button */}
        {
          validated &&
          <div className='w-10 md:w-14'>
            <Image src={eStoreLogo} alt='estore' className='w-full h-full object-center' />
          </div>
        }
       {
        !validated &&
        <div className="flex items-center space-x-2 group">
        <Link
          href="/login"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg group-hover:bg-orange-500 transition duration-300"
        >
          Log In
        </Link>
        <Link
          href="/sign"
          className="bg-orange-500 text-white py-2 px-6 rounded-lg group-hover:bg-blue-600 transition duration-300"
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
