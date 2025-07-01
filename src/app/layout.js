
import { Geist, Geist_Mono } from "next/font/google";
//import Header from "@/components/Header";
import "./globals.css";

// const calSans = localFont({
//   src: [
//     {
//       path: './fonts/CalSans-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './fonts/CalSans-Regular.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   display: 'swap',      // swap évite le FOUT
//   adjustFontFallback: false,
// });


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
      className="bg-blanc"
      >
        {/* <Header className={calSans.className}></Header> */}
        {children}
      </body>
    </html>
  );
}
