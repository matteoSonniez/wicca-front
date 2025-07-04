"use client";
import { ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { Lato, Montserrat } from "next/font/google";

const mont_semi = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
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
      className="w-[22vw] aspect-[1/1.3] rounded-2xl shadow-sm flex-shrink-0 overflow-hidden bg-test brightness-[92%] hover:brightness-50 transition-all duration-300"
    >
      <img src={imgSrc} className="w-[100%] h-full object-cover rounded-xl" />
    </div>
  );

  return (
    <div className="w-full pl-[10vw] mt-28 relative flex flex-col">
        <span className={`${mont_semi.className} text-[16px] text-maincolor/80 text-start uppercase tracking-[0.2em] mb-7`}>
          Nos practitiens
        </span>
      {/* CONTENEUR scrollable */}
      <div
        className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
        ref={scrollRef}
        style={{ position: "relative", zIndex: 10 }} // Garde les boutons dessus
      >
        <Card
          imgSrc="/experts/portrait2.webp"
        />
        <Card
          imgSrc="/experts/portrait7.webp"
        />
        <Card
          imgSrc="/experts/portrait5.webp"
        />
        <Card
          imgSrc="/experts/portrait6.webp"
        />
        <Card
          imgSrc="/experts/portrait7.webp"
        />
        <Card
          imgSrc="/experts/portrait2.webp"
        />
        <Card
          imgSrc="/experts/portrait8.webp"
        />
        <Card
          imgSrc="/experts/portrait2.webp"
        />

      </div>
      <button
        onClick={handleNext}
        className="w-12 h-12 absolute z-50 right-24 top-1/2 -translate-y-1/2 flex items-center justify-center bg-white/60 hover:bg-white shadow-md rounded-full border border-gray-300 transition"
      >
        <ChevronRight size={28} />
      </button>
      {/* OVERLAY flou à droite, EN DEHORS de la scroll area */}
      <div
        className="pointer-events-none absolute top-0 h-full right-0 w-40 z-40"
        style={{
          background:
            "linear-gradient(to left, #F8F9FA 60%, rgba(248,249,250,0.6) 75%, rgba(248,249,250,0.2) 92%, rgba(248,249,250,0) 100%)",
        }}
      />
    </div>
  );
}
