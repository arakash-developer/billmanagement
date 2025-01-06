"use client";
import { Contex } from "@/app/contexapi/Rights";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";
import Container from "./layers/Container";

const Login = () => {
  let [loading, setLoading] = useState(false);
  let { validated, setValidated } = useContext(Contex);
  const router = useRouter();
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
    setLoading(true);
    axios
      .post("https://billmanagement-server.vercel.app/login", formData, {
        withCredentials: true,
      })
      .then(function (response) {
        if (response.data.result) {
          let token = response.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("login", "true");
          setValidated(true);
          router.push("/dashboard");
          toast.success("Login Success!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLoading(false);
        } else {
          console.log("fail");
          toast.success("Email Or Password Wrong !!", {
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
  };

  return (
    <div className={`flex justify-center items-center h-screen bg-gray-100`}>
      <Container className="w-full md:w-[700px] px-10 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#FFA500] uppercase mb-6">
          EStore Login
        </h1>
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
            className="w-full py-3 z-20 px-6 relative overflow-hidden text-white bg-orange-400 rounded-md shadow-md hover:bg-orange-600 focus:outline-none"
          >
            Login
            <div className="absolute left-0 top-0 w-full h-full z-[-1]">
              <BarLoader
                height={50}
                width={700}
                color="#F97316"
                loading={loading ? true : false}
              />
            </div>
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
