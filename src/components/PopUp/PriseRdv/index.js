"use client";

import { Lato, Poppins, Montserrat } from "next/font/google";
import ImageAuth from "@/img/bg-auth.jpg"
import Google from "@/img/google-logo.svg"
import Mail from "@/img/mail.png"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import RdvImage from "@/img/rdv.svg";
import Check from "@/img/icons/check.png";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const montserrat_semi = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const montserrat_bold = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const poppins_bold = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const poppins_small = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Index = ({ onClose, visible, expert, slot, duree, specialty }) => {
  useEffect(() => {
    console.log("expert", expert);
    console.log("slot", slot);
    console.log("duree", duree);
    console.log("specialty", specialty);
  }, [expert, slot, duree, specialty]);

  return (
    // Container qui couvre tout l'écran et centre la popup
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Backdrop semi-transparent */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose} // Ferme la popup si l'utilisateur clique sur le fond
      />

      {/* Fenêtre de la popup (50% largeur / 50% hauteur) */}
      <div
        className={`
          relative
          bg-white
          w-[1200px]
          h-[740px]
          rounded-lg
          shadow-lg
          flex flex-col overflow-hidden
          ${lato.className}
        `}
      >
        <div className="flex justify-center items-center w-full pt-10">
          <div className="w-[28px] h-[28px] bg-maincolor rounded-full flex items-center justify-center">
            <img src={Check.src} className="w-[14px] h-[14px]"></img>
          </div>
          <div className="w-[380px] h-[4px] bg-maincolor">
          </div>
          <div className="w-[28px] h-[28px] bg-maincolor rounded-full flex items-center justify-center">
            <div className="w-[12px] h-[12px] bg-white rounded-full flex items-center justify-center"></div>
          </div>
          <div className="w-[380px] h-[4px] bg-maincolor/20">
          </div>
          <div className="w-[28px] h-[28px] bg-maincolor/20 rounded-full flex items-center justify-center">
          </div>
        </div>

        <div className="flex items-center justify-center space-x-[140px] h-full">
          <div className="flex items-center justify-center">
            <img src={RdvImage.src} className="w-[400px]"></img>
          </div>

          <div className={`flex bg-maincolor/5 rounded-xl flex-col px-10 py-8 ${montserrat.className}`}>
            <span className={` text-gray-800 text-[23px] mb-6 ${montserrat_semi.className}`}>Récapitulatif de votre RDV</span>
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-4 mb-4">
                  <div className="flex items-center justify-center relative w-[120px] h-[120px] rounded-full overflow-hidden">
                    <Image src="/experts/portrait-home.jpg" fill alt="Expert" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className={` text-gray-800 text-[20px] mb-2 ${montserrat_bold.className}`}>{expert.firstName} {expert.lastName}</span>
                    <span className={` text-gray-800 text-[14px] mb-2`}>51 avis</span>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1 py-4 border-b border-t border-gray-200">
                  <span className={` text-gray-800 text-[14px] ${montserrat_bold.className}`}>Lieu de la consultation</span>
                  <span className={` text-gray-800 text-[14px]`}>{expert.adressrdv} 251 bis boulevard de la République</span>
                </div>
                <div className="flex flex-col gap-y-1 py-4 border-b border-gray-200">
                  <span className={` text-gray-800 text-[14px] ${montserrat_bold.className}`}>Dates et heures</span>
                  <span className={` text-gray-800 text-[14px]`}>{slot.start} à {slot.end} le {slot.date}</span>
                </div>
                <div className="flex flex-col gap-y-1 py-4">
                  <span className={` text-gray-800 text-[14px] ${montserrat_bold.className}`}>Type de consultation</span>
                  <span className={` text-gray-800 text-[14px]`}>{specialty}</span>
                </div>
                <button className={`flex items-center justify-center bg-maincolor text-white rounded-full px-4 py-2 mt-2 ${montserrat_bold.className}`}>Valider</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
