"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Contex } from "@/app/contexapi/Rights";
import { useContext, useLayoutEffect, useState } from "react";
import ProfilePage from "./ProfilePage";
import Orders from "./Orders ";
import Settings from "./Settings ";

const ProfileNavbar = () => {
  const { validated, setValidated } = useContext(Contex);
  const router = useRouter();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useLayoutEffect(() => {
    const valid = localStorage.getItem("login");
    if (valid) {
      setValidated(true);
    }
  }, [setValidated]);

  const handlerLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    setValidated(false);
    router.push("/");
  };

  return (
    <>
      <div className="h-screen overflow-hidden bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="fixed w-64 mt-10 h-full overflow-hidden">
          <div>
            <h2 className="text-2xl font-semibold ml-3 text-blue-600">NextEra</h2>
            <nav className="mt-6 w-full">
              <ul className="space-y-2 w-full">
                <li>
                  <Link
                    href="#profile"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#store"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Store Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#orders"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#dashboard"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#settings"
                    className="flex items-center p-3 text-gray-700 hover:bg-orange-500 hover:text-white transition duration-300"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setShowLogoutConfirm(true)}
                    className="flex items-center w-full p-3 text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full pl-[270px] overflow-scroll">
          <ProfilePage />
          <Orders />
          <Settings />
        </div>
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Are you sure you want to log out?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={handlerLogOut}
                className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
              >
                Yes, Log Out
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition duration-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileNavbar;
