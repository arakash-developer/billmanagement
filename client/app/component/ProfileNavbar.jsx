"use client";
import Link from "next/link";
import AccountSetting from "./AccountSetting";
import { useRouter } from "next/navigation";
import { Contex } from '@/app/contexapi/Rights'
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import ProfilePage from "./ProfilePage";
const ProfileNavbar = () => {
    let { validated, setValidated } = useContext(Contex)
    const router = useRouter();
    useLayoutEffect(() => {
        let valid = localStorage.getItem('login');
        if (valid) {
            setValidated(true)
        }
    }, [])
    let handlerlogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        setValidated(false)
        router.push('/')
    }
    return (
        <div className="h-screen  overflow-hidden bg-garay-100 flex">
            {/* Sidebar */}
            <aside className="w-64 mt-28 h-full overflow-hidden">
                <div className="">
                    <div className="">
                        <h2 className="text-2xl font-semibold ml-3 text-blue-600">NextEra</h2>
                    </div>
                    <nav className="mt-6 w-full">
                        <ul className="space-y-2 w-full">
                            <li>
                                <Link href="#profile" className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300">
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <Link href="#store" className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300">
                                    Store Profile
                                </Link>
                            </li>

                            <li>
                                <Link href="#profile" className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300">
                                     Orders
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300">
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href='#'
                                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                                >
                                    Settings
                                </Link>
                            </li>

                            <li>
                                <button onClick={handlerlogOut} className="flex items-center w-full p-3 text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-300">
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className="w-full">
                {/* <ProfilePage /> */}
                <AccountSetting />
            </div>

        </div>
    );
};

export default ProfileNavbar;
