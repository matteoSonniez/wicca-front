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
    <>
      {/* Header principal */}
      <div className="absolute z-50 w-full px-[3vw] py-[2vh] flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={Logo.src} className="w-24 cursor-pointer" alt="Logo" />
        </div>
        <div className={`flex space-x-8 items-center text-[15px] ${lato.className}`}>
          <span className="text-white cursor-pointer">Me connecter</span>
          <div
            className="px-4 py-1 bg-white rounded-md text-black cursor-pointer"
            onClick={() => setIsPopupOpen(true)}
          >
            <span>Inscription</span>
          </div>
        </div>
      </div>

      {/* On affiche la popup seulement si isPopupOpen === true */}
      {isPopupOpen && (
        <Popup
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
