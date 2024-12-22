"use client";
import { useState } from "react";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";
import kadir from '../../public/kadir.jpg'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Abdul Kadir",
    email: "abdulkadir112@me.com",
    phone: "+88 01729628402",
    address: "Hemayetpur, Damurhuda, Chuadanga",
    profilePicture: {kadir},
  });

  const handleFieldEdit = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div id="profile" className="w-full bg-gray-50  items-center p-6">
           <h1 className="text-3xl font-semibold text-gray-800 py-4">Profile</h1>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-md p-6">
        {/* Left Profile Card */}
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md">
            <Image
              src={kadir} 
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
            <label
              htmlFor="profilePicture"
              className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-full cursor-pointer"
            >
              <FiEdit2 />
            </label>
            <input
              type="file"
              id="profilePicture"
              className="hidden"
              accept="image/*"
            />
          </div>

          <h2 className="text-xl font-semibold mt-4 text-gray-800">
            {formData.name}
          </h2>
          <p className="text-gray-600 w-72">{formData.address}</p>
          <div className="flex items-center space-x-2 mt-3">
           <div className="px-3 py-2 shadow-sm rounded-md border border-gray-300">
           <span className="font-bold text-lg text-orange-500">5 </span>
           <span className="text-gray-600">Trusted</span>
           </div>
            <div className="px-3 py-2 shadow-sm rounded-md border border-gray-300">
            <span className="font-bold text-lg text-orange-500">10 </span>
            <span className="text-gray-600">fevourit</span>
            </div>
          </div>
        </div>

        {/* Right User Information */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              User Information
            </h3>
            <button
              className={`px-4 py-2 rounded ${
                isEditing ? "bg-gray-300" : "bg-red-500 text-white"
              }`}
              onClick={toggleEditing}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          {/* User Info Fields */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-0.5">Full Name</label>
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                className={`w-full px-4 py-2 rounded ${
                  isEditing
                    ? "border border-gray-300 bg-gray-100"
                    : "bg-transparent"
                }`}
                onBlur={(e) => handleFieldEdit("name", e.target.innerText)}
              >
                {formData.name}
              </div>
            </div>
            {/* Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-0.5">Address</label>
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                className={`w-full px-4 py-2 rounded ${
                  isEditing
                    ? "border border-gray-300 bg-gray-100"
                    : "bg-transparent"
                }`}
                onBlur={(e) => handleFieldEdit("address", e.target.innerText)}
              >
                {formData.address}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-0.5">E-Mail</label>
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                className={`w-full px-4 py-2 rounded ${
                  isEditing
                    ? "border border-gray-300 bg-gray-100"
                    : "bg-transparent"
                }`}
                onBlur={(e) => handleFieldEdit("email", e.target.innerText)}
              >
                {formData.email}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600 mb-0.5">Phone</label>
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                className={`w-full px-4 py-2 rounded ${
                  isEditing
                    ? "border border-gray-300 bg-gray-100"
                    : "bg-transparent"
                }`}
                onBlur={(e) => handleFieldEdit("phone", e.target.innerText)}
              >
                {formData.phone}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                 Current Password
              </label>
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                className={`w-full px-4 py-2 rounded ${
                  isEditing
                    ? "border border-gray-300 bg-gray-100"
                    : "bg-transparent"
                }`}
                onBlur={(e) => handleFieldEdit("password", e.target.innerText)}
              >
                ********
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
