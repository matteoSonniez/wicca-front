"use client";
import { useEffect, useState, useRef } from "react";
import { Lato, Inter } from "next/font/google";
import Bgtest from "@/img/traitbg.png";
import BlobImage from "@/img/Vector2.png";
import { gsap } from "gsap";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
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

const Index = () => {
  const [isStep, setIsSpet] = useState(2);
  const divRef = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

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
      scale: 1.1,
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
      scale: 1.1,
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
      scale: 1.1,
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

  return (
    <div className="flex relative px-[10vw] mb-[5vh] mt-[10vh]">
      {/* <div className="flex flex-col relative space-y-[12vh] mb-[10vh] bg-diagonal-fade bg-blend-lighten "> */}
      {/* <img
            src={Bgtest.src}
            alt="Background"
            className="absolute inset-0 w-full h-full -z-10"
          /> */}

      <div className="flex justify-between w-full py-16 px-0 rounded-2xl items-center">
        <div className="w-[32%] flex flex-col space-y-4 ">
          <span className={`${lato.className} text-[40px] text-noir/90`}>
            Réserver en toute simplicité
          </span>
          <span className={`${inter.className} text-[15px] text-noir/70 text-opacity-85`}>
            Medium Insights propose des FAQ et des conseils personnalisés
            à intégrer à votre plateforme de voyance. Validez et diffusez
            des messages instantanés conçus pour votre activité dans
            l’interface de chat de votre site, ce qui encourage les
            visiteurs à demander une consultation ou un tirage de cartes.
          </span>
          <div
            className={`${lato.className} flex space-x-4 text-gray-300 text-[15px]`}
          >
            <button
              className={`rounded-md border-[0.5px] border-gray-300 px-3 text-gray-400 bg-white ${isStep == 1 && "border-gray-600 text-gray-600"}`}
              onClick={changeDivOne}
            >
              Étape 1
            </button>
            <button
              className={`rounded-md border-[0.5px] border-gray-300 px-3 text-gray-400 bg-white ${isStep == 2 && "border-gray-600 text-gray-600"}`}
              onClick={changeDivTwo}
            >
              Étape 2
            </button>
            <button
              className={`rounded-md border-[0.5px] border-gray-300 px-3 text-gray-400 bg-white ${isStep == 3 && "border-gray-600 text-gray-600"}`}
              onClick={changeDivThree}
            >
              Étape 3
            </button>
          </div>
        </div>
        <div className="relative w-[58%] h-full mr-5">
          <div
            ref={divRef}
            className="absolute flex items-center space-x-8 z-20 -top-6 left-0 w-[60%] bg-test rounded-lg p-6 shadow-2xl border-[1px] border-gray-300 filter brightness-[65%]"
          >
            <div className="w-24 h-24 border-[16px] border-maincolor/90 rounded-full bg-transparent" />
            <div className="flex-1 flex-col">

              <h3 className="text-gray-700 font-medium mb-2">
                Trouvez le praticien qui vous correspond
              </h3>
              <p
                className={`${inter.className} text-gray-600 text-sm leading-relaxed text-opacity-60`}
              >
                Parcourez nos praticiens certifiés et choisissez celui ou
                celle qui résonne avec vos besoins : voyance, astrologie,
                soins énergétiques, numérologie, tarot...
              </p>
            </div>

          </div>

          <div
            ref={div2Ref}
            className="absolute flex items-center space-x-8 z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] bg-white rounded-lg py-6 px-6 shadow-2xl border-[1px] border-gray-300 filter brightness-100"
          >
            <div className="w-24 h-24 border-[25px] border-maincolor/90 rounded-full bg-transparent" />
            <div className="flex-1 flex-col">

              <h3 className="text-gray-700 font-medium mb-2">
                Choisissez le bon moment
              </h3>
              <p
                className={`${inter.className} text-gray-600 text-sm leading-relaxed text-opacity-60`}
              >
                Réservez un créneau en ligne, à distance ou en présentiel.
                La prise de rendez-vous est rapide, claire et sécurisée.
              </p>
            </div>
          </div>

          <div
            ref={div3Ref}
            className="absolute flex items-center space-x-8 z-20 -bottom-5 -right-5 w-[70%] bg-white rounded-lg p-6 shadow-2xl border-[1px] border-gray-300 filter brightness-[65%]"
          >
            <div className="w-24 h-24 rounded-full bg-maincolor/90" />
            <div className="flex-1 flex-col">

              <h3 className="text-gray-700 font-medium mb-2">
                Recevez votre guidance
              </h3>
              <p
                className={`${inter.className} text-gray-600 text-sm leading-relaxed text-opacity-60`}
              >
                Le jour venu, connectez-vous ou retrouvez votre praticien.
                Dans un cadre bienveillant et confidentiel, vous êtes guidé
                avec clarté et justesse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
