"use client";
import { useEffect, useState } from "react";
import { Lato, Montserrat, Inter } from "next/font/google";
import Image from "next/image";
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

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const mont_semi = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const Card = ({ title }) => (
  <div className="flex justify-center items-center w-full h-24 border-[0.5px] border-noir/10 text-noir/70 cursor-pointer rounded-xl hover:bg-maincolor hover:text-white transition-all duration-300">
    <span className={`text-[16px]`}>
      {title}
    </span>
  </div>
);

const Title = ({ title, index, selectedTab, setSelectedTab }) => (
  <div
    onClick={() => setSelectedTab(index)}
    className={`
      px-4 py-6 flex border-b-[1px] border-noir/10 items-center justify-center uppercase cursor-pointer transition-all duration-200
      ${selectedTab === index ? "border-maincolor" : "border-noir/10"}
    `}
  >
    <span className={`
      ${mont.className} text-[16px] text-center
      ${selectedTab === index ? "text-maincolor" : "text-noir/60"}
    `}>
      {title}
    </span>
  </div>
);

const Index = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex flex-col w-screen mb-32 px-[10vw] items-end mt-28">
      <div className="flex items-center justify-center">
        <span className={`${mont_semi.className} text-[16px] text-maincolor/80 text-start uppercase tracking-[0.2em] mb-7`}>
          Tous nos services
        </span>
      </div>
      <div className="flex justify-between w-full">
        <div className="relative flex-1">
          <div className=" w-[220px] top-[40px] absolute rounded-3xl overflow-hidden aspect-[0.8/1]">
            <Image
              src="/experts/portrait-home9.jpg"
              alt="Portrait de l'expert"
              fill
              className="object-cover"
            />
          </div>
          <div className=" w-[220px] top-[200px] left-[140px] absolute rounded-3xl overflow-hidden aspect-[0.8/1]">
            <Image
              src="/experts/portrait-home8.jpg"
              alt="Portrait de l'expert"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Title title="Divination" index={0} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Title
              title={
                <>
                  Soins
                  Énergétiques
                </>
              }
              index={1}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <Title title="Guidance & Spiritualité" index={2} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Title title="Formation" index={3} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>
          <div className="grid grid-cols-4 w-full h-full mt-10 gap-x-8 gap-y-8">
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
            <Card title="Lithothérapie" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;
