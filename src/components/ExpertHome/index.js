"use client";
import { useEffect, useState } from "react";
import {
  Freehand,
  Poiret_One,
  Playfair_Display,
  Inter,
  Lato,
} from "next/font/google";
import Menu from "@/img/menu.png";
import Profile from "@/img/profile.jpg";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Index = () => {
  return (
    <div className="flex flex-col mb-[6vh] space-y-6">
      <div> 
        <span className={`${lato.className} text-[40px] text-gray-700`}>Nos practitiens</span>
      </div>
      <div className="bg-maincolor bg-opacity-100 w-[83vw] h-[80vh] rounded-xl flex justify-evenly">

        <div className="flex flex-col h-full w-[19%] justify-center space-y-2">
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75 cursor-pointer hover:brightness-100 transition-all duration-300">
            <img className="object-cover h-full w-full" src="/experts/portrait.webp"></img>
          </div>
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait2.webp"></img>
          </div>
        </div>

        <div className="flex flex-col h-full w-[19%] justify-center overflow-hidden space-y-2">
          <div className=" flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait3.webp"></img>
          </div>
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait5.webp"></img>
          </div>
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait8.webp"></img>
          </div>
        </div>

        <div className="flex flex-col h-full w-[19%] justify-center space-y-2">
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait7.webp"></img>
          </div>
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait6.webp"></img>
          </div>
        </div>

        <div className="flex flex-col h-full w-[19%] justify-center overflow-hidden space-y-2">
          <div className=" flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src={Profile.src}></img>
          </div>
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait2.webp"></img>
          </div>
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait3.webp"></img>
          </div>
        </div>

        <div className="flex flex-col h-full w-[19%] justify-center space-y-2">
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait5.webp"></img>
          </div>
          <div className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75">
            <img className="object-cover h-full w-full" src="/experts/portrait3.webp"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
