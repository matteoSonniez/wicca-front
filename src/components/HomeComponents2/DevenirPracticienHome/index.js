"use client";
import { useEffect, useState } from "react";
import {
  Freehand,
  Poiret_One,
  Playfair_Display,
  Inter,
  Lato,
} from "next/font/google";
import BlobImage from "@/img/blob-image.png";
import Blob1 from "@/img/blob-devenir-practicien.png";

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

const lato_bold = Lato({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
  });

const Index = () => {
  return (
    <div className="flex w-screen justify-center mb-[6vh]">
    <div className="w-[90vw]  bg-white rounded-xl flex px-12 py-16 justify-between">
        <div className="w-[40%] relative flex justify-center items-center">
            <img src={Blob1.src} className="absolute  z-0 w-[35%] left-[12%] rotate-90 top-[5%]"></img>
            <img src={BlobImage.src} className="w-[70%] z-10 mt-[15%]"></img>
        </div>
        <div className="w-[56%] flex flex-col justify-center">
            <span className={`${lato_bold.className} text-gray-800 text-[24px] mb-2`}>Vous êtes praticien ?</span>
            <span className={`${lato.className} text-gray-700 mb-6`}>Wicca, logiciel de gestion dédié au professionnels de l’ésoterisme.</span>

            <span className={`${latosmall.className} text-gray-700 mb-2`}>Gérez vos disponibilités en toute simplicité. Vos rendez-vous s’organisent automatiquement</span>
            <span className={`${latosmall.className} text-gray-700 mb-2`}>Choisissez vos horaires, vos tarifs et vos modalités. Vous êtes maître de votre pratique</span>
            <span className={`${latosmall.className} text-gray-700 mb-2`}>Bénéficiez d’une vitrine professionnelle auprès de personnes en quête de guidance</span>
            <span className={`${latosmall.className} text-gray-700`}>Faites partie d’un cercle de praticiens rigoureusement sélectionnés, valorisés pour leur éthique, leur sérieux et leur singularité</span>

            <button className={`${lato_bold.className} uppercase text-[14px] bg-maincolor px-4 py-2 w-auto self-start rounded-lg mt-8`}>Devenir praticien avec wicca </button>
        </div>
    </div>
      
    </div>
  );
};

export default Index;
