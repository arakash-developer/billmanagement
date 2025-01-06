"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const addUser = async (formData) => {
  const cookieStore = await cookies();
  let email = formData.get("email");
  let password = formData.get("password");
  let data = { email, password };
  let url = "https://billmanagement-server.vercel.app/student/";
  fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Response:", response);
      return response.json();
    })
    .then((data,cookieHandler) => {
      console.log("Response:", data);
    })
    .catch((error) => console.error("Error:", error));
    revalidatePath("/");
    cookieStore.set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNjY0BnbWFpbC5jb20iLCJpYXQiOjE3MzQ4NDg1ODF9.Fv5TPIL_eBb8JnjQl1MQy6jWbb80Qimer_EGaNhtKkc');
};
