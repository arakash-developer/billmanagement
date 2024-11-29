"use client";
import React, { useState } from "react";
import Container from "./layers/Container";
import Link from "next/link";
import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle login
    // console.log("Login Submitted", formData);
    axios.post('https://billmanagement-server.vercel.app/login', formData)
      .then(function (response) {
        if(response.data.result) {
          router.push('/profile')
          toast.success('Login Success!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
          );
        } else {
          console.log("fail");
          toast.success('Email Or Password Wrong !!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Container className="w-full md:w-[700px] px-10 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#FFA500] mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              * Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>
          {/* Password Field */}
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="password"
            >
              * Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link href={"/sign"} className="text-orange-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
