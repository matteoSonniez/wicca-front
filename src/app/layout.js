"use client"

import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import localFont from 'next/font/local';
import { useEffect } from "react";

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
  // useEffect(() => {
  //   let scrollTarget = window.scrollY;
  //   let currentScroll = window.scrollY;
  //   let ticking = false;

  //   const onWheel = (e) => {
  //     e.preventDefault();
  //     scrollTarget += e.deltaY * 0.8; // 0.3 = scroll plus lent (ajuste ce chiffre)
  //     scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));
  //     if (!ticking) requestAnimationFrame(updateScroll);
  //     ticking = true;
  //   };

  //   const updateScroll = () => {
  //     currentScroll += (scrollTarget - currentScroll) * 0.1; // 0.1 = fluidité (ajuste si besoin)
  //     window.scrollTo(0, Math.round(currentScroll));
  //     if (Math.abs(scrollTarget - currentScroll) > 0.5) {
  //       requestAnimationFrame(updateScroll);
  //     } else {
  //       ticking = false;
  //     }
  //   };

  //   window.addEventListener("wheel", onWheel, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", onWheel);
  //   };
  // }, []);

  return (
    <html lang="en">
      {/* <head>
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head> */}
      <body
      >
        {/* <Header className={calSans.className}></Header> */}
        {children}
      </body>
    </html>
  );
}
