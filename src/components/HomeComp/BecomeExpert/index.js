"use client";
import { useEffect, useState } from "react";
import {
    Freehand,
    Poiret_One,
    Playfair_Display,
    Inter,
    Montserrat,
    Lato,
} from "next/font/google";
import BlobImage from "@/img/blob-image.png";
import Blob1 from "@/img/blob-devenir-practicien.png";
import ImagePracticien from "@/img/becomepract.jpg";

const latosmall = Lato({
    subsets: ["latin"],
    weight: ["300"],
    display: "swap",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const mont = Montserrat({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const mont_semi = Montserrat({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
});

const mont_bold = Montserrat({
    subsets: ["latin"],
    weight: ["600"],
    display: "swap",
});

const lato_bold = Lato({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
});

const Index = () => {
    return (
        <div className="flex w-screen justify-center mt-12 px-[8vw]">
            <div className="w-full bg-green rounded-xl flex flex-col items-center justify-center shadow-sm pt-12 pb-12">
                <span className={`${mont.className} text-white text-[56px] mb-2`}>Devenir praticien avec wicca right now</span>
                <button className={`${mont_semi.className} text-[15px] bg-white shadow-sm px-4 py-2 w-auto rounded-lg mt-8 text-noir`}>Nous rejoindre</button>
            </div>
        </div>
    );
};

export default Index;
