"use client";
import Image from "next/image";
import { useState } from "react";
import HeaderRegister from "@/components/HeaderRegister";
import ImageAuth from "@/img/register.svg";
import ImageAuth2 from "@/img/register2.svg";
import {
    Freehand,
    Poiret_One,
    Playfair_Display,
    Inter,
    Montserrat
} from "next/font/google";
import { useRouter } from "next/navigation";

const mont = Montserrat({
    subsets: ["latin"],
    weight: ["600"],
    display: "swap",
});
const mont_low = Montserrat({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
});

function Page() {
    const router = useRouter();
    return (
        <div className="min-h-screen flex justify-center relative">
            <HeaderRegister />
            <div className="mt-[18vh] flex flex-col">
                <span className={`${mont.className} text-noir/80 text-[23px] mb-10`}>Quel type de compte souhaitez-vous créer ?</span>
                <div className="flex items-center space-x-10">
                    <div className="w-[340px] h-[340px] flex flex-col items-center justify-center bg-white rounded-xl border-[1px] hover:border-maincolor/50 transition-all duration-100 border-noir/10 cursor-pointer" onClick={() => router.push('/register/client')}>
                        <img src={ImageAuth2.src} alt="ImageAuth" className="w-[150px] h-[150px]" />
                        <span className={`${mont.className} text-noir/90 text-[20px] font-bold mt-5`}>Client</span>
                        <span className={`${mont_low.className} text-noir/80 text-[15px] font-bold mt-2`}>je cherche un expert</span>
                    </div>
                    <div className="w-[340px] h-[340px] flex flex-col items-center justify-center bg-white rounded-xl border-[1px] hover:border-maincolor/50 transition-all duration-100 border-noir/10 cursor-pointer" onClick={() => router.push('/register/expert')}>
                        <img src={ImageAuth.src} alt="ImageAuth2" className="w-[150px] h-[150px]" />
                        <span className={`${mont.className} text-noir/90 text-[20px] font-bold mt-5`}>Praticien</span>
                        <span className={`${mont_low.className} text-noir/80 text-[15px] font-bold mt-2`}>je suis un praticien</span>
                    </div>
                </div>
                <span className={`${mont_low.className} text-noir/80 text-[13px] mt-5`}>Vous avez deja un compte ? <span className="text-maincolor">Me connecter</span></span>
            </div>
        </div>
    );
}

export default Page;
