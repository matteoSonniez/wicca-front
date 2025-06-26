"use client";
import { useEffect, useState, useRef } from "react";
import { Lato, Inter, Montserrat } from "next/font/google";
import BlobHome from "@/img/blob-home.svg";
import BlobImage from "@/img/Vector2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const inter_bold = Inter({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat_bold = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isStep, setIsSpet] = useState(2);
  const divRef = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const containerRef = useRef(null);

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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.set(el, { scale: 0.8 });
    gsap.to(el, {
      scale: 1,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col relative space-y-6 mb-32 mt-[10vh]">
      {/* <div className="flex flex-col relative space-y-[12vh] mb-[10vh] bg-diagonal-fade bg-blend-lighten "> */}
          {/* <img
            src={Bgtest.src}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          /> */}
          <div className="flex w-screen justify-center">
            <div className="w-[90vw] bg-blanc flex justify-between items-center py-24 px-16 rounded-3xl">
              <div className="relative bg-opacity-40 rounded-xl w-[34vw] h-[32vh] ml-10">
                
                {/* SVG de connexion */}

                {/* Carte de gauche */}
                <div className="absolute top-4 -left-10 w-80 bg-blanc rounded-xl p-5 shadow-lg border-[1px] border-gray-300">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                    ✨ Suggestion
                  </div>
                  <h3 className={`${inter_bold.className} text-noir mb-2`}>
                    Expédiez-vous vos produits dans le monde entier ?
                  </h3>
                  <p className={`${inter.className} text-noir/80 text-sm leading-relaxed`}>
                    Oui, nous proposons l'expédition à l'international ! Nous
                    souhaitons rendre nos produits accessibles
                  </p>
                </div>

                {/* Carte de droite */}
                <div className="absolute -bottom-5 -right-5 w-80 bg-beige rounded-xl p-5 shadow-lg border-[1px] border-gray-300">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                    ✨ Suggestion
                  </div>
                  <h3 className={`${inter_bold.className} text-gray-900 mb-2`}>
                    Comment puis-je retourner un article ?
                  </h3>
                  <p className={`${inter.className} text-noir/80 text-sm leading-relaxed`}>
                    Le processus de retour est très simple ! Voici un guide par
                    étapes : 1. Connectez-vous à votre compte : accédez à
                    notre...
                  </p>
                </div>

                {/* Image produit */}
                <div className="absolute right-0 -top-10 transform w-[42%] rounded-xl">
                  <img
                    src={BlobImage.src}
                    className="object-cover w-full h-full"
                  ></img>
                </div>
              </div>

              <div className="w-[35vw] flex flex-col space-y-5">
                <span className={`${montserrat_bold.className} text-[40px] text-noir`}>
                  Qui sommes-nous ?
                </span>
                <span className={`${montserrat.className} text-[17px] text-gray-800 leading-relaxed`}>
                  Wicca est née d'une conviction forte : celle de trouver un
                  espace sûr, moderne et bienveillant pour se reconnecter à soi,
                  au-delà du chaos du quotidien. Fondée par des passionnés de
                  spiritualité et de développement intérieur, la plateforme a
                  été pensée comme un pont entre l'ancestral et le contemporain.
                  Ici, nous sélectionnons rigoureusement des praticiens de
                  confiance engagés à vous accompagner avec
                  éthique, justesse et sensibilité. <br/> <br/>
                  
                  {/* Que vous soyez en quête de
                  réponses, d'alignement ou simplement d'un moment de clarté,
                  Wicca vous accompagne à chaque étape, en toute confiance.
                  Notre mission : rendre les pratiques spirituelles accessibles,
                  authentiques et ancrées dans le quotidien. */}
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-screen justify-center">
            <div className="w-[90vw] bg-blanc flex justify-between items-center text-white py-24 px-16 rounded-2xl">
              <div className="w-[33vw] flex flex-col space-y-4 ">
                <span className={`${montserrat_bold.className} text-[40px] text-noir`}>
                  Réserver en toute simplicité
                </span>
                <span className={`${montserrat.className} text-[15px] text-gray-800 leading-relaxed`}>
                  Medium Insights propose des FAQ et des conseils personnalisés
                  à intégrer à votre plateforme de voyance. Validez et diffusez
                  des messages instantanés conçus pour votre activité dans
                  l'interface de chat de votre site, ce qui encourage les
                  visiteurs à demander une consultation ou un tirage de cartes.
                  Offrez une expérience spirituelle unique et suscitez la
                  confiance pour fidéliser votre clientèle.
                </span>
                <div
                  className={`${lato.className} flex space-x-4 text-gray-300 text-[15px]`}
                >
                  <button
                    className={`rounded-full border-[0.5px] border-gray-300 px-3 text-gray-400 bg-white ${isStep == 1 && "border-gray-600 text-gray-600" }`}
                    onClick={changeDivOne}
                  >
                    Étape 1
                  </button>
                  <button
                    className={`rounded-full border-[0.5px] border-gray-300 px-3 text-gray-400 bg-white ${isStep == 2 && "border-gray-600 text-gray-600" }`}
                    onClick={changeDivTwo}
                  >
                    Étape 2
                  </button>
                  <button
                    className={`rounded-full border-[0.5px] border-gray-300 px-3 text-gray-400 bg-white ${isStep == 3 && "border-gray-600 text-gray-600" }`}
                    onClick={changeDivThree}
                  >
                    Étape 3
                  </button>
                </div>
              </div>
              <div className="relative w-[36vw] h-[32vh] mr-5">
                <div
                  ref={divRef}
                  className="absolute z-20 -top-6 -left-6 w-[60%] bg-white rounded-lg p-4 shadow-2xl border-[1px] border-gray-300 filter brightness-[65%]"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                    ✨ Étape 1
                  </div>
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

                <div
                  ref={div2Ref}
                  className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] bg-white rounded-lg p-4 shadow-2xl border-[1px] border-gray-300 filter brightness-100"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                    ✨ Étape 2
                  </div>
                  <h3 className="text-gray-700 font-medium mb-2">
                    Choisissez le bon moment
                  </h3>
                  <p
                    className={`${inter.className} text-gray-900 text-sm leading-relaxed text-opacity-60`}
                  >
                    Réservez un créneau en ligne, à distance ou en présentiel.
                    La prise de rendez-vous est rapide, claire et sécurisée.
                  </p>
                </div>

                <div
                  ref={div3Ref}
                  className="absolute z-20 -bottom-5 -right-5 w-[70%] bg-white rounded-lg p-4 shadow-2xl border-[1px] border-gray-300 filter brightness-[65%]"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-maincolor bg-opacity-10 text-maincolor text-sm font-semibold mb-2">
                    ✨ Étape 3
                  </div>
                  <h3 className="text-gray-700 font-medium mb-2">
                    Recevez votre guidance
                  </h3>
                  <p
                    className={`${inter.className} text-gray-900 text-sm leading-relaxed text-opacity-60`}
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
