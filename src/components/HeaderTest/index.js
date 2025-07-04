"use client";
import { useEffect, useState } from "react";
import { Freehand, Poiret_One, Playfair_Display, Inter, Lato } from 'next/font/google'
import Menu from "@/img/menu.png";
import Logo from "@/img/wiccalogo2.png";
import Search from "@/img/chercher.png";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})

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
        <div className="bg-red-800/50 rounded-full w-full flex justify-between items-center backdrop-blur-md py-3 px-10">
            <div className="flex items-center">
                <span className="text-blanc text-[26px]">wicca</span>
            </div>
            {/* <div
                className={`${lato.className} z-50 bg-white/50 text-white text-[14px] relative w-[min(800px,90%)] h-12 rounded-full border-[1px] border-gray-400 flex items-center pl-6 pr-2 shadow-lg`}
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Chercher un expert..."
                    className="w-full focus:outline-none bg-transparent text-white placeholder-white"
                />
                <button className="h-10 w-10 bg-gray-800 rounded-full grid place-items-center">
                    <img src={Search.src} alt="Rechercher" className="w-5" />
                </button>
            </div> */}
            <div className={`flex space-x-8 text-white items-center text-[15px] ${lato.className}`}>
                <span className="cursor-pointer">Me connecter</span>
                <div className="border-[1px] border-white rounded-full px-4 py-2">
                    <span className="text-white">Inscription</span>
                </div>
            </div>
        </div>
    );
};

export default Index;
