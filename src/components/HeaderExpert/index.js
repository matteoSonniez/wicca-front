"use client";
import { useEffect, useState } from "react";
import { Freehand, Poiret_One, Playfair_Display, Inter, Lato, Space_Grotesk } from 'next/font/google'
import Menu from "@/img/menu.png";
import ServicesBis from "@/components/HomeComp/ServicesBis";
import Flechebas from "@/img/icons/flechebas.png";
import Search from "@/img/chercher.png";
import PopUpAuth from "@/components/PopUp/Auth";
import { useRef } from "react";
import Link from "next/link";

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
    const [showAuthPopup, setShowAuthPopup] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    const openPopup = () => {
        setShowAuthPopup(true);
        setTimeout(() => setPopupVisible(true), 10);
    };
    const closePopup = () => {
        setPopupVisible(false);
        setTimeout(() => setShowAuthPopup(false), 300);
    };

    return (
        <div className="relative flex w-full items-center py-4 px-10">
            <div className="flex items-center gap-x-10">
                <Link href="/">
                    <span className={`${text_wicca.className} text-nuit text-[26px] cursor-pointer`}>wicca</span>
                </Link>
            </div>
            {/* <div className="absolute w-[68vw] left-1/2 top-4 -translate-x-1/2">
                <ServicesBis fromHome={false}/>
            </div> */}
            <div className={`flex space-x-8 items-center text-[15px] ${lato.className} ml-auto`}>
                <div
                    className="text-white bg-maincolor duration-100 cursor-pointer rounded-full px-4 py-2"
                    onClick={openPopup}
                >
                    <span className="">Me connecter</span>
                </div>
            </div>
            {showAuthPopup && (
                <PopUpAuth onClose={closePopup} visible={popupVisible} />
            )}
        </div>
    );
};

export default Index;
