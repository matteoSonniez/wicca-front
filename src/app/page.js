"use client";
import Image from "next/image";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// COMPONENTS
import HeaderDown from "@/components/HeaderDown";
import Services from "@/components/HomeComp/Services";
import TripleIcons from "@/components/HomeComp/TripleIcon";
import AboutUs from "@/components/HomeComp/AboutUs";
import DevenirPractitien from "@/components/HomeComp/BecomeExpert";
import SlideExpert from "@/components/HomeComp/ExpertSlide";
import Steps from "@/components/HomeComp/Steps";
import AllServices from "@/components/HomeComp/AllServices2";
import SearchBar from "@/components/SearchBar";
import FAQ from "@/components/HomeComp/FAQ";
import Avis from "@/components/HomeComp/Avis";
import Footer from "@/components/HomeComp/Footer";
import PopUpAuth from "@/components/PopUp/Auth";
import Link from "next/link";

// ASSETS
import Search from "@/img/chercher.png";
import Path from "@/img/image3.png";
import Path2 from "@/img/image2.png";
import Path3 from "@/img/image6.webp";
import Path4 from "@/img/solar_back3.webp";
import TopRight from "@/img/backtopright.png";
import TopLeft from "@/img/backtopleft.png";
import Fleche from "@/img/icons/fleche.png";
import Flechebas from "@/img/flechebas.png";
import FooterImg from "@/img/footer.png";

