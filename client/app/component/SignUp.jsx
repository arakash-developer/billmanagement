"use client";
import React, { useState } from 'react';
import Container from './layers/Container';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Further form submission logic
    // console.log(formData);
    savedata()

  };

  let savedata = () => {
    axios.post('https://billmanagement-server.vercel.app/create', formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <Container className="w-full md:w-[700px]  p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#FFA500] mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="name">
              * Enter your name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your name"
            />
          </div>
          {/* Company Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="companyName">
              * Enter your Company/Store name:
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your company/store name"
            />
          </div>
          {/* Address */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="address">
              * Enter your company/store address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your address"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="email">
              * Enter your email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="phone">
              Enter your phone number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your phone number"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="password">
              * Set your password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="confirmPassword">
              * Confirm your password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Confirm your password"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </Container>
    </div>
  );
};

export default SignUp;
