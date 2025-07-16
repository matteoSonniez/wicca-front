"use client";
import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import Carto from "@/img/spe_icons/cartes.png";
import Carto_red from "@/img/spe_icons/carto_red.png";
import Voyance from "@/img/spe_icons/medium.png";
import Voyance_red from "@/img/spe_icons/voyance_red.png";
import Astro from "@/img/spe_icons/astrologie.png";
import AstroRed from "@/img/spe_icons/astrologie_red.png";
import Medium from "@/img/spe_icons/medium2.png";
import MediumRed from "@/img/spe_icons/medium_red.png";
import Tarologie from "@/img/spe_icons/taro.png";
import TarologieRed from "@/img/spe_icons/taro_red.png";
import Numero from "@/img/spe_icons/numerologie2.png";
import NumeroRed from "@/img/spe_icons/numerologie_red.png";
import { useRouter } from "next/navigation";


const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Card = ({ imgSrc, imgSrcHover, title }) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/specialties/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: title }),
      });
      const data = await response.json();
      // Supposons que l'id est dans data.id ou data[0].id
      // Affiche dans la console pour debug
      console.log(data[0]._id, "data");
      if (data[0]._id) {
        router.push("/experts?id=" + data[0]._id);
      }
    } catch (error) {
      console.error("Erreur lors de la recherche de la spécialité:", error);
    }
  };

  return (
    <div
      style={{
        boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)"
      }}
      className="cursor-pointer bg-white relative group w-[20%] aspect-[1/0.45] rounded-2xl  overflow-hidden shadow-sm text-noir/70 hover:text-maincolor"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div className="relative w-full h-full flex px-4 py-4 space-x-4 items-center">
        <img className="w-7 h-7 text-gray-700" src={hovered ? imgSrcHover : imgSrc} alt={title} />
        <span className={`${lato.className} text-[15px]`}>{title}</span>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="flex w-[100vw] px-[14vw] justify-center space-x-6">
      <Card imgSrc={Astro.src} imgSrcHover={AstroRed.src} title="Astrologie" />
      <Card imgSrc={Carto.src} imgSrcHover={Carto_red.src} title="Cartomancie" />
      <Card imgSrc={Numero.src} imgSrcHover={NumeroRed.src} title="Numérologie" />
      <Card imgSrc={Voyance.src} imgSrcHover={Voyance_red.src} title="Voyance" />
      <Card imgSrc={Medium.src} imgSrcHover={MediumRed.src} title="Médiumnité" />
      <Card imgSrc={Tarologie.src} imgSrcHover={TarologieRed.src} title="Tarologie" />
    </div>
  );
};

export default Index;
