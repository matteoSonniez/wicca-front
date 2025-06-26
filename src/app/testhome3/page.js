"use client";

import Image from "next/image";
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

// ASSETS
import Search from "@/img/chercher.png";

import Icon1 from "@/img/icon-group.png";
import Icon2 from "@/img/icon-calendar.png";
import Icon3 from "@/img/icon-creditcard.png";
import BlobIcon from "@/img/blob-for-icon.svg";
import BlobIcon2 from "@/img/blob-for-icon2.svg";
import BlobIcon3 from "@/img/blob-for-icon3.svg";

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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Synchronisation Lenis <-> ScrollTrigger
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ScrollerProxy pour ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // Optionnel : pour le support mobile
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);

    /* 2. Pin + Parallax via GSAP */
    const ctx = gsap.context(() => {
      // startRef reste FIXE (pin) — on ne retire plus l'espace (
      // pinSpacing TRUE par défaut) pour garder de la hauteur.
      ScrollTrigger.create({
        trigger: startRef.current,
        start: "top top",
        end: "bottom top", // section vidéo fixée pendant toute sa hauteur
        anticipatePin: 1, // réduit le saut visuel
      });

      // mainRef défile plus vite (parallax inversé)
      gsap.to(startRef.current, {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Animation d'apparition du header
    let headerAnim;
    if (headerRef.current && mainRef.current) {
      gsap.set(headerRef.current, { y: "-100%" }); // position initiale hors écran
      headerAnim = gsap.to(headerRef.current, {
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        paused: true,
      });
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top top",
        onEnter: () => {
          headerAnim.vars.ease = "power3.out";
          headerAnim.timeScale(1);
          headerAnim.play();
        },
        onLeaveBack: () => {
          headerAnim.vars.ease = "power2.in";
          headerAnim.timeScale(2); // plus rapide
          headerAnim.reverse();
        },
      });
    }

    return () => {
      ctx.revert();
      ScrollTrigger.scrollerProxy(document.body, null); // Nettoie le proxy
      lenis.destroy();
      if (headerAnim) headerAnim.kill();
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div
        ref={headerRef}
        className="fixed z-50 w-full px-[5vw] py-[2vh] justify-between flex items-center"
        style={{ transform: "translateY(-100%)" }}
      >
        <HeaderTest />
      </div>
      <div>
        <section
          ref={startRef}
          className="fixed z-30 top-0 flex mb-[3vh] w-full h-screen will-change-transform"
        >
          <div className="absolute w-full flex items-center z-50 top-0 px-16 py-5">
            <span className={`${mont.className} text-maincolor text-[30px]`}>
              wicca
            </span>
            <div className={`${mont_low.className} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-7 text-blanc/80 text-[16px]`}>
              <span className="cursor-pointer">Centre d'aide</span>
              <span className="cursor-pointer">Qui nous sommes</span>
              <span className="cursor-pointer">Nous contacter</span>
            </div>
            <div className={`${mont_low.className} text-blanc/80 space-x-5 flex items-center text-[16px] ml-auto`}>
              <span className="cursor-pointer">Devenir practitien</span>
              <button className="border-[1px] border-blanc rounded-full px-3 py-2">Me connecter</button>
            </div>
          </div>
          {/* Vidéo de fond optimisée */}
          <video
            className="absolute inset-0 z-10 w-full h-full object-cover brightness-50"
            autoPlay
            loop
            muted
            playsInline // lecture inline (iOS) + décodage matériel
            preload="auto" // commence à charger dès que possible
            disablePictureInPicture // évite l'overlay PiP
            disableRemotePlayback // évite AirPlay inutile
          >
            <source src="/video/video-home3.mp4" type="video/mp4" />
            {/* Optionnel : poster statique pour le LCP */}
            {/* <track kind="captions" />  <-- si besoin d'accessibilité */}
          </video>

          {/* Overlay d'assombrissement (remplace le brightness-75) */}
          {/* <div className="absolute inset-0 z-20 bg-gradient-to-l from-transparent via-black/50 to-black/80" /> */}

          {/* Contenu */}
          <div className="relative z-30 flex flex-col justify-center items-center w-full h-full">
            <h1
              className={`${mont.className} font-bold text-[60px] text-white text-center tracking-tight`}
              style={{ transform: "scaleY(1.1)" }}
            >
              Explorez votre chemin spirituel
              {/* <br /> spirituel avec des praticiens */}
            </h1>
            <h1
              className={`${mont_low.className} font-bold text-[20px] leading-tight text-maincolor text-center mt-6`}
            >
              Avec des experts et des praticiens certifiés qui vous conviennent
              {/* <br /> spirituel avec des praticiens */}
            </h1>

            {/* Point de déclenchement invisible */}
            {/* <span ref={pointRef} className="absolute -bottom-6 h-1 w-1" /> */}

            {/* Barre de recherche */}
            <div
              ref={barRef}
              className={`${mont_low.className} z-50 bg-blanc relative w-[min(800px,90%)] h-16 rounded-full border-2 border-gray-400 flex items-center pl-6 pr-2 shadow-lg mt-16`}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Chercher un expert..."
                className="w-full bg-blanc focus:outline-none focus:ring-2 focus:ring-maincolor"
              />
              <button className="h-12 w-12 bg-gray-800 rounded-full grid place-items-center">
                <Image src={Search} alt="Rechercher" className="w-5" />
              </button>
            </div>

            {/* Services */}
            <div className="absolute self-end bottom-10 z-40">
              <Services />
            </div>
          </div>
        </section>
        {/* SECTION 2+ : Contenu principal */}
        <main
          ref={mainRef}
          className="relative mt-[100vh] z-40 flex flex-col items-center rounded-t-[50px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-maincolor brightness-50 -z-10" />
          <span
            className={`${mont.className} text-white text-[40px] mt-[10vh]`}
          >
            about wicca
          </span>
          <AboutUs />
          <TripleIcons />
          <ExpertHome />
          <DevenirPracticien />
          {/* <AllServices /> */}
        </main>
      </div>
    </div>
  );
}
