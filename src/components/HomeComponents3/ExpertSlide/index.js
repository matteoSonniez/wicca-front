"use client";
import { ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";

const SLIDES = 16; // Nombre d'éléments à slider

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

  return (
    <div className="w-full pl-[10vw] py-8 relative">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">
      Adopté par des praticiens certifiés
      </h2>
      {/* CONTENEUR scrollable */}
      <div
        className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
        ref={scrollRef}
        style={{ position: "relative", zIndex: 10 }} // Garde les boutons dessus
      >
        {Array.from({ length: SLIDES }).map((_, idx) => (
          <div
            key={idx}
            ref={idx === 0 ? cardRef : null}
            className="w-[20vw] aspect-[1/1.3] rounded-2xl shadow-sm bg-gradient-to-br from-lime-300 via-green-300 to-teal-300/70 flex-shrink-0 transition"
          ></div>
        ))}
        
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
