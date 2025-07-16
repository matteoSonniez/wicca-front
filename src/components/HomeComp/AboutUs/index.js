"use client";
import { useEffect, useState, useRef } from "react";
import { Lato, Inter, Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundBg from "@/img/roundbg7.png";
import Man from "@/img/manhold.png";
import Mokup2 from "@/img/becomepract.webp";
import Mokup from "@/img/mokup.webp";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat_bold = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const Index = () => {

  gsap.registerPlugin(ScrollTrigger);

  // Création des refs pour les textes
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    if (text1Ref.current) {
      gsap.fromTo(
        text1Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text1Ref.current,
            start: "top 80%", // quand le haut du texte atteint 80% du viewport
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (text2Ref.current) {
      gsap.fromTo(
        text2Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (img1Ref.current) {
      gsap.fromTo(
        img1Ref.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img1Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (img2Ref.current) {
      gsap.fromTo(
        img2Ref.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col relative h-auto px-[8vw] mt-40 items-center justify-between gap-y-28">
      <div className="flex items-center justify-between">
        <div className="flex flex-col w-[45%] space-y-6">
          {/* <span className=" uppercase text-maincolor/80 tracking-[0.2em] text-[16px] mb-5">
          À propos
        </span>
        <span
          className={`${montserrat_bold.className} text-noir/80 text-[30px] mb-4`}
        >
          Deux fondateurs, une conviction
        </span> */}
          <span
            ref={text1Ref}
            className={`${montserrat.className} text-texteclaire text-[18px]`}
          >
            Il y a des questions que l’on ne confie pas à n’importe qui. Des moments de vie où l’on cherche plus qu’un simple conseil : une écoute vraie, un regard éclairé, un espace sûr pour avancer.
            Wicca est née de cette conviction : repenser la manière dont on accède aux arts divinatoires. Une plateforme à la fois moderne et profondément humaine, où chaque spécialité est expliquée, chaque expert est certifié, et chaque consultation devient une expérience de clarté.
          </span>
        </div>
        <div
          ref={img1Ref}
          className="w-[47%] h-[44vh] relative rounded-2xl overflow-hidden"
        >
          <Image src={Mokup.src} alt="Mokup" fill className="object-cover" />
        </div>
      </div>

      <div className="flex items-center justify-between">
      <div
        ref={img2Ref}
        className="w-[47%] h-[40vh] relative rounded-2xl overflow-hidden"
      >
          <Image src={Mokup2.src} alt="Mokup" fill className="object-cover" />
        </div>
        <div className="flex flex-col w-[45%] space-y-6">
          {/* <span className=" uppercase text-maincolor/80 tracking-[0.2em] text-[16px] mb-5">
          À propos
        </span>
        <span
          className={`${montserrat_bold.className} text-noir/80 text-[30px] mb-4`}
        >
          Deux fondateurs, une conviction
        </span> */}
          <span
            ref={text2Ref}
            className={`${montserrat.className} text-texteclaire text-[18px]`}
          >
          Ici, pas de jargon, pas de promesses floues. Juste des réponses, des rendez-vous simples à réserver, et des pratiques ésotériques valorisées comme elles le méritent.
          Wicca, c’est une nouvelle manière de consulter. Respectueuse, accessible, exigeante. Pour celles et ceux qui cherchent un vrai mieux-être, et ceux qui les accompagnent avec cœur et savoir-faire.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
