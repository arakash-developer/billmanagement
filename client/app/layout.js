import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/layers/Navbar";
import StoreProvider from "./StoreProvider";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "E-Store",
  description: "E-Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
        <Navbar />
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
