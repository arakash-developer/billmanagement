"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { FiCamera } from "react-icons/fi";

function AccountSetting() {
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
      console.log(data.profileimage);
      



    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        gender: "",
        taxId: "",
        country: "Bangladesh",
        address: "",
        currentPassword: "",
    });

    const [profilePicture, setProfilePicture] = useState(null); 

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result); 
            };
            reader.readAsDataURL(file); 
        }
    };

    // Handle form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        console.log("Uploaded Profile Picture:", profilePicture);
    };

    return (
        <div className="w-full h-screen overflow-y-auto bg-gray-50">
            <main className="flex-1 p-6 w-full max-w-5xl mx-auto">
                {/* Header */}
                <header className="flex justify-between items-center mb-6 px-10">
                    <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>
                    <div className="flex items-center space-x-2">
                        <Image
                            src={data.profileimage} 
                            alt="Profile Picture"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="ml-2 text-gray-800">Your Name</span>
                    </div>
                </header>

                {/* Form Section */}
                <section className="bg-white rounded-lg shadow p-6">
                    <form onSubmit={handleSubmit}>
                        {/* Profile Picture Upload */}
                        <div className="flex justify-between px-10">
                            <div className="flex items-center mb-6">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                                    <Image
                                        src={data.profileimage} 
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
                                        onChange={handleProfilePictureChange}
                                    />
                                </div>
                            </div>
                            <div>
                            <button
                                type="submit"
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
                                    value={formData.firstName}
                                    onChange={handleInputChange}
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
                                    value={formData.lastName}
                                    onChange={handleInputChange}
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
                            <div className="col-span-2">
                                <label className="block text-gray-600 mb-2">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Primary Address"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Country"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Post Code</label>
                                <input
                                    type="text"
                                    name="taxId"
                                    value={formData.taxId}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2"
                                    placeholder="Post Code"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 mb-2">Current Password</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleInputChange}
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
