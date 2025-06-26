"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Services from "@/components/HomeComponents/Services";
import Back3 from "@/img/back3.svg";
import HomeImage from "@/img/home.jpg";
import BlobImage from "@/img/Vector2.png";
import BackTopLeft from "@/img/backw.png";
import BackTopRight from "@/img/blobbg6.svg";
//import VideoHome from "@/video/video-home.mp4";
import Icon1 from "@/img/icon-group.png";
import Icon2 from "@/img/icon-calendar.png";
import Icon3 from "@/img/icon-creditcard.png";
import Blob from "@/img/blob.svg";
import BlobIcon from "@/img/blob-for-icon.svg";
import BlobIcon2 from "@/img/blob-for-icon2.svg";
import BlobIcon3 from "@/img/blob-for-icon3.svg";
import BlobHome from "@/img/blob-home.svg";
import ExpertHome from "@/components/HomeComponents/ExpertHome";
import DevenirPracticien from "@/components/HomeComponents/DevenirPracticienHome";
import AllServices from "@/components/HomeComponents/AllServices";
import { gsap } from "gsap";
import {
  Freehand,
  Poiret_One,
  Playfair_Display,
  Montserrat,
  Inter,
  Lato,
} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat_bold = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const lato_bold = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

function Page() {
  const divRef = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const [itForm, setItForm] = useState(false);

  const changeDivOne = () => {
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
      zIndex: 50,
      ease: "power1.out",
    });
    gsap.to(el2, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      filter: "brightness(0.5)",
      opacity: 0.4, // brightness initial
      zIndex: 40, // z-index initial (ici z-20)
      ease: "power1.out",
    });

    gsap.to(el3, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      filter: "brightness(0.5)",
      opacity: 0.4, // brightness initial
      zIndex: 30, // z-index initial (ici z-20)
      ease: "power1.out",
    });
  };

  const changeDivTwo = () => {
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
      zIndex: 50,
      ease: "power1.out",
    });

    gsap.to(el2, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      filter: "brightness(0.5)",
      opacity: 0.4, // brightness initial
      zIndex: 20, // z-index initial (ici z-20)
      ease: "power1.out",
    });

    gsap.to(el3, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      filter: "brightness(0.5)",
      opacity: 0.4, // brightness initial
      zIndex: 30, // z-index initial (ici z-20)
      ease: "power1.out",
    });
  };

  const changeDivThree = () => {
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
      filter: "brightness(1)",
      opacity: 1, // 100% de luminosité
      zIndex: 50,
      ease: "power1.out",
    });

    gsap.to(el2, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      filter: "brightness(0.5)",
      opacity: 0.4, // brightness initial
      zIndex: 20, // z-index initial (ici z-20)
      ease: "power1.out",
    });

    gsap.to(el3, {
      duration: 0.5,
      x: 0,
      y: 0,
      scale: 1,
      filter: "brightness(0.5)",
      opacity: 0.4, // brightness initial
      zIndex: 40, // z-index initial (ici z-20)
      ease: "power1.out",
    });
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <div className="bg-maincolor h-[70vh] w-screen absolute rounded-b-3xl"></div> */}
      {/* Image de fond en haut à gauche */}
      {/* <div className="absolute -top-[0vh] -right-[18vw] w-[90vw]  h-[80vh] -z-10">
        <Image
          src={BackTopLeft.src}
          alt="Background Top Left"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div> */}
      <div className="absolute top-[0vh] right-0  w-[100vw]  h-[90vh] -z-10">
        <Image
          src={BackTopRight.src}
          alt="Background Top Left"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-screen flex justify-center pt-[12vh]">
          <div
            className="
              relative
              w-[89vw] h-[74vh]
              rounded-2xl overflow-hidden
              flex items-center pl-[5%]
              bg-black/25 bg-blend-darken
            "
          >
            {/* Vidéo en arrière-plan */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
              src="/video/video-home.mp4"
              autoPlay
              loop
              muted
            />

            {/* Contenu au premier plan */}
            <div className="relative z-10 font-bold text-[65px] w-full space-y-6">
              <span className={`${montserrat_bold.className} inline-block leading-tight`}>
                Explorez votre chemin<br/> spirituel avec des praticiens<br/> & experts
                certifiés
              </span>
              <div
                className="
            w-[90%] h-[18vh] rounded-3xl
            bg-gradient-to-b
              from-[#17191E]/90
              to-[#17191E]/70
            border border-white/30
            backdrop-blur-lg
          "
              />
            </div>
          </div>
        </div>

        <Services></Services>

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
                  className="absolute w-full z-[-1] opacity-20"
                  src={BlobIcon.src}
                />
                <img className=" w-[85%]" src={Icon2.src} />
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
                  className="absolute w-full z-[-1] opacity-20"
                  src={BlobIcon3.src}
                />
                <img className=" w-[80%]" src={Icon1.src} />
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
                  className="absolute w-full z-[-1] opacity-20"
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

        <div className="flex w-screen justify-center mt-[12vh] mb-[20vh]">
          <div className="w-[83vw] flex justify-between items-center">
            <div className="relative bg-opacity-40 rounded-xl w-[34vw] h-[32vh] ml-10">
              <div className="absolute inset-0 -z-10">
                <Image
                  src={BlobHome.src}
                  alt="Background Top Left"
                  fill
                  className="opacity-0"
                  priority
                />
              </div>
              {/* SVG de connexion */}

              {/* Carte de gauche */}
              <div className="absolute top-4 -left-10 w-80 bg-beige rounded-xl p-4 shadow-lg border-[1px] border-gray-300">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                  ✨ Suggestion
                </div>
                <h3 className="text-gray-900 font-medium mb-2">
                  Expédiez-vous vos produits dans le monde entier ?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-opacity-60">
                  Oui, nous proposons l’expédition à l’international ! Nous
                  souhaitons rendre nos produits accessibles
                </p>
              </div>

              {/* Carte de droite */}
              <div className="absolute -bottom-5 -right-5 w-80 bg-beige rounded-xl p-6 shadow-lg border-[1px] border-gray-300">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                  ✨ Suggestion
                </div>
                <h3 className="text-gray-900 font-medium mb-2">
                  Comment puis-je retourner un article ?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-opacity-60">
                  Le processus de retour est très simple ! Voici un guide par
                  étapes : 1. Connectez-vous à votre compte : accédez à notre...
                </p>
              </div>

              {/* Image produit */}
              <div className="absolute right-0 top-0 transform w-[39%] rounded-xl">
                <img
                  src={BlobImage.src}
                  className="object-cover w-full h-full"
                ></img>
              </div>
            </div>

            <div className="w-[35vw] flex flex-col space-y-5">
              <span className={`${lato.className} text-[40px] text-gray-800`}>
                Exemple de titre section
              </span>
              <span className={`${lato.className} text-[15px] text-gray-500`}>
                Medium Insights propose des FAQ et des conseils personnalisés à
                intégrer à votre plateforme de voyance. Validez et diffusez des
                messages instantanés conçus pour votre activité dans l’interface
                de chat de votre site, ce qui encourage les visiteurs à demander
                une consultation ou un tirage de cartes. Offrez une expérience
                spirituelle unique et suscitez la confiance pour fidéliser votre
                clientèle.
              </span>
              <div className="flex space-x-4">
                <button
                  className="rounded-full border-[0.5px] border-gray-300 px-3 text-gray-300 text-[15px]"
                >
                  2012-2015
                </button>
                <button
                  className="rounded-full border-[0.5px] border-gray-300 px-3 text-gray-300 text-[15px]"
                >
                  2012-2015
                </button>
                <button
                  className="rounded-full border-[0.5px] border-gray-300 px-3 text-gray-300 text-[15px]"
                >
                  2012-2015
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-screen justify-center mb-[10vh]">
          <div className="w-[83vw] flex justify-between items-center text-white">
            <div className="w-[35vw] flex flex-col space-y-4">
              <span className={`${lato.className} text-[40px] text-gray-800`}>
                Exemple de titre section
              </span>
              <span className={`${lato.className} text-[15px] text-gray-500`}>
                Medium Insights propose des FAQ et des conseils personnalisés à
                intégrer à votre plateforme de voyance. Validez et diffusez des
                messages instantanés conçus pour votre activité dans l’interface
                de chat de votre site, ce qui encourage les visiteurs à demander
                une consultation ou un tirage de cartes. Offrez une expérience
                spirituelle unique et suscitez la confiance pour fidéliser votre
                clientèle.
              </span>
              <div className="flex space-x-4">
                <button
                  className="rounded-full border-[0.5px] border-gray-300 px-3 text-gray-300 text-[15px]"
                  onClick={changeDivOne}
                >
                  2012-2015
                </button>
                <button
                  className="rounded-full border-[0.5px] border-gray-300 px-3 text-gray-300 text-[15px]"
                  onClick={changeDivTwo}
                >
                  2012-2015
                </button>
                <button
                  className="rounded-full border-[0.5px] border-gray-300 px-3 text-gray-300 text-[15px]"
                  onClick={changeDivThree}
                >
                  2012-2015
                </button>
              </div>
            </div>
            <div className="relative w-[36vw] h-[32vh] mr-5">
              <div
                ref={divRef}
                className="absolute z-20 -top-6 -left-6 w-[60%] bg-white rounded-lg p-4 shadow-2xl border-[1px] border-gray-300 filter brightness-50 opacity-40"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                  ✨ Suggestion
                </div>
                <h3 className="text-gray-900 font-medium mb-2">
                  Expédiez-vous vos produits dans le monde entier ?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-opacity-60">
                  Oui, nous proposons l’expédition à l’international ! Nous
                  souhaitons rendre nos produits accessibles
                </p>
              </div>

              <div
                ref={div2Ref}
                className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] bg-white rounded-lg p-4 shadow-2xl border-[1px] border-gray-300 filter brightness-100 opacity-100"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                  ✨ Suggestion
                </div>
                <h3 className="text-gray-900 font-medium mb-2">
                  Comment puis-je retourner ?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-opacity-60">
                  Le processus de retour est très simple ! Voici un guide par
                </p>
              </div>

              <div
                ref={div3Ref}
                className="absolute z-30 -bottom-5 -right-5 w-[70%] bg-white rounded-lg p-4 shadow-2xl border-[1px] border-gray-300 filter brightness-50 opacity-40"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                  ✨ Suggestion
                </div>
                <h3 className="text-gray-900 font-medium mb-2">
                  Comment puis-je retourner ?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-opacity-60">
                  Le processus de retour est très simple ! Voici un guide par
                  étapes : 1. Connectez-vous à votre compte : accédez à notre...
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <ExpertHome></ExpertHome>
        <DevenirPracticien></DevenirPracticien>
        <AllServices></AllServices>
        
      </div>
    </div>
  );
}

export default Page;
