"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData) => {
    let email = formData.get("email");
    let password = formData.get("password");
    let data = { email, password };
    console.log(data);
    
    let url = "https://billmanagement-server.vercel.app/login";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include", // To include cookies
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Response:", result);
      if(result.result){
        redirect("/dashboard")
      }else{
        redirect("/login")
      }
  
      // Optionally, return the result if needed
      return result;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Re-throwing the error for further handling
    }
  };
  