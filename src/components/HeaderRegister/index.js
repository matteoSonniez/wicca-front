"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Lato, Space_Grotesk } from 'next/font/google';
import PopUpAuth from "@/components/PopUp/Auth";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const text_wicca = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
});



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
        <>
            <div className={`bg-blanc fixed top-0 left-0 shadow-md w-full flex justify-between items-center backdrop-blur-md py-4 px-10 transition-colors duration-300`}>
                <div className="flex items-center gap-x-4">
                    <span className={`${text_wicca.className} text-maincolor/90 text-[26px]`}>
                        wicca
                    </span>
                </div>

                <div className={`flex space-x-8 text-noir/90 items-center text-[15px] ${lato.className}`}>
                    <div
                        className="border border-noir/60 hover:bg-maincolor hover:text-blanc hover:border-maincolor/80 transition-all duration-100 cursor-pointer rounded-full px-4 py-2"
                        onClick={openPopup}
                    >
                        <span>Me connecter</span>
                    </div>
                </div>
            </div>
            {showAuthPopup && (
                <PopUpAuth onClose={closePopup} visible={popupVisible} />
            )}
        </>
    );
};

export default Index;
