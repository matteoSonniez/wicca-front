"use client";
import Image from "next/image";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// COMPONENTS
import HeaderDown from "@/components/HeaderDown";
import Services from "@/components/HomeComp/Services";
import ServicesBis from "@/components/HomeComp/ServicesBis";
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
  const [isSafari, setIsSafari] = useState(false);
  const [isSafariReady, setIsSafariReady] = useState(false);
  const [showHeaderDown, setShowHeaderDown] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent;
      const isSafari =
        ua.includes('Safari') &&
        !ua.includes('Chrome') &&
        !ua.includes('Chromium') &&
        !ua.includes('Android');
      setIsSafari(isSafari);
      setIsSafariReady(true);
      // Pour debug :
      console.log('UA:', ua, 'isSafari:', isSafari);
    }
  }, []);

  useEffect(() => {
    if (!serchRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowHeaderDown(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(serchRef.current);
    return () => observer.disconnect();
  }, []);

  const openPopup = () => {
    setShowAuthPopup(true);
    setTimeout(() => setPopupVisible(true), 10);
  };
  const closePopup = () => {
    setPopupVisible(false);
    setTimeout(() => setShowAuthPopup(false), 300);
  };


  return (
    <div className="relative overflow-x-hidden">

      {/* HeaderDown animé, apparaît quand searchRef disparaît */}
      <motion.div
        ref={headerDownRef}
        className="fixed z-50 top-0 w-full flex items-center"
        initial={{ y: -80, opacity: 0 }}
        animate={showHeaderDown ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ pointerEvents: showHeaderDown ? 'auto' : 'none' }}
      >
        <HeaderDown />
      </motion.div>
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
              position: "absolute",
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
          {/* Flèche animée */}
          {isSafariReady && (
            <motion.div
              ref={flecheRef}
              className="absolute bottom-2 left-10 flex space-x-4"
              initial={isSafari ? { translateY: 40, opacity: 0 } : { translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={isSafari ? { duration: 0.7, delay: 0.9, ease: "linear" } : { duration: 1.2, delay: 1.2, ease: "linear" }}
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            >
              <img src={Flechebas.src} className="w-12"></img>
            </motion.div>
          )}

          {/* Header animé */}
          {isSafariReady && (
            <motion.div
              ref={headerRef}
              className="flex w-full items-center z-50 px-[13vw] -translate-y-[10vh]"
              initial={isSafari ? { translateY: -40, opacity: 0 } : { translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={isSafari ? { duration: 0.7, delay: 0.9, ease: "linear" } : { duration: 1.2, delay: 0.2, ease: "linear" }}
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            >
              <div className="relative w-full justify-between flex items-center py-5">
                <div className="w-[300px]">
                  <span className={`${text_wicca.className} text-becomepract text-[26px]`}>
                    wicca
                  </span>
                </div>
                <div
                  className={`${mont_low.className} flex justify-center space-x-12 text-noir/50 text-[14px]`}
                >
                  <span className="cursor-pointer hover:text-becomepract">
                    Centre d'aide
                  </span>
                  <span className="cursor-pointer hover:text-becomepract">
                    Qui nous sommes ?
                  </span>
                  <span className="cursor-pointer hover:text-becomepract">
                    Nous contacter
                  </span>
                </div>
                <div
                  className={`${mont_low.className} text-noir/50 space-x-5 flex justify-end items-center text-[14px] w-[300px]`}
                >
                  <Link href="/register" className="cursor-pointer hover:text-becomepract">
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
            </motion.div>
          )}
          <div className=" px-[13vw] py-[2vh] h-full flex w-full items-center z-10">
            <div className="flex w-full h-full items-center justify-center space-x-14">
              {/* Bloc gauche animé */}
              {isSafariReady && (
                <motion.div
                  ref={leftBlockRef}
                  className="w-[50%] flex flex-col space-y-10"
                  initial={isSafari ? { translateX: -200, opacity: 0 } : { translateX: -300, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={isSafari ? { duration: 0.7, delay: 0.9, ease: "linear" } : { duration: 0.8, delay: 0.7, ease: "linear" }}
                  style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
                >
                  <span
                    className={`${poppins.className} text-[52px] text-becomepract leading-snug`}
                  >
                    Trouvez un <br />rendez-vous <br />
                    <div className="flex items-center">
                      <span className="mr-1">
                        avec un 
                      </span>
                      <RouletteMot />
                    </div>
                  </span>
                  <span
                    className={`${mont_petit.className} text-[17px] text-noir/50`}
                  >
                    Explorez votre chemin spirituel avec des experts et praticiens
                    certifiés
                  </span>
                  <SearchBar fromHeader={false} />
                  {/* Div invisible pour observer la disparition de la SearchBar */}

                </motion.div>
              )}
              {/* Portraits animés */}
              {isSafariReady && (
                <motion.div
                  ref={portraitsRef}
                  className="flex w-[52%] relative justify-center items-center h-full space-x-12"
                  initial={isSafari ? { translateX: 200, opacity: 0 } : { translateX: 300, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={isSafari ? { duration: 0.8, delay: 0.8, ease: "linear" } : { duration: 0.8, delay: 0.7, ease: "linear" }}
                  style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
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
                </motion.div>
              )}
            </div>
          </div>
          <div ref={serchRef} style={{ width: 1, height: 1, opacity: 0, pointerEvents: 'none' }} />
          {/* Services animés */}
          {isSafariReady && (
            <motion.div
              className="py-6 translate-y-[10vh]"
              ref={servicesRef}
              initial={isSafari ? { translateY: 40, opacity: 0 } : { translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={isSafari ? { duration: 0.7, delay: 0.9, ease: "linear" } : { duration: 1.2, delay: 1, ease: "linear" }}
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            >
              <ServicesBis fromHome={true} />
            </motion.div>
          )}
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

function RouletteMot() {
  const mots = ["médium", "astrologue", "magnétiseur", "tarologue"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mots.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        minWidth: 300,      // plus large
        height: 70,         // plus haut
        position: "relative",
        overflow: "hidden",
        verticalAlign: "middle",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.span
          key={mots[index]}
          initial={{ y: 70, opacity: 0 }} // même valeur que height
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -70, opacity: 0 }}   // même valeur que height
          transition={{ duration: 1.3 }} // <-- plus lent
          className="text-becomepract"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            textAlign: "left",
            lineHeight: "70px", // même valeur que height
            fontSize: "52px",
          }}
        >
          &nbsp;{mots[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
