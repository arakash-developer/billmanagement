"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";
import axios from "axios";

function AccountSetting() {
    let [tok, setTok] = useState()
    const [file, setfile] = useState()
    const [name, setName] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [country, setCountry] = useState()
    const [zipcode, setZipcode] = useState()
    let [loading, setLoading] = useState(false)
    let [data, setData] = useState([])
    useEffect(() => {
        let token = localStorage.getItem("token")
        setTok(token)
        let getdata = async () => {
            setLoading(true)
            let blobs = await fetch("https://billmanagement-server.vercel.app/profileSettingUpdate", {
                headers: {
                    "token": token ? token : "",
                }
            })
            let response = await blobs.json();
            setData(response.user)
            setLoading(false)
        }
        getdata()
    }, [])


    const handleUpload = async (e) => {
        e.preventDefault();
            console.log(file);
            
        const formData = new FormData();
        formData.append("file", file);
        // formData.append("firstName", firstName);
        // formData.append("lastName", lastName);
        // formData.append("country", country);
        // formData.append("phone", phone);
        // formData.append("address", address);
        // formData.append("zipcode", zipcode);
        await axios.post("https://billmanagement-server.vercel.app/profileuploadupdate", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "token": tok ? tok : "",
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    if (loading) {
        return null;
    }
    return (
        <div className="w-full h-screen overflow-y-auto bg-gray-50">
            <main id="store" className="flex-1 p-6 w-full max-w-5xl mx-auto">
                {/* Header */}
                <header className="flex justify-between items-center mb-6 px-10">
                    <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>
                    <div className="flex items-center space-x-2">
                        <div className="imagefield rounded-full w-10 h-10 overflow-hidden">
                        <Image
                            src={data.profileimage}
                            alt="Profile Picture"
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"  
                            />
                            </div>
                        <span className="ml-2 text-gray-800">Your Name</span>
                    </div>
                </header>

                {/* Form Section */}
                <section className="bg-white rounded-lg shadow p-6">
                    <form>
                        {/* Profile Picture Upload */}
                        <div className="flex justify-between px-10">
                            <div className="flex items-center mb-6">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                                    <Image
                                        src={file}
                                        alt="Profile Picture"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <label
                                        htmlFor="profilePicture"
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white cursor-pointer"
                                    >
                                        <FiCamera size={20} />
                                    </label>
                                    <input
                                        type="file"
                                        id="profilePicture"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => setfile(e.target.files[0])}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    onClick={handleUpload}
                                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>

                        {/* Input Fields */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-600 mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={data.name}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={data.phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="0806 123 7890"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 mb-2">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Primary Address"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={data.country || "Country"}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Country"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Post Code</label>
                                <input
                                    type="text"
                                    name="taxId"
                                    value={data.zipcode || "Post Code"}
                                    onChange={(e) => setZipcode(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Post Code"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 mb-2">Current Password</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={"Akash"}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Current Password"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default AccountSetting;
