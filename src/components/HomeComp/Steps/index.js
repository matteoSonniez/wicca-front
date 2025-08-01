"use client";
import { useEffect, useState, useRef } from "react";
import { Lato, Inter, Montserrat, Poppins } from "next/font/google";
import Bgtest from "@/img/traitbg.png";
import BlobImage from "@/img/Vector2.png";
import { gsap } from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const mont_bold = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const lato_bold = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const Index = () => {
  const [isStep, setIsSpet] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const divRef = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const bar1Ref = useRef(null);
  const bar2Ref = useRef(null);
  const bar3Ref = useRef(null);
  const timeoutRef = useRef(null);

  // Observer d'intersection pour détecter la visibilité du composant
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          resetSteps(); // Ajoute ceci
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Animation de la barre et passage automatique, seulement si visible
  useEffect(() => {
    if (!isVisible) return;
    let barRef, nextStepFn;
    if (isStep === 1) {
      barRef = bar1Ref;
      nextStepFn = changeDivTwo;
    } else if (isStep === 2) {
      barRef = bar2Ref;
      nextStepFn = changeDivThree;
    } else {
      barRef = bar3Ref;
      nextStepFn = changeDivOne;
    }
    // Reset toutes les barres
    [bar1Ref, bar2Ref, bar3Ref].forEach(ref => {
      if (ref.current) {
        gsap.set(ref.current, { height: '0%' });
      }
    });
    // Anime la barre active
    if (barRef.current) {
      gsap.to(barRef.current, {
        height: '100%',
        duration: 5,
        ease: 'linear',
        onComplete: () => {
          nextStepFn();
        },
      });
    }
    // Nettoyage si changement rapide
    return () => {
      gsap.killTweensOf([bar1Ref.current, bar2Ref.current, bar3Ref.current]);
    };
  }, [isStep, isVisible]);

  const changeDivOne = () => {
    setIsSpet(1);
    const el = divRef.current;
    const el2 = div2Ref.current;
    const el3 = div3Ref.current;
    const parent = el.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    // calcul du décalage nécessaire pour centrer
    const offsetX =
      (parentRect.width - elRect.width) / 2 - (elRect.left - parentRect.left);
    const offsetY =
      (parentRect.height - elRect.height) / 2 - (elRect.top - parentRect.top);

    gsap.to(el, {
      duration: 0.5,
      x: offsetX,
      y: offsetY,
      scale: 1.4,
      filter: "brightness(1)",
      opacity: 1, // 100% de luminosité
      zIndex: 30,
      ease: "power1.out",
    });
    gsap.to(el2, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "brightness(0.65)", // brightness initial
      zIndex: 20, // z-index initial (ici z-20)
      ease: "power1.out",
    });

    gsap.to(el3, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "brightness(0.65)", // brightness initial
      zIndex: 10, // z-index initial (ici z-20)
      ease: "power1.out",
    });
  };

  const changeDivTwo = () => {

    setIsSpet(2);
    const el = div2Ref.current;
    const el2 = divRef.current;
    const el3 = div3Ref.current;
    const parent = el.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    // calcul du décalage nécessaire pour centrer
    const offsetX =
      (parentRect.width - elRect.width) / 2 - (elRect.left - parentRect.left);
    const offsetY =
      (parentRect.height - elRect.height) / 2 - (elRect.top - parentRect.top);

    gsap.to(el, {
      duration: 0.5,
      x: offsetX,
      y: offsetY,
      scale: 1.4,
      filter: "brightness(1)",
      opacity: 1, // 100% de luminosité
      zIndex: 30,
      ease: "power1.out",
    });

    gsap.to(el2, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "brightness(0.65)", // brightness initial
      zIndex: 10, // z-index initial (ici z-20)
      ease: "power1.out",
    });

    gsap.to(el3, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "brightness(0.65)", // brightness initial
      zIndex: 20, // z-index initial (ici z-20)
      ease: "power1.out",
    });
  };

  const changeDivThree = () => {
    setIsSpet(3);
    const el = div3Ref.current;
    const el2 = divRef.current;
    const el3 = div2Ref.current;
    const parent = el.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    // calcul du décalage nécessaire pour centrer
    const offsetX =
      (parentRect.width - elRect.width) / 2 - (elRect.left - parentRect.left);
    const offsetY =
      (parentRect.height - elRect.height) / 2 - (elRect.top - parentRect.top);

    gsap.to(el, {
      duration: 0.5,
      x: offsetX,
      y: offsetY,
      scale: 1.4,
      opacity: 1,
      filter: "brightness(1)",
      zIndex: 30,
      ease: "power1.out",
    });

    gsap.to(el2, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "brightness(0.65)", // brightness initial
      zIndex: 10, // z-index initial (ici z-20)
      ease: "power1.out",
    });

    gsap.to(el3, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "brightness(0.65)", // brightness initial
      zIndex: 20, // z-index initial (ici z-20)
      ease: "power1.out",
    });
  };

  const resetSteps = () => {
    [bar1Ref, bar2Ref, bar3Ref].forEach(ref => {
      if (ref.current) {
        gsap.set(ref.current, { height: '0%' });
      }
    });
    // divRef (la carte centrale) : brightness 100, scale 1.3, zIndex 30
    if (divRef.current) {
      gsap.set(divRef.current, {
        x: 0,
        y: 0,
        scale: 1.3,
        filter: "brightness(1)",
        opacity: 1,
        zIndex: 30,
      });
    }
    // div2Ref et div3Ref : brightness 0.65, scale 1, zIndex 10
    [div2Ref, div3Ref].forEach(ref => {
      if (ref.current) {
        gsap.set(ref.current, {
          x: 0,
          y: 0,
          scale: 1,
          filter: "brightness(0.65)",
          opacity: 1,
          zIndex: 10,
        });
      }
    });
  };

  useEffect(() => {
    if (isVisible) {
      setIsSpet(1); // Cela va déclencher l'animation de la première barre
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="flex relative pl-[10vw] pr-[8vw] mt-32">
      {/* <div className="flex flex-col relative space-y-[12vh] mb-[10vh] bg-diagonal-fade bg-blend-lighten "> */}
      {/* <img
            src={Bgtest.src}
            alt="Background"
            className="absolute inset-0 w-full h-full -z-10"
          /> */}

      <div className="flex justify-between w-full rounded-2xl items-center">

        <div className="relative w-[47%] h-[40vh]">
          <div
            ref={div2Ref}
            className="absolute flex items-center z-20 -top-6 left-0 w-[20vw] h-[20vh] bg-white rounded-lg shadow-2xl filter brightness-[65%] overflow-hidden"
          >
            {/* <Image
              src="/steps/image2.png"
              alt="Portrait de l'expert"
              fill
              className="object-cover"
            /> */}
            {isStep === 2 && (
              <div className="absolute bottom-2 right-3 bg-maincolor/90 px-2 py-1 rounded-full text-xs font-semibold text-white">
                2
              </div>
            )}
          </div>

          <div
            ref={divRef}
            className="absolute flex items-center z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vh] bg-white rounded-lg  shadow-2xl filter brightness-100 scale-[1.3] overflow-hidden"
          >
            {/* <Image
              src="/steps/image.png"
              alt="Portrait de l'expert"
              fill
              className="object-cover"
            /> */}
            {isStep === 1 && (
              <div className="absolute top-2 right-3 bg-maincolor/90 px-2 py-1 rounded-full text-xs font-semibold text-white">
                1
              </div>
            )}
          </div>

          <div
            ref={div3Ref}
            className="absolute flex items-center z-20 -bottom-5 -right-5 w-[20vw] h-[20vh] bg-white rounded-lg  shadow-2xl filter brightness-[65%] overflow-hidden"
          >
            {/* <Image
              src="/steps/image3.png"
              alt="Portrait de l'expert"
              fill
              className="object-cover"
            /> */}
            {isStep === 3 && (
              <div className="absolute bottom-2 right-3 bg-maincolor/90 px-2 py-1 rounded-full text-xs font-semibold text-white">
                3
              </div>
            )}
          </div>
        </div>
        <div className="w-[44%] flex flex-col space-y-8">
          <div onClick={changeDivOne} className="flex flex-row items-stretch space-x-4 cursor-pointer group">
            {/* Barre verticale animée */}
            <div className="flex flex-col justify-center">
              <div className="h-full w-[6px] bg-gray-300 rounded overflow-hidden" style={{ height: '100%' }}>
                <div ref={bar1Ref} className="w-full bg-gray-700 rounded" style={{ height: '0%' }} />
              </div>
            </div>
            <motion.div
              className="flex flex-col space-y-4 flex-1"
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: isVisible ? 0 : 0 }}
            >
              <span
                className={`${poppins.className} text-[22px] leading-none transition-colors duration-200 
                  ${isStep === 1 ? 'text-maincolor/90 font-bold' : 'text-noir/50 group-hover:text-noir/90'}`}
              >
                1. Réservez en toute simplicité
              </span>
              <span
                className={`${mont_bold.className} text-[15px] transition-colors duration-200 
                  ${isStep === 1 ? 'text-noir/90' : 'text-noir/50 group-hover:text-noir/90'}`}
              >
                Parcourez nos praticiens certifiés et choisissez celui ou
                celle qui résonne avec vos besoins : tarologue, voyant, numérologue, médium...
              </span>
            </motion.div>
          </div>
          <div onClick={changeDivTwo} className="flex flex-row items-stretch space-x-4 cursor-pointer group">
            {/* Barre verticale animée */}
            <div className="flex flex-col justify-center">
              <div className="h-full w-[6px] bg-gray-300 rounded overflow-hidden" style={{ height: '100%' }}>
                <div ref={bar2Ref} className="w-full bg-gray-700 rounded" style={{ height: '0%' }} />
              </div>
            </div>
            <motion.div
              className="flex flex-col space-y-4 flex-1"
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: isVisible ? 0.2 : 0 }}
            >
              <span
                className={`${poppins.className} text-[22px] leading-none transition-colors duration-200 
                  ${isStep === 2 ? 'text-maincolor/90 font-bold' : 'text-noir/50 group-hover:text-noir/90'}`}
              >
                2. Choisissez le bon moment
              </span>
              <span
                className={`${mont_bold.className} text-[15px] transition-colors duration-200 
                  ${isStep === 2 ? 'text-noir/90' : 'text-noir/50 group-hover:text-noir/90'}`}
              >
                Réservez un créneau en ligne, à distance ou en présentiel.
                La prise de rendez-vous est rapide, claire et sécurisée.
              </span>
            </motion.div>
          </div>
          <div onClick={changeDivThree} className="flex flex-row items-stretch space-x-4 cursor-pointer group">
            {/* Barre verticale animée */}
            <div className="flex flex-col justify-center">
              <div className="h-full w-[6px] bg-gray-300 rounded overflow-hidden" style={{ height: '100%' }}>
                <div ref={bar3Ref} className="w-full bg-gray-700 rounded" style={{ height: '0%' }} />
              </div>
            </div>
            <motion.div
              className="flex flex-col space-y-4 flex-1"
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: isVisible ? 0.4 : 0 }}
            >
              <span
                className={`${poppins.className} text-[22px] leading-none transition-colors duration-200 
                  ${isStep === 3 ? 'text-maincolor/90 font-bold' : 'text-noir/50 group-hover:text-noir/90'}`}
              >
                3. Recevez votre guidance
              </span>
              <span
                className={`${mont_bold.className} text-[15px] transition-colors duration-200 
                  ${isStep === 3 ? 'text-noir/90' : 'text-noir/50 group-hover:text-noir/90'}`}
              >
                Le jour venu, connectez-vous ou retrouvez votre praticien.
                Dans un cadre bienveillant et confidentiel, vous êtes guidé
                avec clarté et justesse.
              </span>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
