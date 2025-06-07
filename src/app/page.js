"use client";
import Image from "next/image";
import gifHome from "@/img/giffinal.gif";
import { Ubuntu, Roboto_Condensed } from "next/font/google";
import { useState } from "react";

const roboto = Ubuntu({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});
const robotosmall = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  const [itForm, setItForm] = useState(false);
  const [itForm2, setItForm2] = useState(false);

  return (
    // Lorsque l'utilisateur clique sur cet élément (hors aubergine), itForm passe à false
    <div
      className="relative w-full min-h-screen overflow-x-hidden"
      onClick={() => (setItForm(false), setItForm2(false))}
    >
      {/* SVG en position absolue, ancré en haut à gauche, derrière le contenu (-z-10) */}
      {/* <div className="absolute top-0 left-0 -z-10 w-full h-auto opacity-60">
        <svg
          viewBox="0 0 900 600"
          preserveAspectRatio="xMinYMin meet"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(0, 0)">
            <path
              d="M405.6 0C364.4 52.8 323.1 105.7 294.4 170C265.8 234.3 249.8 310.1 202.8 351.3C155.8 392.5 77.9 399 0 405.6L0 0Z"
              fill="#A0006D"
            />
          </g>
        </svg>
      </div> */}

      {/* Contenu principal */}
      <div className="flex flex-col px-[7vw] mt-[140px]">
        <div className="flex justify-between items-center px-2">
          <div className="w-[40vw] flex flex-col space-y-12">
            <span
              className={`${roboto.className} text-blacktext text-[43px] leading-[3.5rem] scale-y-110 tracking-tighter`}
            >
              Explorez votre chemin
              <span className="text-aubergine opacity-80"> spirituel</span> avec
              des <span className="text-aubergine opacity-80">praticiens</span>{" "}
              & experts certifiés
            </span>
            <span
              className={`${robotosmall.className} text-[19px] text-gray-500`}
            >
              Trouvez votre chemin spirituel avec des praticiens certifiés
            </span>
          </div>

          <div className="w-[35vw] flex justify-center items-center">
            <img src={gifHome.src} className="w-full" alt="Gif Home" />
          </div>
        </div>

        <div className="w-[86vw] h-[15vh] rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white flex justify-center items-center border-gray-300 border-[1px]">
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
                className={`${robotosmall.className} w-full h-full bg-transparent p-5 border-none outline-none text-black`}
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
                className={`${robotosmall.className} w-full h-full bg-transparent p-5 border-none outline-none text-black`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
