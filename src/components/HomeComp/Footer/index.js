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
import Fleche from "@/img/icons/flechebas.png";
import gsap from "gsap";
import { useRef } from "react";

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

const FAQCard = ({ question, answer, fontClass }) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (open) {
            gsap.to(contentRef.current, {
                height: contentRef.current.scrollHeight,
                opacity: 1,
                marginTop: 40, // mt-10
                marginBottom: 40, // mb-10
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    contentRef.current.style.height = "auto";
                },
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                marginTop: 0,
                marginBottom: 0,
                duration: 0.4,
                ease: "power2.inOut",
            });
        }
    }, [open]);

    return (
        <div
            ref={containerRef}
            onClick={() => setOpen((o) => !o)}
            style={{
                boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)",
                cursor: 'pointer',
                overflow: 'visible',
            }}
            className={`w-full rounded-lg bg-white flex flex-col px-10 justify-between py-5 relative`}
        >
            <div className="flex items-center justify-between py-4">
                <span className={`${fontClass} text-noir/80 text-[16px]`}>{question}</span>
                <img
                    src={Fleche.src}
                    className={`w-5 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    alt="Ouvrir la réponse"
                />
            </div>
            <div
                ref={contentRef}
                style={{
                    height: 0,
                    opacity: 0,
                    overflow: 'hidden',
                    marginTop: 0,
                    marginBottom: 0,
                }}
                className="text-noir/70 text-[15px]"
            >
                {answer}
            </div>
        </div>
    );
};

const Index = () => {
    return (
        <div className="flex w-screen justify-center mt-20 p-6">
            <div className="w-full bg-blackfooter rounded-lg flex flex-col p-20 justify-between">
                <div className="flex justify-between">
                    <div className="flex flex-col text-white/80 space-y-4">
                        <span className="text-texteclaire text-[14px] mb-3">Navigation</span>
                        <span className="text-[14px]">Comment ça marche</span>
                        <span className="text-[14px]">Questions fréquentes (FAQ)</span>
                        <span className="text-[14px]">Nos spécialités</span>
                        <span className="text-[14px]">Contact & assistance</span>
                    </div>
                    <div className="flex flex-col text-white/80 space-y-4">
                        <span className="text-texteclaire text-[14px] mb-3">Pour les professionnels</span>
                        <span className="text-[14px]">Devenir expert </span>
                        <span className="text-[14px]">Charte qualité des experts</span>
                        <span className="text-[14px]">Pourquoi rejoindre Wicca ?</span>
                        <span className="text-[14px]">Espace Pro (connexion / inscription)</span>
                    </div>
                    <div className="flex flex-col text-white/80 space-y-4">
                        <span className="text-texteclaire text-[14px] mb-3">Informations légales</span>
                        <span className="text-[14px]">Mentions légales</span>
                        <span className="text-[14px]">Conditions générales d’utilisation</span>
                        <span className="text-[14px]">Politique de confidentialité</span>
                        <span className="text-[14px]">Politique de cookies</span>
                    </div>
                    <div className="flex flex-col text-white/80 space-y-4">
                        <span className="text-texteclaire text-[14px] mb-3">Sécurité & confiance</span>
                        <span className="text-[14px]">Paiement 100 % sécurisé via Stripe</span>
                        <span className="text-[14px]">Experts sélectionnés et évalués</span>
                    </div>
                    <div className="flex flex-col text-white/80 space-y-4">
                        <span className="text-texteclaire text-[14px] mb-3">Contact support</span>
                        <span className="text-[14px]">contact@wicca.fr</span>
                        <span className="text-[14px]">lundi au vendredi, 9h30 – 19h</span>
                        <span className="text-[14px]">S’inscrire à la newsletter</span>
                    </div>
                </div>
                <div className="flex flex-col mt-20">
                    <div className="flex space-x-4">
                        <span className="text-texteclaire text-[14px]">Suivez-nous</span>
                        <span className="text-texteclaire text-[14px]">Tiktok</span>
                        <span className="text-texteclaire text-[14px]">Instagram</span>
                        <span className="text-texteclaire text-[14px]">Facebook</span>
                    </div>
                    <div className="w-full h-[0.5px] bg-gray-500 my-4" />
                    <span className="text-texteclaire text-[15px]">©️ 2025 Wicca — Tous droits réservés</span>
                </div>
            </div>
        </div>
    );
};

export default Index;
