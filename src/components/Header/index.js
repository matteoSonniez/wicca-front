"use client";

import { useState } from "react";
import { Inter, Lato, Playfair_Display } from "next/font/google";
import Logo from "@/img/wiccalogo2.png";
import Popup from "@/components/PopUp/Auth"; // <— ajustez le chemin si besoin

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

const playfair2 = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 w-full px-20 py-6 flex justify-between items-center bg-white border-b-[1px] border-gray-200">
    <div className="flex items-center space-x-2">
      <img src={Logo.src} className="w-24 cursor-pointer" alt="Logo" />
    </div>
    <div className={`flex space-x-8 items-center text-[15px] ${lato.className}`}>
      {/* <span className="text-gray-700 cursor-pointer">Centre d'aide</span>
      <span className="text-gray-700 cursor-pointer">Qui nous sommes</span>
      <span className="text-gray-700 cursor-pointer">Nous contacter</span> */}
      <span className="text-gray-700 cursor-pointer">Me connecter</span>
      <div
        className="px-4 py-1 bg-maincolor rounded-md text-white cursor-pointer"
        onClick={() => setIsPopupOpen(true)}
      >
        <span>Inscription</span>
      </div>
    </div>
  </div>
  );
};

export default Header;
