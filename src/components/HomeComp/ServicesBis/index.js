"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import Carto from "@/img/spe_icons/cartes.png";
import Carto_red from "@/img/spe_icons/carto_red.png";
import Voyance from "@/img/spe_icons/medium.png";
import Voyance_red from "@/img/spe_icons/voyance_red.png";
import Astro from "@/img/spe_icons/astrologie.png";
import AstroRed from "@/img/spe_icons/astrologie_red.png";
import Medium from "@/img/spe_icons/medium2.png";
import MediumRed from "@/img/spe_icons/medium_red.png";
import Tarologie from "@/img/spe_icons/taro.png";
import TarologieRed from "@/img/spe_icons/taro_red.png";
import Numero from "@/img/spe_icons/numerologie2.png";
import NumeroRed from "@/img/spe_icons/numerologie_red.png";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Card = ({ imgSrc, imgSrcHover, title, bgIcon, fromHome }) => {
  const [hovered, setHovered] = useState(false);
  const wrapperRef = useRef(null);
  const iconRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (iconRef.current && wrapperRef.current) {
      const iconRect = iconRef.current.getBoundingClientRect();
      const cardRect = wrapperRef.current.getBoundingClientRect();
      // Centre de l'icône par rapport à la card
      const centerX = iconRect.left - cardRect.left + iconRect.width / 2;
      const centerY = iconRect.top - cardRect.top + iconRect.height / 2;
      wrapperRef.current.style.setProperty('--icon-center-x', `${centerX}px`);
      wrapperRef.current.style.setProperty('--icon-center-y', `${centerY}px`);
      // Couleur de fond réelle
      const bgColor = window.getComputedStyle(iconRef.current).backgroundColor;
      wrapperRef.current.style.setProperty('--bgicon-color', bgColor);
    }
    return () => {
      if (wrapperRef.current) {
        gsap.killTweensOf(wrapperRef.current);
      }
    };
  }, [hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        scale: 1.1,
        duration: 0.3,
        force3D: false,
      });
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        scale: 1,
        duration: 0.3,
        force3D: false,
      });
    }
  };

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/specialties/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: title }),
      });
      const data = await res.json();
      const id = data[0]?._id;
      if (id) {
        router.push(`/experts?id=${id}`);
      }
    } catch (err) {
      console.error("Recherche de spécialité échouée :", err);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`card-service cursor-pointer bg-white ${fromHome ? "w-[170px] h-[50px] rounded-xl" : "w-[150px] h-[40px] rounded-lg"} p-1  overflow-hidden text-gray-700 flex items-center space-x-3 ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ position: 'relative', zIndex: 0 }}
    >
      <div
        ref={iconRef}
        className={`icon-wrapper relative h-full flex items-center justify-center ${fromHome ? "rounded-xl" : "rounded-lg"} aspect-square will-change-transform ${bgIcon}`}
      >
        <Image
          src={imgSrc}
          alt={title}
          width={48}
          height={48}
          className={`w-[25px] ${fromHome ? "w-[25px]" : "w-[20px]"}`}
          style={{ filter: 'invert(1) brightness(100)' }}
          unoptimized
        />
      </div>
      <span className={`${lato.className} content ${fromHome ? "text-[15px]" : "text-[13px]"}`} style={{ position: 'relative', zIndex: 2 }}>{title}</span>
    </div>
  );
};

export default function Index({ fromHome }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (fromHome && containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { x: 0, opacity: 1 },
        {
          x: 300,
          opacity: 1,
          ease: "linear",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "top top",
            scrub: true, // Animation liée au scroll
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [fromHome]);

  return (
    <div
      ref={containerRef}
      className={`flex w-full ${fromHome ? 'px-[14vw]' : 'gap-x-10'} justify-between will-change-transform`}
      style={{ backfaceVisibility: "hidden" }}
    >
      <Card imgSrc={Astro.src}       imgSrcHover={AstroRed.src}     title="Astrologie"   bgIcon="bg-service1" fromHome={fromHome} />
      <Card imgSrc={Carto.src}       imgSrcHover={Carto_red.src}    title="Cartomancie"  bgIcon="bg-service2" fromHome={fromHome} />
      <Card imgSrc={Numero.src}      imgSrcHover={NumeroRed.src}    title="Numérologie"  bgIcon="bg-service3" fromHome={fromHome} />
      <Card imgSrc={Voyance.src}     imgSrcHover={Voyance_red.src}  title="Voyance"      bgIcon="bg-service1" fromHome={fromHome} />
      <Card imgSrc={Medium.src}      imgSrcHover={MediumRed.src}    title="Médiumnité"   bgIcon="bg-service2" fromHome={fromHome} />
      <Card imgSrc={Tarologie.src}   imgSrcHover={TarologieRed.src} title="Tarologie"    bgIcon="bg-service3" fromHome={fromHome} />
    </div>
  );
}
