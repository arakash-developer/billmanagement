"use client";
import Navbar from "@/app/verified/component/Navbar";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

// Font files can be colocated inside of `app`
const euclid = localFont({
  src: "../fonts/euclid.ttf",
  display: "swap",
});

function RootLayout2({ children }) {
  const router = useRouter();
  let token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    router.push("/verify");
    return null;
  }
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
