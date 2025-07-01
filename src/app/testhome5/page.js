import Image from "next/image";
//import { useState, useRef, useLayoutEffect, useEffect } from "react";

// COMPONENTS
import HeaderTest from "@/components/HeaderTest";
import Services from "@/components/HomeComponents3/Services";
import TripleIcons from "@/components/HomeComponents3/TripleIcon";
import WiccaChiffre from "@/components/HomeComponents3/Chiffres";

// ASSETS
import Search from "@/img/chercher.png";
import Path from "@/img/image.png";

// FONTS
import { Inter, Quicksand, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400"], display: "swap" });
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


export default function Home() {

  //const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative overflow-x-hidden">
      <div
        className="fixed z-50 w-full px-[5vw] py-[2vh] justify-between flex items-center"
        style={{ transform: "translateY(-100%)" }}
      >
        <HeaderTest />
      </div>
      <div>
        <section className="relative flex flex-col w-full h-screen">
          {/* Fond dégradé en arc de cercle rouge */}
          {/* <div
            style={{
              position: "absolute",
              top: -15,
              left: -15,
              width: "15vw",
              height: "25vw",
              background: "radial-gradient(ellipse at top left, #ff9999 0%, #ffcccc 30%, transparent 100%)",
              zIndex: 0,
              pointerEvents: "none",
              filter: "blur(40px)",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -200,
              right: -20,
              width: "35vw",
              height: "40vw",
              background: "radial-gradient(ellipse at right, #DBD7FC 60%, transparent 100%)",
              zIndex: 0,
              pointerEvents: "none",
              filter: "blur(40px)",
              opacity: 0.4,
              borderTopLeftRadius: "20vw",
              borderBottomLeftRadius: "20vw",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              overflow: "hidden",
            }}
          /> */}
          <div className="flex w-full items-center z-50 px-[15vw]">
            <div className="relative w-full flex items-center py-5">
              <span className={`${mont.className} text-maincolor text-[26px]`}>
                wicca
              </span>
              <div
                className={`${mont_low.className} flex-1 flex justify-center space-x-7 text-noir/60 text-[14px]`}
              >
                <span className="cursor-pointer">Centre d'aide</span>
                <span className="cursor-pointer">Qui nous sommes</span>
                <span className="cursor-pointer">Nous contacter</span>
              </div>
              <div
                className={`${mont_low.className} text-noir/60 space-x-5 flex items-center text-[14px] ml-auto`}
              >
                <span className="cursor-pointer">Devenir practitien</span>
                <button className="border-[1px] text-blanc border-blanc rounded-full px-4 py-2 bg-maincolor">
                  Connection
                </button>
              </div>
            </div>
          </div>
          <div className=" px-[13vw] py-[2vh] h-full flex w-full items-center z-10">
            <div className="flex w-full h-full items-center justify-center space-x-10">
              <div className="w-[45%] flex flex-col space-y-10">
                <span className={`${mont.className} text-[50px] text-noir/90 leading-snug`}>
                  Trouvez <span className="text-maincolor">un</span> <br /><span className="text-maincolor">rendez-vous</span><br />avec un médium
                </span>
                <span className={`${mont_low.className} text-[17px] text-noir/50`}>
                  Explorez votre chemin spirituel avec des experts et praticiens certifiés
                </span>
                <div
                  className={`${mont_low.className} z-50 bg-blanc relative w-full h-16 rounded-full border-[1px] border-gray-400/70 flex items-center pl-6 pr-2`}
                >
                  <input
                    type="text"
                    placeholder="Chercher un expert..."
                    className="w-full flex-1 bg-blanc focus:outline-none focus:ring-2 focus:ring-maincolor"
                  />
                  <button className="h-12 w-12 bg-maincolor/90 rounded-full flex justify-center items-center">
                    <Image src={Search} alt="Rechercher" className="w-5" />
                  </button>
                </div>
              </div>
              <div className="flex w-[55%] relative justify-center items-center h-full space-x-6">
              {/* <img src={Path.src} className="absolute w-full scale-110 ml-16" /> */}
                <div className="flex flex-col h-full justify-center space-y-6">
                  <div className="h-[42%] relative rounded-3xl overflow-hidden aspect-[0.9/1]">
                    <Image
                      src="/experts/portrait2.webp"
                      alt="Portrait de l'expert"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-[42%] relative rounded-3xl overflow-hidden aspect-[0.9/1]">
                    <Image
                      src="/experts/portrait7.webp"
                      alt="Portrait de l'expert"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="h-[60%] relative rounded-3xl overflow-hidden aspect-[0.65/1]">
                  <Image
                    src="/experts/portrait5.webp"
                    alt="Portrait de l'expert"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <Services />
          </div>
        </section>
        <section className="mt-36">
          <TripleIcons />
          <WiccaChiffre/>
        </section>
      </div>
    </div>
  );
}
