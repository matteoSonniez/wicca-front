"use client";
import { ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { Lato, Montserrat, Poppins } from "next/font/google";

const mont_semi = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
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
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export default function Index() {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  // Injecte le CSS pour masquer la scrollbar une seule fois
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .no-scrollbar {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
      }
    `;
    document.head.appendChild(style);

    // Nettoyage si le composant est démonté
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleNext = () => {
    if (scrollRef.current && cardRef.current) {
      // Largeur de la carte + gap calculée dynamiquement
      const cardWidth = cardRef.current.offsetWidth;
      const gap = 24; // Correspond à gap-6 (6 * 4px = 24px)
      scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  };

  const Card = ({ imgSrc, alt, title, description, fontBold, fontNormal }) => (
    <div
      ref={cardRef}
      className="w-[35vw] aspect-[1/0.6] flex p-6 cursor-pointer rounded-2xl flex-shrink-0 bg-white space-x-10"
      style={{
        boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)"
      }}
    >
      <img src={imgSrc} className="w-[38%] h-full object-cover rounded-xl" />
      <div className="flex-1 flex flex-col justify-between h-full">
        <span className={`${mont_semi.className} text-[13px] text-becomepract/80 text-start leading-relaxed`}>
          Je suis Léa, praticienne en ésotérisme passionnée par les mystères de l'univers et les voies spirituelles qui nous connectent à notre essence profonde. Depuis mon plus jeune âge, j'ai exploré les enseignements anciens et les pratiques traditionnelles
        </span>
        <div className="flex flex-col">
          <span className={`${mont.className} text-[15px] text-becomepract text-start leading-relaxed uppercase`}>camille vigaud</span>
          <span className={`${mont_semi.className} text-[14px] text-noir/70 text-start leading-relaxed mb-5`}>praticienne en ésotérisme</span>
          <div className="border-b-2 border-maincolor/80 w-fit text-maincolor/80">
            <span className={`${mont_semi.className} text-[14px] leading-relaxed`}>En découvrir plus</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full pl-[8vw] mt-20 relative flex flex-col">
      {/* <span className={`${mont_semi.className} text-[16px] text-maincolor/80 text-start uppercase tracking-[0.2em] mb-2`}>
        Nos practitiens
      </span> */}
      <span className={`${poppins.className} text-becomepract text-[40px] text-start mb-2 tracking-wide`}>
        Nos praticiens certifiés
      </span>
      <span className={`${mont_low.className} text-becomepract text-[16px] mb-7`}>Des praticiens sélectionnés pour leur expertise et leur professionnalisme</span>
      {/* CONTENEUR scrollable */}
      <div className="relative">
        <div
          className="flex gap-6  overflow-x-auto pb-4 pl-2 -ml-2 no-scrollbar pt-4"
          ref={scrollRef}
          style={{ position: "relative", zIndex: 10 }} // Garde les boutons dessus
        >
          <Card
            imgSrc="/experts/slide.webp"
          />
          <Card
            imgSrc="/experts/slide2.webp"
          />
          <Card
            imgSrc="/experts/slide3.webp"
          />
          <Card
            imgSrc="/experts/slide4.webp"
          />
          <Card
            imgSrc="/experts/slide5.webp"
          />
          <Card
            imgSrc="/experts/slide6.webp"
          />
          <Card
            imgSrc="/experts/slide.webp"
          />
          <Card
            imgSrc="/experts/slide2.webp"
          />


        </div>
        <button
          onClick={handleNext}
          className="w-12 h-12 absolute z-40 right-[7vw] top-1/2 -translate-y-1/2 flex items-center justify-center bg-white shadow-md rounded-full border border-gray-300 transition"
        >
          <ChevronRight size={28} className="text-becomepract" />
        </button>
      </div>

      {/* OVERLAY flou à droite, EN DEHORS de la scroll area */}
      <div
        className="pointer-events-none absolute top-0 h-full right-0 w-[15vw] z-30"
        style={{
          background:
            "linear-gradient(to left, #F8F9FA 60%, rgba(248,249,250,0.6) 75%, rgba(248,249,250,0.2) 92%, rgba(248,249,250,0) 100%)",
        }}
      />
    </div>
  );
}
