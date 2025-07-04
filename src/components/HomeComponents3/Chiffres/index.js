"use client";
import { useEffect, useState, useRef } from "react";
import { Lato, Inter, Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundBg from "@/img/roundbg4.png";
import Man from "@/img/manhold.png";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter_bold = Inter({
  subsets: ["latin"],
  weight: ["600"],
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
  const roundBgRef = useRef(null);
  const manRef = useRef(null);
  const parentRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (roundBgRef.current && parentRef.current) {
      gsap.fromTo(
        roundBgRef.current,
        { x: 300 },
        {
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: parentRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        }
      );
    }
    if (manRef.current && parentRef.current) {
      gsap.fromTo(
        manRef.current,
        { x: 150 },
        {
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: parentRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <div className="flex relative h-auto pl-[10vw] mt-52 mb-20 items-center">
      <div className="flex flex-col w-[37%] space-y-6">
        <div className="flex flex-col">
          <span className=" uppercase text-maincolor/80 tracking-[0.2em] text-[16px] mb-5">
            wicca en chiffres
          </span>
          <span
            className={`${montserrat_bold.className} text-noir/80 text-[32px] mb-4`}
          >
            Ceci est un texte de test pour le titre de cette section
          </span>
          <span className={`${montserrat.className} text-noir/50 text-[15px]`}>
            Vous savez ce que vous payez, sans frais cachés, avec un paiement
            sécurisé vous savez ce que vous payez, sans frais cachés, avec un
            paiement sécurisé
          </span>
        </div>

        <div className={`${montserrat.className} flex items-center space-x-4`}>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-2 bg-maincolor/90 rounded-2xl px-6 py-3 shadow-sm w-[200px]">
              <span className="text-blanc text-[26px]">500+</span>
              <span className="text-blanc text-[13px]">
                Experts certifiés
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white rounded-2xl px-6 py-3 shadow-sm w-[200px]">
              <span className="text-maincolor text-[26px]">120</span>
              <span className="text-noir/70 text-[13px]">Test de chiffre</span>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            
            <div className="flex flex-col items-center space-y-2 bg-white rounded-2xl px-6 py-3 shadow-sm w-[200px]">
              <span className="text-maincolor text-[26px]">12</span>
              <span className="text-noir/70 text-[13px]">Services</span>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white rounded-2xl px-6 py-3 shadow-sm w-[200px]">
              <span className="text-maincolor text-[26px]">3k+</span>
              <span className="text-noir/70 text-[13px]">Services test</span>
            </div>

          </div>

        </div>
      </div>
      <div className="relative w-full flex-1 " ref={parentRef}>
        <div className="flex w-full justify-end" ref={roundBgRef}>
          <img src={RoundBg.src} className="w-[90%] object-cover" />
        </div>
        <div className="absolute w-[73%] right-[10%] bottom-0 self-center" ref={manRef}>
          <img src={Man.src} className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Index;
