"use client";
import { useEffect, useState, useRef } from "react";
import { Lato, Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Icon1 from "@/img/icon-group.png";
import Icon2 from "@/img/icon-calendar.png";
import Icon3 from "@/img/icon-creditcard.png";
import BlobIcon from "@/img/blob-for-icon.svg";
import BlobIcon2 from "@/img/blob-for-icon2.svg";
import Secur from "@/img/icons/secur-purple.svg";
import Calendar from "@/img/icons/calendar-purple.svg";
import People from "@/img/icons/people-purple.svg";
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

const TripleIconCard = ({ imgSrc, alt, title, description, fontBold, fontNormal }) => (
  <div className="flex flex-col z-30 w-[32%] aspect-[1/1] bg-white rounded-3xl shadow-sm items-center px-12 py-8 space-y-8">
    <div className="relative flex justify-center rounded-full items-center">
      <img src={imgSrc} alt={alt} className="w-16 h-16" />
    </div>
    <span className={`${fontBold} text-center text-noir/80 text-[16px]`}>
      {title}
    </span>
    <span className={`${fontNormal} text-center text-noir/60 text-[12px] leading-relaxed`}>
      {description}
    </span>
  </div>
);

const Index = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    if (!cardsContainerRef.current) return;
    // gsap.fromTo(
    //   cardsContainerRef.current,
    //   { x: 200 },
    //   {
    //     x: 0,
    //     duration: 2,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: cardsContainerRef.current,
    //       start: "top 80%",
    //       toggleActions: "play none none none",
    //     },
    //   }
    // );
  }, []);

  return (
    <div className="flex pl-[10vw] pr-[7vw] justify-between items-center">
      <div className="flex flex-col space-y-4 w-[30%]">
        <span className={`${mont_semi.className} text-[16px] text-maincolor/80 text-start uppercase tracking-[0.2em]`}>
          Services
        </span>
        <span className={`${mont_semi.className} text-noir/80 text-[30px]`}>
          Votre partenaire  <br></br>spirituel au quotidien
        </span>
        <span
          className={`${mont.className} text-noir/60 text-[15px]`}
        >
          Vous savez ce que vous payez, sans frais cachés, avec un paiement sécurisé
        </span>
      </div>

      <div
        className="flex w-[60%] justify-between"
        ref={cardsContainerRef}
      >
        <TripleIconCard
          imgSrc={Calendar.src}
          alt="GIF réservation"
          title="Consultations 24h sur 24"
          description="Réservez et gérez vos rendez-vous, selon vos envies, en un clic"
          fontBold={mont_bold.className}
          fontNormal={mont.className}
        />
        <TripleIconCard
          imgSrc={People.src}
          alt="GIF réservation"
          title="Diversité des Prestations"
          description="Explorez une gamme variée de services spirituels"
          fontBold={mont_bold.className}
          fontNormal={mont.className}
        />
        <TripleIconCard
          imgSrc={Secur.src}
          alt="GIF réservation"
          title="Transparence et sécurité"
          description="Vous savez ce que vous payez, sans frais cachés, avec un paiement sécurisé"
          fontBold={mont_bold.className}
          fontNormal={mont.className}
        />
      </div>

    </div>
  );
};

export default Index;
