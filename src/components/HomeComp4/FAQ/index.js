"use client";
import { useEffect, useState } from "react";
import {
  Freehand,
  Poiret_One,
  Playfair_Display,
  Inter,
  Montserrat,
  Lato,
} from "next/font/google";
import BlobImage from "@/img/blob-image.png";
import Fleche from "@/img/icons/flechebas.png";

const latosmall = Lato({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const mont_semi = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const mont_bold = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const lato_bold = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const Index = () => {
  return (
    <div className="flex w-screen justify-center mt-20 px-[15vw] mb-20">
      <div className="w-full flex flex-col items-center space-y-10">
        <span className={`${mont_bold.className} text-noir/90 text-[26px] mb-2`}>Questions fréquentes</span>
        <div className="flex flex-col w-full space-y-4">
          <div
            style={{
              boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)"
            }}
            className="w-full h-24 rounded-lg bg-white flex items-center px-10 justify-between">
            <span className={`${mont_semi.className} text-noir/80 text-[16px]`}>⁠Pourquoi Wicca ne facture pas à la minute comme les autres plateformes ?</span>
            <img src={Fleche.src} className="w-5 h-4" />
          </div>
          <div
            style={{
              boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)"
            }}
            className="w-full h-24 rounded-lg bg-white flex items-center px-10 justify-between">
            <span className={`${mont_semi.className} text-noir/80 text-[16px]`}>Comment savoir si l’expert est vraiment qualifié ?</span>
            <img src={Fleche.src} className="w-5 h-4" />
          </div>
          <div
            style={{
              boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)"
            }}
            className="w-full h-24 rounded-lg bg-white flex items-center px-10 justify-between">
            <span className={`${mont_semi.className} text-noir/80 text-[16px]`}>Comment se déroule une consultation ?</span>
            <img src={Fleche.src} className="w-5 h-4" />
          </div>
          <div
            style={{
              boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)"
            }}
            className="w-full h-24 rounded-lg bg-white flex items-center px-10 justify-between">
            <span className={`${mont_semi.className} text-noir/80 text-[16px]`}>Et si j’ai une question ou un souci ?</span>
            <img src={Fleche.src} className="w-5 h-4" />
          </div>
          <div
            style={{
              boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)"
            }}
            className="w-full h-24 rounded-lg bg-white flex items-center px-10 justify-between">
            <span className={`${mont_semi.className} text-noir/80 text-[16px]`}> ⁠Et si je ne sais pas vers quelle spécialité me tourner ?</span>
            <img src={Fleche.src} className="w-5 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
