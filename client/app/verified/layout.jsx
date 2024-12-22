import Navbar from "@/app/verified/component/Navbar";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const euclid = localFont({
  src: '../fonts/euclid.ttf',
  display: 'swap',
})




export const metadata = {
  title: "E-Store",
  description: "E-Store",
};

export default function RootLayout2({ children }) {
  return (
    <html lang="en">
      <body className={`${euclid.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
