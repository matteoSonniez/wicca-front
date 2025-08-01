"use client";
import { useEffect, useState } from "react";
import {
    Freehand,
    Poiret_One,
    Playfair_Display,
    Inter,
    Montserrat,
    Lato,
    Poppins,
} from "next/font/google";
import BlobImage from "@/img/blob-image.png";
import Blob1 from "@/img/blob-devenir-practicien.png";
import ImagePracticien from "@/img/becomepract.jpg";
import { motion } from "framer-motion";

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

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
});

const Index = () => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex w-screen justify-center mt-12 px-[8vw]"
        >
            <div className="w-full bg-becomepract rounded-xl flex flex-col items-center justify-center shadow-sm py-14">
                {/* <span className={`${mont.className} text-white text-[41px] text-center mb-2`}>Experts en arts divinatoires ? Gagnez en visibilité et en sérénité. Rejoignez Wicca.</span> */}
                <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`${poppins.className} text-white text-[36px] text-center mb-2`}
                >
                    Expert en arts divinatoires ? Gagnez en visibilité et en sérénité.
                </motion.span>
                <button className={`${mont_semi.className} text-[13px] bg-white shadow-sm px-4 py-2 w-auto rounded-lg mt-8 text-noir`}>Rejoignez Wicca</button>
            </div>
        </motion.div>
    );
};

export default Index;
