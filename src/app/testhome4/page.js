"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// COMPONENTS
import HeaderTest from "@/components/HeaderTest";
import Services from "@/components/HomeComponents2/Services";
import ExpertHome from "@/components/HomeComponents2/ExpertHome";
import DevenirPracticien from "@/components/HomeComponents2/DevenirPracticienHome";
import AllServices from "@/components/HomeComponents2/AllServices";
import AboutUs from "@/components/HomeComponents2/AboutUsSection";
import TripleIcons from "@/components/HomeComponents2/TripleIconHome";


// FONTS
import { Inter, Quicksand, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400"], display: "swap" });
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const mont_low = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

export default function HomePageParallax() {
  /* ------------------------------------------------------------------
   * REFS & STATE
   * ---------------------------------------------------------------- */
  const [inputValue, setInputValue] = useState("");

  const barRef = useRef(null); // barre de recherche
  const startRef = useRef(null); // section vidéo + titre (pinned)
  const mainRef = useRef(null); // reste du contenu (rapide)
  const pointRef = useRef(null); // point de déclenchement sticky
  const headerRef = useRef(null); // ref pour le header animé

  /* ------------------------------------------------------------------
   * LENIS SMOOTH‑SCROLL, PIN & PARALLAX
   * ---------------------------------------------------------------- */

  return (
    <div className="flex">
       <div
          ref={mainRef}
          className="relative bg-maincolor flex flex-col items-center rounded-t-[50px] overflow-hidden"
        >
          <div className="flex">
            <h1
              className={`${mont.className} text-white text-[40px]`}
            >
              about wicca
            </h1>
          </div>
          <AboutUs />
          <TripleIcons />
          <ExpertHome />
          <DevenirPracticien />
          {/* <AllServices /> */}
        </div>
    </div>
  );
}
