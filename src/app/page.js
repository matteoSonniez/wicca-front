"use client" 

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Services from "@/components/HomeComponents/Services";
import ExpertHome from "@/components/HomeComponents/ExpertHome";
import DevenirPracticien from "@/components/HomeComponents/DevenirPracticienHome";
import AllServices from "@/components/HomeComponents/AllServices";
import AboutUs from "@/components/HomeComponents/AboutUsSection";
import Search from "@/img/chercher.png";
import Icon1 from "@/img/icon-group.png";
import Icon2 from "@/img/icon-calendar.png";
import Icon3 from "@/img/icon-creditcard.png";
import BlobIcon from "@/img/blob-for-icon.svg";
import BlobIcon2 from "@/img/blob-for-icon2.svg";
import BlobIcon3 from "@/img/blob-for-icon3.svg";

import { Inter, Quicksand, Montserrat, Lato } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400"], display: "swap" });
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"], display: "swap" });
const montserrat_bold = Montserrat({ subsets: ["latin"], weight: ["600"], display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["400"], display: "swap" });
const lato_bold = Lato({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const barRef = useRef(null);
  const pointRef = useRef(null);
  const initialOffsetRef = useRef({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    const barEl = barRef.current;
    const rect = barEl.getBoundingClientRect();
    initialOffsetRef.current = {
      top: rect.top + window.scrollY -20,
      left: rect.left,
      width: rect.width,
    };
    gsap.set(barEl, {
      position: "absolute",
      top: initialOffsetRef.current.top,
      left: initialOffsetRef.current.left,
      width: initialOffsetRef.current.width,
      scale: 1,
    });
  }, []);

  // 2) On gère le scroll pour sticky / desticky
  useEffect(() => {
    const barEl = barRef.current;
    const handleScroll = () => {
      const pointTop = pointRef.current.getBoundingClientRect().top;
      const { top, left: initLeft, width: initWidth } = initialOffsetRef.current;
      const initTop = top + 20;

      // Sticky
      if (pointTop < 100 && !isFixed) {
        setIsFixed(true);
        const curTop = barEl.getBoundingClientRect().top;
        gsap.set(barEl, { position: "fixed", top: curTop, scale: 1 });
        gsap.to(barEl, {
          duration: 0.3,
          top: 10,
          scale: 0.7,
          ease: "none",
        });
      }
      // Desticky
      else if (pointTop >= 100 && isFixed) {
        setIsFixed(false);
        const targetTop = initTop - window.scrollY;
        gsap.set(barEl, { position: "fixed", top: 10, scale: 0.7 });
        gsap.to(barEl, {
          duration: 0.2,
          top: targetTop,
          scale: 1,
          ease: "none",
          onComplete: () => {
            gsap.set(barEl, {
              position: "absolute",
              top: initTop -20,
              left: initLeft,
              width: initWidth,
              scale: 1,
            });
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  return (
    <div className="relative min-h-screen bg-diagonal-fade">
      <div className="relative flex flex-col items-center">
        {/* Section vidéo + titre */}
        <div className="w-screen flex mb-[3vh]">
          <div
            className="relative w-[100vw] h-[75vh] flex flex-col pl-20 justify-center"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.8) 95%)",
            }}
          >
            <div
            className="absolute z-20 top-0 left-0 w-full h-full object-cover"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.8) 95%)",
            }}>

            </div>
            <video
              className="absolute z-10 top-0 left-0 w-full h-full object-cover brightness-75"
              src="/video/video-home3.mp4"
              autoPlay
              loop
              muted
            />
            <div className={`${quicksand.className} z-30 font-bold text-[70px] w-full -mt-16`}>
              <span className="inline-block leading-tight text-white">
                Explorez votre chemin
                <br /> spirituel avec des praticiens
              </span>
            </div>

            {/* point de déclenchement (invisible) */}
            <div ref={pointRef} className="bg-red-100"></div>

            {/* barre de recherche */}
            <div
              ref={barRef}
              className={`
                z-50 bg-white w-[800px] text-[17px] rounded-xl border-2 border-gray-400
                flex h-16 items-center pl-6 pr-2
                shadow-lg
              `}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Chercher un expert..."
                className="w-full focus:outline-none focus:ring-2 focus:ring-maincolor"
              />
              <button className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center">
                <Image src={Search} alt="Rechercher" className="w-5" />
              </button>
            </div>
          </div>
        </div>

                
        {/* Les autres sections */}
        <Services />
        <div className="mt-[10vh] flex flex-col items-center space-y-16">
          <span
            className={`${montserrat_bold.className} text-[25px] text-gray-800`}
          >
            Votre partenaire spirituel au quotidien
          </span>
          <div className="flex space-x-14">
            <div className="w-[350px] flex flex-col items-center">
              <div className="w-[80px] h-[80px] relative flex justify-center items-center mb-8">
                <img
                  className="absolute w-full z-[-1] opacity-0"
                  src={BlobIcon.src}
                />
                <img className=" w-[95%]" src={Icon2.src} />
              </div>
              <span
                className={`${lato_bold.className} text-center text-black text-[15px]`}
              >
                Consultations 24h sur 24 et 7j sur 7
              </span>
              <span
                className={`${lato.className} text-center text-black text-[14px] leading-relaxed`}
              >
                Réservez et gérez vos rendez-vous, selon vos envies, en un clic, avec service de notification personnalisés.
              </span>
            </div>
            <div className="w-[320px] flex flex-col items-center">
              <div className="w-[80px] h-[80px] relative flex justify-center items-center mb-8">
                <img
                  className="absolute w-full z-[-1] opacity-0"
                  src={BlobIcon3.src}
                />
                <img className=" w-[95%]" src={Icon1.src} />
              </div>
              <span
                className={`${lato_bold.className} text-center text-black text-[16px]`}
              >
                Diversité des Prestations
              </span>
              <span
                className={`${lato.className} text-center text-black text-[14px] leading-relaxed`}
              >
                Explorez une gamme variée de services spirituels, pour répondre
                à toutes vos attentes, avec clarté et sérénité.
              </span>
            </div>
            <div className="w-[350px] flex flex-col items-center">
              <div className="w-[80px] h-[80px] relative flex justify-center items-center mb-8">
                <img
                  className="absolute w-full z-[-1] opacity-0"
                  src={BlobIcon2.src}
                />
                <img className=" w-[95%]" src={Icon3.src} />
              </div>
              <span
                className={`${lato_bold.className} text-center text-black text-[16px]`}
              >
                Transparence et sécurité
              </span>
              <span
                className={`${lato.className} text-center text-black text-[14px] leading-relaxed`}
              >
                Vous savez ce que vous payez, sans frais cachés, avec un
                paiement sécurisé et une confidentialité totale.
              </span>
            </div>
          </div>
        </div>
        <AboutUs />
        <ExpertHome />
        <DevenirPracticien />
        <AllServices />
      </div>
    </div>
  );
}