"use client";
import { useEffect, useState } from "react";
import { Freehand, Poiret_One, Playfair_Display, Inter, Lato } from 'next/font/google'
import Menu from "@/img/menu.png";
import Logo from "@/img/wiccalogo2.png";

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

    return (
        <div className="fixed z-50 w-full bg-white border-b-[1px] border-gray-300 px-[3vw] py-[2vh] justify-between flex items-center">
            <div className="flex items-center space-x-4">
                <img src={Menu.src} className="w-7 h-7 cursor-pointer"></img>
                <img src={Logo.src} className="w-24 cursor-pointer"></img>
            </div>
            <div className={`flex space-x-8 items-center text-[15px] ${lato.className}`}>
                <span className="text-black cursor-pointer">Me connecter</span>
                <div className="px-4 py-2 bg-maincolor rounded-xl text-white cursor-pointer">
                    <span>Inscription</span>
                </div>             
            </div>
        </div>
    );
};

export default Index;
