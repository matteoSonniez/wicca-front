"use client";
import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import Logo from "@/img/balance.png";
import Logo2 from "@/img/cartes.png";
import Logo3 from "@/img/esprit.png";
import Logo4 from "@/img/medium.png";
import Logo5 from "@/img/numerologie.png";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const lato_bold = Lato({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
  });

const Index = () => {
  return (
    <div className="flex w-screen justify-center mb-[6vh]">
      <div className="w-[83vw] bg-maincolor h-[70vh] rounded-xl overflow-hidden flex">
        <div className="relative w-[45%] h-full justify-center flex">
          <video
            className=" w-full h-full object-cover brightness-50"
            src="/video/video-home2.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="w-[55%] flex flex-col items-center">
            <div className="flex space-x-3 w-[90%] pt-4 justify-between">
                <div className="bg-white px-6 py-1 flex items-center justify-center rounded-lg">
                    <span className={`${lato.className} text-maincolor text-[16px]`}>Divination </span>
                </div>
                <div className="bg-white px-6 flex items-center justify-center rounded-lg">
                    <span className={`${lato.className} text-maincolor text-[18px]`}>Soins Energetiques </span>
                </div>
                {/* <div className="bg-white px-6 flex items-center justify-center rounded-lg">
                    <span className={`${lato.className} text-maincolor text-[18px]`}>Guidance & Spiritualité </span>
                </div> */}
                <div className="bg-white px-6 flex items-center justify-center rounded-lg">
                    <span className={`${lato.className} text-maincolor text-[18px]`}>Formation </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
