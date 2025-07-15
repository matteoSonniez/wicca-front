"use client";
import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import Logo from "@/img/balance.png";
import Logo2 from "@/img/cartes.png";
import Logo3 from "@/img/esprit.png";
import Logo4 from "@/img/medium.png";
import Logo5 from "@/img/numerologie.png";
import Logo6 from "@/img/astrologie.png";
import Logo7 from "@/img/medium2.png";
import Logo8 from "@/img/taro.png";
import Logo9 from "@/img/numerologie2.png";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Card = ({ imgSrc, title }) => (
  <div
    style={{
      boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)"
    }}
    className="cursor-pointer bg-white relative group w-[20%] aspect-[1/0.45] rounded-2xl  overflow-hidden shadow-sm text-noir/70 hover:text-maincolor">
    <div className="relative w-full h-full flex px-4 py-4 space-x-4 items-center">
      <img className="w-7 h-7 text-gray-700" src={imgSrc} alt={title} />
      <span className={`${lato.className} text-[15px]`}>{title}</span>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="flex w-[100vw] px-[14vw] justify-center space-x-6">
      <Card imgSrc={Logo6.src} title="Astrologie" />
      <Card imgSrc={Logo2.src} title="Cartomancie" />
      <Card imgSrc={Logo9.src} title="Numérologie" />
      <Card imgSrc={Logo4.src} title="Voyance" />
      <Card imgSrc={Logo7.src} title="Médiumnité" />
      <Card imgSrc={Logo8.src} title="Tarologie" />
    </div>
  );
};

export default Index;
