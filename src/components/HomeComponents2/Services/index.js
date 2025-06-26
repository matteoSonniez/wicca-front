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

const Index = () => {
  return (
    <div className="flex w-[100vw] px-20 justify-center space-x-6">
      <div
        className="
        relative bg-white              /* Pour positionner l'overlay */
        group                 /* Permet d'utiliser group-hover: plus bas */
        w-[20%]
        h-[10vh]
        rounded-2xl
        shadow-[0px_5px_8px_0px_rgba(0,0,0,0.04),0px_-5px_8px_0px_rgba(0,0,0,0.04),5px_0px_8px_0px_rgba(0,0,0,0.04),-5px_0px_8px_0px_rgba(0,0,0,0.04),0px_2px_4px_-1px_rgba(0,0,0,0.03),0px_-2px_4px_-1px_rgba(0,0,0,0.03),2px_0px_4px_-1px_rgba(0,0.5,0,0.03),-2px_0px_4px_-1px_rgba(0,0.5,0,0.03)]
        overflow-hidden
        cursor-pointer       
      "
      >
        {/* 1) Overlay gradient (invisible par défaut) */}
        <span
          className={`
            absolute inset-0
            bg-[radial-gradient(circle_at_center,_rgba(233,52,83,0.3)_20%,_rgba(233,52,83,0)_90%)]
            opacity-0
            group-hover:opacity-50
            transition-opacity
            duration-200
        `}
        ></span>

        {/* 2) Contenu blanc avec icône + texte */}
        <div
          className={`
          relative
          w-full h-full
          bg-white
          group-hover:bg-transparent
          transition-colors
          duration-200
          flex items-center
          px-4
          py-4 space-x-4
        `}
        >
          {/* Icône en haut */}
          <img className="w-8 h-8 text-gray-700" src={Logo.src} />

          {/* Texte centré sur deux lignes */}
          <span className={`${lato.className} text-gray-800 text-[15px]`}>
            Astrologie
          </span>
        </div>
      </div>
      <div
        className="
        cursor-pointer
        bg-white
        relative              /* Pour positionner l'overlay */
        group                 /* Permet d'utiliser group-hover: plus bas */
        w-[20%]
        h-[10vh]
        aspect-square
        rounded-2xl
        shadow-[0px_5px_8px_0px_rgba(0,0,0,0.04),0px_-5px_8px_0px_rgba(0,0,0,0.04),5px_0px_8px_0px_rgba(0,0,0,0.04),-5px_0px_8px_0px_rgba(0,0,0,0.04),0px_2px_4px_-1px_rgba(0,0,0,0.03),0px_-2px_4px_-1px_rgba(0,0,0,0.03),2px_0px_4px_-1px_rgba(0,0.5,0,0.03),-2px_0px_4px_-1px_rgba(0,0.5,0,0.03)]
        overflow-hidden       /* Pour que l'overlay respecte les coins arrondis */
      "
      >
        {/* 1) Overlay gradient (invisible par défaut) */}
        <span
          className={`
            absolute inset-0
            bg-[radial-gradient(circle_at_center,_rgba(233,52,83,0.3)_20%,_rgba(233,52,83,0)_90%)]
            opacity-0
            group-hover:opacity-50
            transition-opacity
            duration-200
        `}
        ></span>

        {/* 2) Contenu blanc avec icône + texte */}
        <div
          className={`
          relative
          w-full h-full
          bg-white
          group-hover:bg-transparent
          transition-colors
          duration-200
          flex
          items-center
          px-4
          py-4 space-x-4
        `}
        >
          {/* Icône en haut */}
          <img className="w-8 h-8 text-gray-700" src={Logo2.src} />

          {/* Texte centré sur deux lignes */}
          <span className={`${lato.className} text-gray-800 text-[15px]`}>
            Cartomancie
          </span>
        </div>
      </div>
      <div
        className="
        cursor-pointer
        bg-white
        relative              /* Pour positionner l'overlay */
        group                 /* Permet d'utiliser group-hover: plus bas */
        w-[20%]
        h-[10vh]
        aspect-square
        rounded-2xl
        shadow-[0px_5px_8px_0px_rgba(0,0,0,0.04),0px_-5px_8px_0px_rgba(0,0,0,0.04),5px_0px_8px_0px_rgba(0,0,0,0.04),-5px_0px_8px_0px_rgba(0,0,0,0.04),0px_2px_4px_-1px_rgba(0,0,0,0.03),0px_-2px_4px_-1px_rgba(0,0,0,0.03),2px_0px_4px_-1px_rgba(0,0.5,0,0.03),-2px_0px_4px_-1px_rgba(0,0.5,0,0.03)]
        overflow-hidden       /* Pour que l'overlay respecte les coins arrondis */
      "
      >
        {/* 1) Overlay gradient (invisible par défaut) */}
        <span
          className={`
            absolute inset-0
            bg-[radial-gradient(circle_at_center,_rgba(233,52,83,0.3)_20%,_rgba(233,52,83,0)_90%)]
            opacity-0
            group-hover:opacity-50
            transition-opacity
            duration-200
        `}
        ></span>

        {/* 2) Contenu blanc avec icône + texte */}
        <div
          className={`
          relative
          w-full h-full
          bg-white
          group-hover:bg-transparent
          transition-colors
          duration-200
          flex
          px-4
          py-4 space-x-4
          items-center
        `}
        >
          {/* Icône en haut */}
          <img className="w-8 h-8 text-gray-700" src={Logo3.src} />

          {/* Texte centré sur deux lignes */}
          <span className={`${lato.className} text-gray-800 text-[15px]`}>
            Guidance &amp; Spiritualité
          </span>
        </div>
      </div>
      <div
        className="
        cursor-pointer
        bg-white
        relative              /* Pour positionner l'overlay */
        group                 /* Permet d'utiliser group-hover: plus bas */
        w-[20%]
        h-[10vh]
        aspect-square
        rounded-2xl
        shadow-[0px_5px_8px_0px_rgba(0,0,0,0.04),0px_-5px_8px_0px_rgba(0,0,0,0.04),5px_0px_8px_0px_rgba(0,0,0,0.04),-5px_0px_8px_0px_rgba(0,0,0,0.04),0px_2px_4px_-1px_rgba(0,0,0,0.03),0px_-2px_4px_-1px_rgba(0,0,0,0.03),2px_0px_4px_-1px_rgba(0,0.5,0,0.03),-2px_0px_4px_-1px_rgba(0,0.5,0,0.03)]
        overflow-hidden       /* Pour que l'overlay respecte les coins arrondis */
      "
      >
        {/* 1) Overlay gradient (invisible par défaut) */}
        <span
          className={`
            absolute inset-0
            bg-[radial-gradient(circle_at_center,_rgba(233,52,83,0.3)_20%,_rgba(233,52,83,0)_90%)]
            opacity-0
            group-hover:opacity-50
            transition-opacity
            duration-200
        `}
        ></span>

        {/* 2) Contenu blanc avec icône + texte */}
        <div
          className={`
          relative
          w-full h-full
          bg-white
          group-hover:bg-transparent
          transition-colors
          duration-200
          flex
          px-4
          py-4 space-x-4
          items-center
        `}
        >
          {/* Icône en haut */}
          <img className="w-8 h-8 text-gray-700" src={Logo4.src} />

          {/* Texte centré sur deux lignes */}
          <span className={`${lato.className} text-gray-800 text-[15px]`}>
            Voyance
          </span>
        </div>
      </div>
      <div
        className="
        cursor-pointer
        bg-white
        relative              /* Pour positionner l'overlay */
        group                 /* Permet d'utiliser group-hover: plus bas */
        w-[20%]
        h-[10vh]
        aspect-square
        rounded-2xl
        shadow-[0px_5px_8px_0px_rgba(0,0,0,0.04),0px_-5px_8px_0px_rgba(0,0,0,0.04),5px_0px_8px_0px_rgba(0,0,0,0.04),-5px_0px_8px_0px_rgba(0,0,0,0.04),0px_2px_4px_-1px_rgba(0,0,0,0.03),0px_-2px_4px_-1px_rgba(0,0,0,0.03),2px_0px_4px_-1px_rgba(0,0.5,0,0.03),-2px_0px_4px_-1px_rgba(0,0.5,0,0.03)]
        overflow-hidden       /* Pour que l'overlay respecte les coins arrondis */
      "
      >
        {/* 1) Overlay gradient (invisible par défaut) */}
        <span
          className={`
            absolute inset-0
            bg-[radial-gradient(circle_at_center,_rgba(233,52,83,0.3)_20%,_rgba(233,52,83,0)_90%)]
            opacity-0
            group-hover:opacity-50
            transition-opacity
            duration-200
        `}
        ></span>

        {/* 2) Contenu blanc avec icône + texte */}
        <div
          className={`
          relative
          w-full h-full
          bg-white
          group-hover:bg-transparent
          transition-colors
          duration-200
          flex
          px-4
          py-4 space-x-4
          items-center
        `}
        >
          {/* Icône en haut */}
          <img className="w-8 h-8 text-gray-700" src={Logo5.src} />

          {/* Texte centré sur deux lignes */}
          <span className={`${lato.className} text-gray-800 text-[15px]`}>
          Mediumnite
          </span>
        </div>
      </div>
      <div
        className="
        cursor-pointer
        bg-white
        relative              /* Pour positionner l'overlay */
        group                 /* Permet d'utiliser group-hover: plus bas */
        w-[20%]
        h-[10vh]
        aspect-square
        rounded-2xl
        shadow-[0px_5px_8px_0px_rgba(0,0,0,0.04),0px_-5px_8px_0px_rgba(0,0,0,0.04),5px_0px_8px_0px_rgba(0,0,0,0.04),-5px_0px_8px_0px_rgba(0,0,0,0.04),0px_2px_4px_-1px_rgba(0,0,0,0.03),0px_-2px_4px_-1px_rgba(0,0,0,0.03),2px_0px_4px_-1px_rgba(0,0.5,0,0.03),-2px_0px_4px_-1px_rgba(0,0.5,0,0.03)]
        overflow-hidden       /* Pour que l'overlay respecte les coins arrondis */
      "
      >
        {/* 1) Overlay gradient (invisible par défaut) */}
        <span
          className={`
            absolute inset-0
            bg-[radial-gradient(circle_at_center,_rgba(233,52,83,0.3)_20%,_rgba(233,52,83,0)_90%)]
            opacity-0
            group-hover:opacity-50
            transition-opacity
            duration-200
        `}
        ></span>

        {/* 2) Contenu blanc avec icône + texte */}
        <div
          className={`
          relative
          w-full h-full
          bg-white
          group-hover:bg-transparent
          transition-colors
          duration-200
          flex
          px-4
          py-4 space-x-4
          items-center
        `}
        >
          {/* Icône en haut */}
          <img className="w-8 h-8 text-gray-700" src={Logo.src} />

          {/* Texte centré sur deux lignes */}
          <span className={`${lato.className} text-gray-800 text-[15px]`}>
            Soins Energetiques
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
