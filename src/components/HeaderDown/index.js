"use client";
import { useEffect, useState } from "react";
import { Freehand, Poiret_One, Playfair_Display, Inter, Lato, Space_Grotesk } from 'next/font/google'
import Menu from "@/img/menu.png";
import Logo from "@/img/wiccalogo2.png";
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
        <div className="bg-white w-full flex justify-between items-center backdrop-blur-md py-4 px-10 border-b border-gray-300">
            <div className="flex items-center">
                <span className={`${text_wicca.className} text-maincolor/90 text-[26px]`}>wicca</span>
            </div>
            <div
                className={`${lato.className} z-50 bg-white/80 text-noir text-[14px] relative w-[50%] h-11 rounded-full border-[1px] border-gray-400 flex items-center pl-6 pr-2 shadow-sm`}
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Chercher un expert..."
                    className="w-full flex-1 focus:outline-none bg-transparent text-noir placeholder-noir/60"
                />
                <button className="h-9 w-9 bg-gray-800 rounded-full grid place-items-center">
                    <img src={Search.src} alt="Rechercher" className="w-5" />
                </button>
            </div>
            <div className={`flex space-x-8 text-noir/60 items-center text-[15px] ${lato.className}`}>
                <span className="cursor-pointer">Me connecter</span>
                <div className="border-[1px] border-noir/60 rounded-full px-4 py-2">
                    <span className="text-noir/60">Inscription</span>
                </div>
            </div>
        </div>
    );
};

export default Index;
