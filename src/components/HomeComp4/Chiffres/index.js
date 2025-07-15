"use client";
import { useEffect, useState, useRef } from "react";
import { Lato, Inter, Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundBg from "@/img/roundbg7.png";
import Man from "@/img/manhold.png";
import Man3 from "@/img/manhold3.png";
import Man2 from "@/img/manhold2.png";

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
    <div className="flex relative h-auto pl-[10vw] mt-80 mb-20 items-center">
      <div className="flex flex-col w-[37%] space-y-6">
        <div className="flex flex-col">
          <span className=" uppercase text-maincolor/80 tracking-[0.2em] text-[16px] mb-5">
            À propos
          </span>
          <span
            className={`${montserrat_bold.className} text-noir/80 text-[30px] mb-4`}
          >
            Deux fondateurs, une conviction
          </span>
          {/* <span className={`${montserrat.className} text-noir/50 text-[14px]`}>
          Wicca est née de notre envie commune d’offrir un espace nouveau, accessible et sincère, pour tous ceux qui cherchent des réponses comme pour ceux qui les transmettent.
          Nous avons construit Wicca pour qu’elle soit bien plus qu’un simple outil : un lieu de confiance, de clarté, et de mise en valeur des pratiques ésotériques.
          Une plateforme à la fois humaine et exigeante, pensée pour faciliter les rencontres, fluidifier les échanges, et offrir enfin une expérience à la hauteur de ce que chacun mérite.
          </span> */}
          <span className={`${montserrat.className} text-noir/50 text-[14px]`}>
            Il y a des questions que l’on ne confie pas à n’importe qui. Des moments de vie où l’on cherche plus qu’un simple conseil : une écoute vraie, un regard éclairé, un espace sûr pour avancer.
          Wicca est née de cette conviction : repenser la manière dont on accède aux arts divinatoires.  Une plateforme à la fois moderne et profondément humaine, où chaque spécialité est expliquée, chaque expert est certifié, et chaque consultation devient une expérience de clarté.
                      Ici, pas de jargon, pas de promesses floues. Juste des réponses, des rendez-vous simples à réserver, et des pratiques ésotériques valorisées comme elles le méritent.
Wicca, c’est une nouvelle manière de consulter. Respectueuse, accessible, exigeante. Pour celles et ceux qui cherchent un vrai mieux-être, et ceux qui les accompagnent avec cœur et savoir-faire.
                      </span>
        </div>
            
        <div className={`${montserrat.className} flex items-center space-x-4`}>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center  bg-maincolor/90 rounded-2xl px-6 py-3 shadow-sm w-[200px]">
              <span className="text-blanc text-[26px]">100%</span>
              <span className="text-blanc text-[13px]">
                Francais
              </span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl px-6 py-3 shadow-sm w-[200px]">
              <span className="text-maincolor text-[26px]">+6</span>
              <span className="text-noir/70 text-[13px]">Spécialités</span>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            
            <div className="flex flex-col items-center bg-white rounded-2xl px-6 py-3 shadow-sm w-[200px]">
              <span className="text-maincolor text-[26px]">100+</span>
  <span className="text-noir/70 text-[13px]">RDV test</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl px-6 py-3 shadow-sm w-[200px]">
              <span className="text-maincolor text-[26px]">50+</span>
              <span className="text-noir/70 text-[13px]">Experts onboard</span>
            </div>

          </div>

        </div>
      </div>
      <div className="relative w-full flex-1 " ref={parentRef}>
        <div className="flex w-full justify-end" ref={roundBgRef}>
          <img src={RoundBg.src} className="w-[90%] object-cover opacity-90" />
        </div>
        {/* <div className="absolute w-[63%] right-[18%] bottom-0 self-center" ref={manRef}>
          <img src={Man.src} className="w-full object-cover" />
        </div> */}
        <div className="absolute w-[76%] right-[12%] bottom-0 self-center" ref={manRef}>
          <img src={Man3.src} className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Index;
