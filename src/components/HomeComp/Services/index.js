"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const Card = ({ imgSrc, imgSrcHover, title }) => {
  const [hovered, setHovered] = useState(false);
  const wrapperRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (wrapperRef.current) {
        gsap.killTweensOf(wrapperRef.current);
      }
    };
  }, []);

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
      const res = await fetch("/api/specialties/search", {
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
      className="
        cursor-pointer 
        bg-white
        w-1/5 
        aspect-[20/9] 
        rounded-2xl 
        overflow-hidden
        text-gray-700 
        hover:text-maincolor
        flex
        items-center
        px-4
        space-x-4
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative w-7 h-7 will-change-transform">
        <Image
          src={hovered ? imgSrcHover : imgSrc}
          alt={title}
          fill
          sizes="1.75rem"
          className="object-contain"
          unoptimized
        />
      </div>
      <span className={`${lato.className} text-sm`}>{title}</span>
    </div>
  );
};

export default function Index() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (containerRef.current) {
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
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-screen px-[14vw] justify-center space-x-6 will-change-transform"
      style={{ backfaceVisibility: "hidden" }}
    >
      <Card imgSrc={Astro.src}       imgSrcHover={AstroRed.src}     title="Astrologie" />
      <Card imgSrc={Carto.src}       imgSrcHover={Carto_red.src}    title="Cartomancie" />
      <Card imgSrc={Numero.src}      imgSrcHover={NumeroRed.src}    title="Numérologie" />
      <Card imgSrc={Voyance.src}     imgSrcHover={Voyance_red.src}  title="Voyance" />
      <Card imgSrc={Medium.src}      imgSrcHover={MediumRed.src}    title="Médiumnité" />
      <Card imgSrc={Tarologie.src}   imgSrcHover={TarologieRed.src} title="Tarologie" />
    </div>
  );
}