// FONTS
import { Inter, Quicksand, Montserrat, Space_Grotesk, Source_Code_Pro, Sora, Cinzel, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400"], display: "swap" });

const text_wicca = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const quicksand = Inter({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const mont_low = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const mont_petit = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});


export default function Home() {
  //const [inputValue, setInputValue] = useState("");
  const flecheRef = useRef(null);
  const portraitsRef = useRef(null);
  const leftBlockRef = useRef(null);
  const headerRef = useRef(null);
  const serchRef = useRef(null);
  const [showFloatingHeader, setShowFloatingHeader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [renderHeader, setRenderHeader] = useState(false);
  const animatedBlockRef = useRef(null);
  const servicesRef = useRef(null);
  const headerDownRef = useRef(null);
  const aboutUsRef = useRef(null);
  const backRef = useRef(null);
  const gradientRef = useRef(null);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setShowAuthPopup(true);
    setTimeout(() => setPopupVisible(true), 10);
  };
  const closePopup = () => {
    setPopupVisible(false);
    setTimeout(() => setShowAuthPopup(false), 300);
  };

  // useLayoutEffect(() => {
  //   if (portraitsRef.current) {
  //     gsap.set(portraitsRef.current, { x: "50vw" });
  //   }
  // }, []);

  useEffect(() => {
    // On crée un timer de 1s avant de démarrer les animations
    const timer = setTimeout(() => {
      gsap.to(portraitsRef.current, {
        x: 0,
        duration: 1.6,
        ease: "power3.out",
      });

      gsap.to(leftBlockRef.current, {
        x: 0,
        duration: 1.6,
        ease: "power3.out",
      });

      gsap.to(headerRef.current, {
        y: 0,
        duration: 1.6,
        ease: "power3.out",
      });

      gsap.to(servicesRef.current, {
        y: 0,
        duration: 1.6,
        ease: "power3.out",
      });
    }, 300);

    // Nettoyage du timer si le composant se démonte
    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    //if (!animatedBlockRef.current) return;
    gsap.to(servicesRef.current, {
      x: 400, // ou "100vw" pour sortir complètement de l'écran
      opacity: 0.4,
      scrollTrigger: {
        trigger: animatedBlockRef.current,
        start: "bottom bottom", // quand le haut du bloc atteint le centre du viewport
        end: "bottom top", // quand le bas du bloc atteint le haut du viewport
        scrub: true,
      },
    });

    gsap.to(flecheRef.current, {
      y: 300, // ou la distance que tu veux
      ease: "none",
      scrollTrigger: {
        trigger: flecheRef.current, // ou "body" si tu veux que ce soit tout le scroll
        start: "bottom 95%", // déclenche dès que le haut du container touche le bas du viewport
        end: "bottom top",  // jusqu'à ce que le bas du container touche le haut du viewport
        scrub: true,         // "scrub" = suit le scroll
      }
    });
  }, []);

  useEffect(() => {
    if (!headerDownRef.current || !serchRef.current) return;

    // Positionne la div hors écran au départ
    gsap.set(headerDownRef.current, { y: "-100%" });

    ScrollTrigger.create({
      trigger: serchRef.current,
      start: "bottom top", // quand le bas de la barre de recherche touche le haut du viewport
      end: "+=1", // juste après
      onEnter: () => {
        gsap.to(headerDownRef.current, {
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(headerDownRef.current, {
          y: "-100%",
          duration: 0.3,
          ease: "power3.in",
        });
      },
      toggleActions: "play none none reverse",
    });
  }, []);

  useLayoutEffect(() => {
    if (!gradientRef.current || !backRef.current) return;

    gsap.to(gradientRef.current, {
      y: -350, // ou la valeur souhaitée
      scrollTrigger: {
        trigger: backRef.current,
        start: "top center", // quand backRef entre dans le viewport
        end: "top top", // jusqu'à ce qu'il soit au centre
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">

      <div
        ref={headerDownRef}
        style={{ transform: "translateY(-100%)" }}
        className={`
          fixed z-50 w-full flex items-center
        `}
      >
        <HeaderDown />
      </div>
      <div>
        <section
          ref={animatedBlockRef}
          className="relative flex flex-col w-full h-screen"
        >
          {/* <div className="absolute top-0 right-0 w-[400px]">
            <img src={TopRight.src}></img>
          </div>
          <div className="absolute top-10 -left-12 w-[400px]">
            <img src={TopLeft.src}></img>
          </div> */}
          {/* Fond dégradé en arc de cercle rouge */}
          <div
            ref={gradientRef}
            style={{
              position: "fixed",
              top: -15,
              left: -15,
              width: "15vw",
              height: "25vw",
              background:
                "radial-gradient(ellipse at top left, #ff9999 0%, #ffcccc 30%, transparent 100%)",
              zIndex: -1,
              pointerEvents: "none",
              filter: "blur(40px)",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "40vw",
              height: "40vw",
              background: `
              radial-gradient(
                circle at center,
                rgba(175,166,248,0.7) 0%,
                rgba(175,166,248,0.5) 40%,
                rgba(175,166,248,0.3) 40%,
                transparent 100%
              )
            `,
              zIndex: 0,
              pointerEvents: "none",
              filter: "blur(60px)",
              opacity: 0.5,
              borderRadius: "50%",
              overflow: "hidden",
              transform: "translate(50%, 40%)",
            }}
          />
          <div ref={flecheRef} className="absolute bottom-2 left-10 flex space-x-4">
            <img src={Flechebas.src} className="w-12"></img>
          </div>

          <div
            ref={headerRef}
            className="flex w-full items-center z-50 px-[13vw] -translate-y-[10vh]"
          >
            <div className="relative w-full justify-between flex items-center py-5">
              <div className="w-[300px]">
                <span className={`${text_wicca.className} text-noir text-[26px]`}>
                  wicca
                </span>
              </div>
              <div
                className={`${mont_low.className} flex justify-center space-x-12 text-noir/50 text-[14px]`}
              >
                <span className="cursor-pointer hover:text-noir/80">
                  Centre d'aide
                </span>
                <span className="cursor-pointer hover:text-noir/80">
                  Qui nous sommes
                </span>
                <span className="cursor-pointer hover:text-noir/80">
                  Nous contacter
                </span>
              </div>
              <div
                className={`${mont_low.className} text-noir/50 space-x-5 flex justify-end items-center text-[14px] w-[300px]`}
              >
                <Link href="/register" className="cursor-pointer hover:text-noir/80">
                  Inscription
                </Link>
                <button
                  className="border-[1px] text-blanc border-blanc rounded-full px-4 py-2 bg-maincolor"
                  onClick={openPopup}
                >
                  Me connecter
                </button>
              </div>
            </div>
          </div>
          <div className=" px-[13vw] py-[2vh] h-full flex w-full items-center z-10">
            <div className="flex w-full h-full items-center justify-center space-x-14">
              <div
                ref={leftBlockRef}
                className="w-[45%] flex flex-col space-y-10 -translate-x-[50vw]"
              >
                <span
                  className={`${mont.className} text-[50px] text-nuit/90 leading-snug`}
                >
                  Trouvez <span className="text-nuit/90">un</span> <br />
                  <span className="text-nuit/90">rendez-vous</span>
                  <br />
                  avec un <span className="text-maincolor/90">médium</span>
                </span>
                <span
                  className={`${mont_petit.className} text-[17px] text-noir/50`}
                >
                  Explorez votre chemin spirituel avec des experts et praticiens
                  certifiés
                </span>
                <div ref={serchRef}>
                  <SearchBar fromHeader={false}></SearchBar>
                </div>
              </div>
              <div
                ref={portraitsRef}
                className="flex w-[52%] translate-x-[60vw] relative justify-center items-center h-full space-x-12"
              >
                {/* <img
                  src={Path.src}
                  className="absolute w-full scale-[1]"
                /> */}
                {/* <img
                  src={Path2.src}
                  className="absolute w-full scale-[1.1] ml-16"
                /> */}
                <img
                  src={Path4.src}
                  className="absolute w-full"
                />
                <div className="flex flex-col h-full justify-center space-y-10">
                  <div className="h-[38%] relative rounded-3xl overflow-hidden aspect-[0.9/1]">
                    <Image
                      src="/experts/home2.webp"
                      alt="Portrait de l'expert"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-[38%] relative rounded-3xl overflow-hidden aspect-[0.9/1]">
                    <Image
                      src="/experts/home.webp"
                      alt="Portrait de l'expert"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="h-[50%] relative rounded-3xl overflow-hidden aspect-[0.65/1]">
                  <Image
                    src="/experts/home3.webp"
                    alt="Portrait de l'expert"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 translate-y-[10vh]" ref={servicesRef}>
            <Services />
          </div>
        </section>
        <section className="mt-20 z-30">
          <TripleIcons />
          <Steps />
          <div ref={backRef}></div>
          <AboutUs />
          <SlideExpert />
          <DevenirPractitien />
          <AllServices />
          <Avis />
          <FAQ />
          <Footer />
          {/* <div className="relative w-full">
            <Image src={FooterImg.src} alt="Footer" width={1200} height={300} className="object-cover w-full h-auto" />
          </div> */}
        </section>
      </div>
      {showAuthPopup && (
        <PopUpAuth onClose={closePopup} visible={popupVisible} />
      )}
    </div>
  );
}
