"use client";
import Image from "next/image"; // Ajout du composant Next.js
import { Lato } from "next/font/google";
import Profile from "@/img/profile.jpg";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const experts = [
  ["/experts/portrait.webp", "/experts/portrait2.webp"],
  ["/experts/portrait3.webp", "/experts/portrait5.webp", "/experts/portrait8.webp"],
  ["/experts/portrait7.webp", "/experts/portrait6.webp"],
  [Profile.src, "/experts/portrait2.webp", "/experts/portrait3.webp"],
  ["/experts/portrait5.webp", "/experts/portrait3.webp"]
];

export default function Index() {
  return (
    <div className="flex flex-col mb-[6vh] space-y-6">
      {/* Titre éventuel */}
      {/* <div> 
        <span className={`${lato.className} text-[40px] text-white`}>Nos practitiens</span>
      </div> */}
      <div
        className="bg-white bg-opacity-100 w-[90vw] h-[80vh] rounded-xl flex justify-evenly"
        style={{ willChange: "transform" }} // Astuce GPU, optionnel
      >
        {experts.map((col, i) => (
          <div
            key={i}
            className="flex flex-col h-full w-[19%] justify-center space-y-2 overflow-hidden"
          >
            {col.map((src, j) => (
              <div
                key={j}
                className="flex-none h-[48%] w-full bg-black rounded-xl overflow-hidden brightness-75 hover:brightness-100 transition-all duration-300"
                style={{ willChange: "transform" }}
              >
                <Image
                  src={src}
                  alt={`Expert ${i}-${j}`}
                  className="object-cover h-full w-full"
                  fill // Utilise position absolute + object-fit
                  sizes="(max-width: 768px) 100vw, 20vw"
                  priority={i === 0 && j === 0} // 1ère image en priorité
                  placeholder="blur"
                  blurDataURL="/experts/placeholder.webp" // à créer si tu veux un blur
                  unoptimized={false} // Force l’optim si jamais bug
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
