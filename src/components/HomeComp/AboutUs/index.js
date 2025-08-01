"use client";
import { useRef } from "react";
import { Lato, Inter, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RoundBg from "@/img/roundbg7.png";
import Man from "@/img/manhold.png";
import Mokup2 from "@/img/becomepract.webp";
import Mokup from "@/img/mokup3.webp";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat_bold = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const Index = () => {
  // Framer Motion + Intersection Observer
  const [text1Ref, text1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [text2Ref, text2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [img1Ref, img1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [img2Ref, img2InView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="flex flex-col relative h-auto px-[8vw] mt-40 items-center justify-between gap-y-28">
      <div className="flex items-center justify-between">
        <div className="flex flex-col w-[45%] space-y-6">
          <span className=" uppercase text-maincolor/80 tracking-[0.2em] text-[18px] mb-5">
            À propos
          </span>

          <motion.span
            ref={text1Ref}
            initial={{ opacity: 0, translateY: 40 }}
            animate={text1InView ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "linear" }}
            style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
            className={`${montserrat.className} text-becomepract text-[18px]`}
          >
            Il y a des questions que l’on ne confie pas à n’importe qui. Des moments de vie où l’on cherche plus qu’un simple conseil : une écoute vraie, un regard éclairé, un espace sûr pour avancer.
            Wicca est née de cette conviction : repenser la manière dont on accède aux arts divinatoires. Une plateforme à la fois moderne et profondément humaine, où chaque spécialité est expliquée, chaque expert est certifié, et chaque consultation devient une expérience de clarté.
          </motion.span>
        </div>
        <motion.div
          ref={img1Ref}
          initial={{ opacity: 0, translateX: 60 }}
          animate={img1InView ? { opacity: 1, translateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "linear" }}
          style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
          className="w-[47%] h-[44vh] relative rounded-2xl overflow-hidden"
        >
          <Image src={Mokup.src} alt="Mokup" fill className="object-cover" />
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        <motion.div
          ref={img2Ref}
          initial={{ opacity: 0, translateX: -60 }}
          animate={img2InView ? { opacity: 1, translateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "linear" }}
          style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
          className="w-[47%] h-[40vh] relative rounded-2xl overflow-hidden"
        >
          <Image src={Mokup2.src} alt="Mokup" fill className="object-cover" />
        </motion.div>
        <div className="flex flex-col w-[45%] space-y-6">
          <motion.span
            ref={text2Ref}
            initial={{ opacity: 0, translateY: 40 }}
            animate={text2InView ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "linear" }}
            style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
            className={`${montserrat.className} text-becomepract text-[18px]`}
          >
            Ici, pas de jargon, pas de promesses floues. Juste des réponses, des rendez-vous simples à réserver, et des pratiques ésotériques valorisées comme elles le méritent.
            Wicca, c’est une nouvelle manière de consulter. Respectueuse, accessible, exigeante. Pour celles et ceux qui cherchent un vrai mieux-être, et ceux qui les accompagnent avec cœur et savoir-faire.
          </motion.span>
        </div>
      </div>
      
    </div>
  );
};

export default Index;
