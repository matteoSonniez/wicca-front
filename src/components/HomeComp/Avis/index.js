"use client";
import { Lato, Montserrat, Inter, Poppins } from "next/font/google";
import Image from "next/image";
import Stars from "@/img/icons/stars.png";
import Logo from "@/img/balance.png";
import Logo2 from "@/img/spe_icons/cartes.png";
import Logo3 from "@/img/esprit.png";
import Logo4 from "@/img/spe_icons/medium.png";
import Logo5 from "@/img/numerologie.png";
import Background from "@/img/traitbg4.png";


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

const Card = ({ imgSrc, title, description, name, date, logo }) => (
    <div className="cursor-pointer bg-white relative flex flex-col justify-between aspect-[1/0.8] rounded-2xl shadow-sm px-8 py-8 border border-noir/10 w-full">
        <div className="flex flex-col space-y-6">
            <div className="relative flex space-x-4 items-center">
                <img className="w-5 h-5 text-gray-700" src={logo} />
                <span className={`${mont_semi.className} text-noir/70 text-[12px] uppercase`}>{title}</span>
            </div>
            <div className="flex flex-col space-y-2">
                <span className={`${mont_semi.className} text-noir/90 text-[13px]`}>{description}</span>
                <img className="w-16 " src={Stars.src} />
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-1">
                <span className={`${mont_semi.className} text-noir/70 text-[12px]`}>{name}</span>
                <span className={`${mont_semi.className} text-noir/70 text-[12px]`}>{date}</span>
            </div>
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                    src={imgSrc}
                    alt="Portrait de l'expert"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    </div>
);

const Index = () => {
    const cardsData = [
        { imgSrc: "/experts/home3.webp", title: "astrologue", description: "Haris came in and helped us transfer ur true knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional.", name: "John Doe", date: "21 Mars 2025", logo: Logo.src },
        { imgSrc: "/experts/home2.webp", title: "cartomancien", description: "Haris came in and helped us transfer ur true knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional.", name: "John Doe", date: "21 Mars 2025", logo: Logo2.src },
        { imgSrc: "/experts/home.webp", title: "numérologue", description: "Haris came in and helped us transfer ur true knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional.", name: "John Doe", date: "21 Mars 2025", logo: Logo3.src },
        { imgSrc: "/experts/home2.webp", title: "tarologue", description: "Haris came in and helped us transfer ur true knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional.", name: "John Doe", date: "21 Mars 2025", logo: Logo4.src },
        { imgSrc: "/experts/home3.webp", title: "medium", description: "Haris came in and helped us transfer ur true knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional.", name: "John Doe", date: "21 Mars 2025", logo: Logo5.src },
        { imgSrc: "/experts/home.webp", title: "astrologue", description: "Haris came in and helped us transfer ur true knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional.", name: "John Doe", date: "21 Mars 2025", logo: Logo.src },
    ];

    return (
        <div className="flex flex-col relative w-screen px-[8vw] mt-10">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image src={Background.src} alt="Background" fill className=" w-full" />
            </div>
            <span className={`${poppins.className} text-becomepract text-[42px] mb-7`}>Avis de nos clients</span>
            {/* <span className={`${mont_semi.className} text-[16px] text-maincolor/80 text-start uppercase tracking-[0.2em] mb-7`}>Avis de nos clients</span> */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {cardsData.map((card, i) => (
                    <Card key={i} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Index;
