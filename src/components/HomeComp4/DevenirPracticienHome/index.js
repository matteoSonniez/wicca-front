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
    <div className="flex w-screen justify-center mt-20">
      <div className="w-[80vw]  bg-grisbeige/60 rounded-xl flex px-12 py-12 justify-between shadow-sm">
        <div className="w-[40%] relative flex justify-center items-center">
          <img src={Blob1.src} className="absolute  z-0 w-[35%] left-[12%] rotate-90 top-[5%]"></img>
          <img src={BlobImage.src} className="w-[70%] z-10 mt-[15%]"></img>
        </div>
        <div className="w-[56%] flex flex-col justify-center">
          <span className={`${mont_bold.className} text-noir/80 text-[24px] mb-4`}>Vous êtes praticien ?</span>
          <span className={`${mont_semi.className} text-noir/70 mb-8`}>Wicca, logiciel de gestion dédié au professionnels de l’ésoterisme.</span>

          <div className={`${mont.className} text-noir/60 mb-2 flex flex-col text-[14px]`}>
            <span className={` mb-2`}>Gérez vos disponibilités en toute simplicité. Vos rendez-vous s’organisent automatiquement</span>
            <span className={`mb-2`}>Choisissez vos horaires, vos tarifs et vos modalités. Vous êtes maître de votre pratique</span>
            <span className={`mb-2`}>Bénéficiez d’une vitrine professionnelle auprès de personnes en quête de guidance</span>
            <span className={``}>Faites partie d’un cercle de praticiens rigoureusement sélectionnés, valorisés pour leur éthique, leur sérieux et leur singularité</span>
          </div>

          <button className={`${mont_semi.className} uppercase text-[14px] bg-maincolor/90 shadow-sm px-4 py-2 w-auto self-start rounded-lg mt-8 text-white`}>Devenir praticien avec wicca </button>
        </div>
      </div>

    </div>
  );
};

export default Index;
