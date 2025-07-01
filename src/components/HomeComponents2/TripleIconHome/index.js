"use client";
import { useEffect, useState } from "react";
import { Lato, Montserrat } from "next/font/google";

import Icon1 from "@/img/icon-group.png";
import Icon2 from "@/img/icon-calendar.png";
import Icon3 from "@/img/icon-creditcard.png";
import BlobIcon from "@/img/blob-for-icon.svg";
import BlobIcon2 from "@/img/blob-for-icon2.svg";
import BlobIcon3 from "@/img/blob-for-icon3.svg";
import CalendarGif from "@/img/gifs/calendar.gif";
import PoepleGif from "@/img/gifs/people.gif";
import CardsGif from "@/img/gifs/cards2.gif";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const mont_bold = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});
const mont_semi = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const Index = () => {
  return (
    <div className="flex flex-col items-center mb-28">
      <span className={`${mont_semi.className} text-[35px] text-blanc text-center mb-24`}>
        Votre partenaire spirituel <br></br> au quotidien
      </span>
      <div className="flex space-x-16">
        <div className="w-[380px] flex flex-col items-center">
          <div className="w-[150px] h-[150px] relative flex justify-center bg-test rounded-full items-center mb-8">
            {/* <img src={CardsGif.src} alt="GIF réservation" className="w-28 h-28" /> */}
          </div>
          <span
            className={`${mont_bold.className} text-center text-blanc text-[25px]`}
          >
            Consultations 24h sur 24
          </span>
          <span
            className={`${mont.className} text-center text-blanc/80 text-[16px] leading-relaxed mt-7`}
          >
            Réservez et gérez vos rendez-vous, selon vos envies, en un clic,
            avec service de notification personnalisés
          </span>
        </div>
        <div className="w-[380px] flex flex-col items-center">
          <div className="w-[150px] h-[150px] relative flex justify-center bg-test rounded-full items-center mb-8">
            {/* <img src={PoepleGif.src} alt="GIF réservation" className="w-28 h-28" /> */}
          </div>
          <span
            className={`${mont_bold.className} text-center text-blanc text-[25px]`}
          >
            Diversité des Prestations
          </span>
          <span
            className={`${mont.className} text-center text-blanc/80 text-[16px] leading-relaxed mt-7`}
          >
             Explorez une gamme variée de services spirituels, pour répondre à
             toutes vos attentes, avec clarté et sérénité
          </span>
        </div>
        <div className="w-[380px] flex flex-col items-center">
          <div className="w-[150px] h-[150px] relative flex justify-center bg-test rounded-full items-center mb-8">
            {/* <img src={CalendarGif.src} alt="GIF réservation" className="w-28 h-28" /> */}
          </div>
          <span
            className={`${mont_bold.className} text-center text-blanc text-[25px]`}
          >
            Transparence et sécurité
          </span>
          <span
            className={`${mont.className} text-center text-blanc/80 text-[16px] leading-relaxed mt-7`}
          >
            Vous savez ce que vous payez, sans frais cachés, avec un paiement
            sécurisé et une confidentialité totale
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
