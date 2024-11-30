"use client";

import { useState } from "react";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";
import Link from "next/link";
import kadir from "../../public/320431773_512500314189000_5607681979314737853_n (1).jpg";

function AccountSetting() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        gender: "",
        taxId: "",
        Country: "Bangladesh",
        address: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        // Add form submission logic here
    };

  return (
    <div className="w-full">
         <main className="flex-1 p-8 w-full">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800">Account Settings</h1>
                    <div className="flex items-center">
                        <Image
                            src={kadir}
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="ml-2 text-gray-800">Abdul Kadir</span>
                    </div>
                </header>

                <section className="bg-white rounded-lg shadow p-6">
                    <nav className="mb-6">
                        <ul className="flex space-x-6 text-gray-600 border-b">
                            <li>
                                <Link href="#" className="pb-2 font-medium text-lg text-orange-500">
                                    Edit Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="pb-2 font-medium text-lg hover:text-orange-500">
                                    Edit your Stor
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="pb-2 font-medium text-lg hover:text-orange-500">
                                    Change Password
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <form onSubmit={handleSubmit}>
                        {/* Profile Picture Upload */}
                        <div className="flex items-center mb-6">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                                <Image
                                    src={kadir}
                                    alt="Profile"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <label
                                    htmlFor="profilePicture"
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white cursor-pointer"
                                >
                                    <FiCamera />
                                </label>
                                <input
                                    type="file"
                                    id="profilePicture"
                                    className="hidden"
                                    onChange={(e) => console.log(e.target.files)}
                                />
                            </div>
                        </div>

                        {/* Form Inputs */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-600 mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="0806 123 7890"
                                    required
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <label className="text-gray-600">Gender:</label>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={formData.gender === "Male"}
                                            onChange={handleInputChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Male</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={formData.gender === "Female"}
                                            onChange={handleInputChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Female</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Post Code</label>
                                <input
                                    type="text"
                                    name="PostCode"
                                    value={formData.taxId}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Post Code"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Your Country</label>
                                <input
                                    type="text"
                                    name="taxCountry"
                                    value={formData.taxCountry}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Country"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 mb-2">Primari Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="entet primari address"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-8 mt-5">
                        <div className="col-span-2">
                                <label className="block text-gray-600 mb-2">curent Password</label>
                                <input
                                    type="password"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-72 border border-gray-300 rounded px-4 py-2"
                                    placeholder="curent password"
                                />
                            </div>
                          <div className="">
                          <button
                                type="submit"
                                className=" bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                            >
                                Save Changes
                            </button>
                          </div>
                        </div>

                    </form>
                </section>
            </main>
    </div>
  )
}

export default AccountSetting