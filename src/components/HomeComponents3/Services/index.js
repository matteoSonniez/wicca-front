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

const Card = ({ imgSrc, title }) => (
  <div className="cursor-pointer bg-white relative group w-[20%] aspect-[1/0.3] rounded-2xl  overflow-hidden shadow-sm">
    <div className="relative w-full h-full flex px-4 py-4 space-x-4 items-center">
      <img className="w-8 h-8 text-gray-700" src={imgSrc} alt={title} />
      <span className={`${lato.className} text-gray-800 text-[15px]`}>{title}</span>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="flex w-[100vw] px-[14vw] justify-center space-x-6">
      <Card imgSrc={Logo.src} title="Astrologie" />
      <Card imgSrc={Logo2.src} title="Cartomancie" />
      <Card imgSrc={Logo3.src} title="Guidance & Spiritualité" />
      <Card imgSrc={Logo4.src} title="Voyance" />
      <Card imgSrc={Logo5.src} title="Médiumnité" />
    </div>
  );
};

export default Index;
