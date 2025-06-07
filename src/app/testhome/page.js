"use client";
import Image from "next/image";
import { useState } from "react";
import Back3 from "@/img/back3.svg";
import BackTopRight from "@/img/backtopright.png";
import BackTopLeft from "@/img/backtoplefttest.png";
import AnimText from "@/components/AnimationText";
import {
  Freehand,
  Poiret_One,
  Playfair_Display,
  Inter,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

const inter2 = Inter({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

function Page() {
    const [itForm, setItForm] = useState(false);
    const [itForm2, setItForm2] = useState(false);
  return (
    <div className="relative min-h-screen">
      {/* SVG image en haut à droite */}
      <div className="absolute -top-12 right-0 -z-10 w-[450px]">
        <Image src={BackTopRight} alt="Background" />
      </div>
      <div className="absolute top-12 left-0 -z-10 w-[450px]">
        <Image src={BackTopLeft} alt="Background" />
      </div>

      <div className="flex flex-col items-center">
        <div
          className={`${inter.className} w-screen justify-center flex mt-[24vh]`}
        >
          <h1 className="text-[60px] leading-tight tracking-tight flex flex-col items-center text-black">
            <span>Explorez votre chemin</span>
            <span className="flex items-center space-x-[13px]">
              <AnimText text="spirituel" className="patterns__one"></AnimText>
              <span> avec des praticiens</span>
            </span>
            <span>& experts certifiés</span>
            <span>certifiés .</span>
          </h1>
        </div>
        <div className={`${inter2.className} w-screen justify-center flex mt-10`}>
          <h1 className="text-[22px] leading-tight tracking-tight text-center text-black">
            Trouvez un rendez-vous avec un médium
            <br />
            des maintenant
          </h1>
        </div>

        <div className="w-[66vw] h-[12vh] mt-12 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white flex justify-center items-center border-gray-300 border-[1px]">
          {/* Div avec bg-aubergine : on arrête la propagation pour éviter de déclencher le clic sur le container principal */}
          <div
            className="w-[95%] h-[50%] bg-opacity-[0.05] rounded-full border-gray-200 border-2 flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-1/2 ${
                itForm ? "bg-white" : ""
              } transition-all duration-300 h-full rounded-full`}
              onClick={() => {
                setItForm(true);
                setItForm2(false);
              }}
              style={
                itForm
                  ? { boxShadow: "5px 0 10px rgba(0, 0, 0, 0.08)" }
                  : {}
              }
            >
              <input
                type="text"
                placeholder="Entrez votre texte ici..."
                className={`${inter2.className} w-full h-full bg-transparent p-5 border-none outline-none text-black`}
              />
            </div>
            <div
              className={`w-1/2 ${
                itForm2 || itForm ? "hidden" : "block"
              } transition-all duration-150 w-[1px] bg-gray-400 h-[70%]`}
            ></div>
            <div
              className={`w-1/2 ${
                itForm2 ? "bg-white" : ""
              } transition-all duration-300 h-full rounded-full`}
              onClick={() => {
                setItForm2(true);
                setItForm(false);
              }}
              style={
                itForm2
                  ? { boxShadow: "-5px 0 10px rgba(0, 0, 0, 0.08)" }
                  : {}
              }
            >
              <input
                type="text"
                placeholder="Entrez votre texte ici..."
                className={`${inter2.className} w-full h-full bg-transparent p-5 border-none outline-none text-black`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
