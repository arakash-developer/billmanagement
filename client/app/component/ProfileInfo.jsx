"use client";
import Link from "next/link";
import AccountSetting from "./AccountSetting";
import { useRouter } from "next/navigation";
const ProfileInfo = () => {
    const router = useRouter();
    let handlerlogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        router.push('/')
    }
    return (
        <div className="h-[60%] overflow-hidden bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md ">
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-blue-600">Company Name</h2>
                </div>
                <nav className="mt-6">
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300">
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300">
                                Transactions
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300">
                                Your Profile
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300">
                                Notifications
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='#second'
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
            </aside>

            <AccountSetting />

        </div>
    );
};

export default ProfileInfo;
