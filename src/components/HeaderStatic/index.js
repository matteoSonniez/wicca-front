"use client";
import { useEffect, useState } from "react";
import { Freehand, Poiret_One, Playfair_Display, Inter, Lato, Space_Grotesk } from 'next/font/google'
import Menu from "@/img/menu.png";
import Flechebas from "@/img/icons/flechebas.png";
import Search from "@/img/chercher.png";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})

const text_wicca = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['300'],
    display: 'swap',
})
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['900'],
    display: 'swap',
})

const playfair2 = Playfair_Display({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})



const Index = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center  py-4 px-10">
            <div className="flex items-center gap-x-10">
                <span className={`${text_wicca.className} text-white text-[26px]`}>wicca</span>
                {/* <div
                    className={`${lato.className} z-50 bg-gris text-noir text-[14px] relative w-[430px] h-12 rounded-full flex items-center pl-6 pr-2`}
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Chercher un expert..."
                        className="w-full flex-1 focus:outline-none bg-transparent text-noir placeholder-noir/60"
                    />
                    <button className="h-9 w-9 bg-maincolor/80 rounded-full grid place-items-center">
                        <img src={Search.src} alt="Rechercher" className="w-5" />
                    </button>
                </div> */}
            </div>
            {/* <div className="flex items-center gap-x-10 text-noir/90">
                <div className="flex items-center gap-x-10">
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <span className={`${lato.className} text-[14px]`}>Cartomancie</span>
                        <img src={Flechebas.src} alt="Flechebas" className="w-2" />
                    </div>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <span className={`${lato.className} text-[14px]`}>Tarologie</span>
                        <img src={Flechebas.src} alt="Flechebas" className="w-2" />
                    </div>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <span className={`${lato.className} text-[14px]`}>Astrologie</span>
                        <img src={Flechebas.src} alt="Flechebas" className="w-2" />
                    </div>
                    <div className="flex items-center gap-x-2 cursor-pointer">
                        <span className={`${lato.className} text-[14px]`}>Autre spécialités</span>
                        <img src={Flechebas.src} alt="Flechebas" className="w-2" />
                    </div>
                </div>
            </div> */}

            <div className={`flex space-x-8 items-center text-[15px] ${lato.className}`}>
                <span className="cursor-pointer text-white">Inscription</span>
                <div className="text-noir/80 bg-white hover:bg-maincolor/90 duration-100 cursor-pointer rounded-full px-4 py-2">
                    <span className="">Me connecter</span>
                </div>
            </div>
        </div>
    );
};

export default Index;
