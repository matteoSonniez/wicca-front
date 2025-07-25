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
        <div className="flex  w-full justify-between items-center  py-4 px-10">
            <div className="flex items-center gap-x-10">
                <span className={`${text_wicca.className} text-nuit text-[26px]`}>wicca</span>
            </div>

            <div className={`flex space-x-8 items-center text-[15px] ${lato.className}`}>
                <div className="text-white bg-maincolor  duration-100 cursor-pointer rounded-full px-4 py-2">
                    <span className="">Me connecter</span>
                </div>
            </div>
        </div>
    );
};

export default Index;
