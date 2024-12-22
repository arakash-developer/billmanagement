"use client";
import Navbar from "@/app/verified/component/Navbar";
import axios from "axios";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Font files can be colocated inside of `app`
const euclid = localFont({
  src: "../fonts/euclid.ttf",
  display: "swap",
});

function RootLayout2({ children }) {
  const router = useRouter();
  useEffect(() => {


  const apiClient = axios.create({
    baseURL: "https://billmanagement-server.vercel.app", // Base URL
    withCredentials: true, // Enables cookies or credentials if needed
  });

  // Your token (replace this logic with your actual token handling)
  const token = localStorage.getItem("token"); // Example: Retrieve token from localStorage

  // Define headers
  const headers = {
    token: token ? token : "", // Add the token conditionally
  };

  // Send POST request without data
  apiClient
    .post("/berier", null, { headers })
    .then((response) => {
      if(!response.data.result) {
        router.push("/verify");
        return null;   
      }
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      router.push("/verify");
      return null;
    });
  }, []);
  return (
    <html lang="en">
      <body className={`${euclid.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
export default RootLayout2;
