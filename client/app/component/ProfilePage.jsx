"use client";
import { useState } from "react";
import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Santi chai",
    email: "dev@4takeaway.com",
    phone: "+49735031450345",
    address: "Hubertusstraße 149, 41239 Mönchengladbach",
  });

  const handleFieldEdit = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-md p-6">
        {/* Left Profile Card */}
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md">
            <Image
              src="/profile-pic.jpg" // Replace with your image path or upload logic
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
            Esther Howard
          </h2>
          <p className="text-gray-600">{formData.address}</p>
          <div className="flex items-center space-x-1 mt-2 text-yellow-500">
            <span className="font-bold text-lg">5.0</span>
            <span className="text-gray-600">(1)</span>
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
              <label className="block text-sm text-gray-600 mb-1">Name</label>
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

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">E-Mail</label>
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
              <label className="block text-sm text-gray-600 mb-1">Phone</label>
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
                Password
              </label>
              <p className="flex items-center space-x-2 text-green-500">
                <span>✔</span>
                <span>Password has been set</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
