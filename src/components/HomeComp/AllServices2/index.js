"use client";
import { useEffect, useState, useRef } from "react";
import { Lato, Montserrat, Inter, Poppins } from "next/font/google";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
});

const Index = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 }); // 0.2 = 20% visible

    return (
        <div className="flex w-screen px-[8vw] mt-10 flex-col">
            <span className={`${poppins.className} text-becomepract text-[40px] text-start mb-2`}>
                Nos spécialités
            </span>
            <span className={`${mont.className} text-becomepract text-[16px] mb-10`}>Des pratiques ésotériques sélectionnées avec soin pour explorer, comprendre et agir sur les plans émotionnels, spirituels et personnels</span>
            <div ref={containerRef} className={`w-full h-[70vh] flex flex-col justify-between ${lato.className}`}>
                <div className="flex w-full h-[32%] justify-between">
                    <motion.div
                        className="group w-[50%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0 : 0 }}
                    >
                        <Image
                            src="/specialty/spe3.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        {/* Texte de base */}
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">Astrologie</span>
                        </div>
                        {/* Texte au hover */}
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[14px]">
                                Et si votre ciel de naissance vous parlait de vous ?
                                Bien plus qu’un horoscope, l’astrologie décrypte votre carte du ciel pour révéler vos forces, vos cycles de vie, vos compatibilités et vos défis personnels. Une boussole céleste pour mieux se comprendre et mieux décider.
                                À qui ça s’adresse ? À ceux qui veulent mettre du sens sur leur chemin et leurs émotions.
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="group w-[24%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0.15 : 0 }}
                    >
                        <Image
                            src="/specialty/spe8.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">tarologie</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[12px]">
                                Le tarot n’est pas magique, il est symbolique. Et c’est là tout son pouvoir.
                                La tarologie s’appuie sur des jeux comme le Tarot de Marseille pour vous guider avec des symboles riches et des archétypes puissants. Chaque lame révèle une facette de votre parcours de vie, de vos blocages à vos opportunités.
                                À qui ça s’adresse ? À ceux qui cherchent une guidance profonde, spirituelle et intuitive.
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="group w-[24%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0.3 : 0 }}
                    >
                        <Image
                            src="/specialty/spe.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">Numérologie</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[12px]">
                                Les chiffres ne mentent pas. Ils parlent de vous.
                                Basée sur votre prénom, votre nom et votre date de naissance, la numérologie dévoile les vibrations qui vous accompagnent : personnalité, missions de vie, cycles à venir… Un outil bluffant de clarté et d’alignement personnel.
                                À qui ça s’adresse ? À ceux qui veulent comprendre leurs schémas, leurs forces et leurs défis personnels.
                            </span>
                        </div>
                    </motion.div>
                </div>
                <div className="flex w-full h-[32%] justify-between">
                    <motion.div
                        className="group w-[29%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0.45 : 0 }}
                    >
                        <Image
                            src="/specialty/spe9.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">Médiumnité</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[12px]">
                                Quand l’invisible a un message pour vous.
                                Le médium capte des informations au-delà des cinq sens : ressentis, visions, messages… Il peut servir de canal avec des défunts, des guides ou des énergies subtiles. C’est une connexion avec l’invisible, toujours au service du vivant.
                                À qui ça s’adresse ? À ceux qui cherchent des réponses profondes, une paix intérieure ou un contact spirituel.
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="group w-[40%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0.6 : 0 }}
                    >
                        <Image
                            src="/specialty/spe5.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">cartomancie</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[14px]">
                                Lire entre les cartes, c’est lire entre les lignes de votre destin.
                                La cartomancie utilise les cartes classiques (comme le jeu de 32 ou 54 cartes) pour décrypter votre passé, comprendre votre présent et anticiper votre avenir. Une méthode directe, accessible et pleine de symboles familiers, parfaite pour des réponses concrètes à vos questions du moment.
                                À qui ça s’adresse ? À ceux qui veulent un éclairage rapide et précis sur une situation.

                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="group w-[29%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0.75 : 0 }}
                    >
                        <Image
                            src="/specialty/spe10.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">Voyance</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[12px]">
                                Des flashs, des visions, des ressentis… pour éclairer vos décisions.
                                La voyance est une perception intuitive et immédiate d’un avenir probable. Sans support ou avec boule, pendule ou oracle, le voyant capte des messages spontanés pour vous orienter dans vos choix et vos interrogations.
                                À qui ça s’adresse ? À ceux qui cherchent un éclairage rapide, direct et sans détour.
                            </span>
                        </div>
                    </motion.div>
                </div>
                <div className="flex w-full h-[32%] justify-between">
                    <motion.div
                        className="group w-[40%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 0.9 : 0 }}
                    >
                        <Image
                            src="/specialty/spe13.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">Magnétisme</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[13px]">
                                Libérez votre énergie, retrouvez votre équilibre.
                                Le magnétisme est une pratique énergétique naturelle qui vise à réharmoniser les flux du corps. Par apposition des mains (à distance ou en présentiel), le magnétiseur soulage tensions, douleurs, fatigue ou blocages émotionnels.
                                À qui ça s’adresse ? À celles et ceux qui ressentent un déséquilibre intérieur, physique ou mental, et souhaitent un mieux-être global.
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="group w-[40%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 1.05 : 0 }}
                    >
                        <Image
                            src="/specialty/spe11.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">Reiki</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[13px]">
                                L’énergie universelle au service de votre bien-être.
                                Le Reiki est une technique japonaise de soin énergétique douce, qui canalise l’énergie par imposition des mains. Elle apaise le mental, détend en profondeur, et stimule les capacités naturelles d’auto-guérison.
                                À qui ça s’adresse ? À celles et ceux qui veulent relâcher la pression, retrouver de la sérénité, ou s’ouvrir à une transformation intérieure.
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="group w-[18%] h-full bg-blue-500 rounded-2xl relative overflow-hidden cursor-pointer"
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isInView ? 1.2 : 0 }}
                    >
                        <Image
                            src="/specialty/spe12.webp"
                            alt="Portrait de l'expert"
                            fill
                            className="object-cover transition duration-300 brightness-[.8] group-hover:brightness-[.3]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                            <span className="text-white text-[24px] uppercase">autre</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-4 text-center">
                            <span className="text-white text-[12px]">
                                Wicca grandit, vos possibilités aussi.
                                Bientôt, découvrez de nouvelles approches spirituelles et énergétiques pour enrichir votre parcours.
                                Chaque pratique sera sélectionnée avec soin, pour vous offrir une expérience toujours plus complète et alignée.
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Index;
