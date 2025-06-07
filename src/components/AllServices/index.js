"use client";
import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import Logo from "@/img/balance.png";
import Logo2 from "@/img/cartes.png";
import Logo3 from "@/img/esprit.png";
import Logo4 from "@/img/medium.png";
import Logo5 from "@/img/numerologie.png";

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

const Index = () => {
  return (
    <div className="flex w-screen justify-center mb-[6vh]">
      <div className="w-[83vw] relative h-[70vh] rounded-xl overflow-hidden flex">
        {/* Vidéo de fond */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="/video/video-home2.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Calque dégradé démarrant plus tôt */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 85%)",
          }}
        />

        {/* Contenu au-dessus */}
        <div className="w-[55%] h-full z-50 flex flex-col items-start absolute right-10">
          <div className="flex w-[100%] mt-[5%] justify-between">
            <div className="bg-maincolor px-6 py-1 flex items-center justify-center rounded-lg">
              <span className={`${lato.className} text-white text-[16px]`}>
                Divination
              </span>
            </div>
            <div className="bg-maincolor px-6 flex items-center justify-center rounded-lg">
              <span className={`${lato.className} text-white text-[16px]`}>
                Soins Énergétiques
              </span>
            </div>
            <div className="bg-maincolor px-6 flex items-center justify-center rounded-lg">
              <span className={`${lato.className} text-white text-[16px]`}>
                Guidance & Spiritualité
              </span>
            </div>
            <div className="bg-maincolor px-6 flex items-center justify-center rounded-lg">
              <span className={`${lato.className} text-white text-[16px]`}>
                Formation
              </span>
            </div>
          </div>
          <div className="flex flex-wrap content-start w-full h-full mt-[10%] gap-x-4 gap-y-6">
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato.className} border-[1px] border-white w-[18%] h-[13%] text-white text-[15px] rounded-lg`}>Lithothérapie</button>
            {/* <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Magnétisme </button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Harmonisation des chakras</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Reiki</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Magnétisme</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Magnétisme</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Lithothérapie</button>
            <button className={`${lato_bold.className} bg-grisbeige w-[18%] h-[13%] text-gray-700 text-[15px] rounded-lg`}>Magnétisme</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
