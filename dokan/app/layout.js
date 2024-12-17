import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
                <link rel="shortcut icon" href="./assets/images/favicon.ico" />
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}
