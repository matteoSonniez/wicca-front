"use client";
import { useEffect, useState } from "react";
import {
  Freehand,
  Poiret_One,
  Playfair_Display,
  Inter,
  Montserrat,
  Lato,
} from "next/font/google";
import BlobImage from "@/img/blob-image.png";
import Fleche from "@/img/icons/flechebas.png";
import gsap from "gsap";
import { useRef } from "react";

const latosmall = Lato({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const mont_semi = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const mont_bold = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const lato_bold = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const FAQCard = ({ question, answer, fontClass }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.to(contentRef.current, {
        height: contentRef.current.scrollHeight,
        opacity: 1,
        marginTop: 40, // mt-10
        marginBottom: 40, // mb-10
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          contentRef.current.style.height = "auto";
        },
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        marginBottom: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [open]);

  return (
    <div
      ref={containerRef}
      onClick={() => setOpen((o) => !o)}
      style={{
        boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)",
        cursor: 'pointer',
        overflow: 'visible',
      }}
      className={`w-full rounded-lg bg-white flex flex-col px-10 justify-between py-5 relative`}
    >
      <div className="flex items-center justify-between py-4">
        <span className={`${fontClass} text-noir/80 text-[16px]`}>{question}</span>
        <img
          src={Fleche.src}
          className={`w-5 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          alt="Ouvrir la réponse"
        />
      </div>
      <div
        ref={contentRef}
        style={{
          height: 0,
          opacity: 0,
          overflow: 'hidden',
          marginTop: 0,
          marginBottom: 0,
        }}
        className="text-noir/60 text-[17px]"
      >
        {answer}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="flex w-screen justify-center mt-20 px-[15vw] mb-20">
      <div className="w-full flex flex-col items-center space-y-10">
        <span className={`${mont_semi.className} text-noir/90 text-[43px] mb-2`}>Les questions fréquentes</span>
        <div className="flex flex-col w-full space-y-4">
          <FAQCard
            question="Pourquoi Wicca ne facture pas à la minute comme les autres plateformes ?"
            answer="Parce que la clarté, c’est la base de la confiance. Chez Wicca, vous choisissez une durée fixe (5 à 60 minutes), à un tarif défini à l’avance. Pas de surprise, pas de stress : vous êtes maître de votre temps et de votre budget."
            fontClass={mont_semi.className}
          />
          <FAQCard
            question="Comment savoir si l’expert est vraiment qualifié ?"
            answer="Chaque praticien passe par un processus de sélection rigoureux : tests, vérifications, entretien… Seuls ceux qui partagent nos valeurs et notre exigence rejoignent Wicca. Vous êtes entre de bonnes mains."
            fontClass={mont_semi.className}
          />
          <FAQCard
            question="Comment se déroule une consultation ?"
            answer="Vous choisissez un expert, un créneau, un format (visio ou en cabinet selon les cas). Vous recevez une confirmation par mail, avec des conseils pour bien préparer la séance. Et après ? Un retour qualité vous sera demandé. Simple, fluide, efficace."
            fontClass={mont_semi.className}
          />
          <FAQCard
            question="Et si j’ai une question ou un souci ?"
            answer="Notre équipe support est là, rapidement et humainement. Nous ne laissons jamais une interrogation sans réponse : que ce soit avant, pendant ou après votre consultation, on vous accompagne pas à pas."
            fontClass={mont_semi.className}
          />
          <FAQCard
            question="Et si je ne sais pas vers quelle spécialité me tourner ?"
            answer="Pas de panique : chaque pratique est expliquée, chaque fiche expert est détaillée, et des filtres vous aident à trouver ce qui vous correspond (disponibilité, budget, durée...). Notre but : vous aider à faire le bon choix, en toute confiance."
            fontClass={mont_semi.className}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
