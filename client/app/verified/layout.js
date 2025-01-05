import Navbar from "@/app/verified/component/Navbar";
import localFont from "next/font/local";
import SideBar from "./component/SideBar";

// Font files can be colocated inside of `app`
const euclid = localFont({
  src: "../fonts/euclid.ttf",
  display: "swap",
});

function RootLayout2({ children }) {
  return (
    <html lang="en">
      <body className={`${euclid.className}`}>
        <Navbar />
        <div className="flex ">
          <SideBar/>
          {children}
        </div>
      </body>
    </html>
  );
}
export default RootLayout2;
