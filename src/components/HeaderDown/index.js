"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Lato, Space_Grotesk } from 'next/font/google';
import Flechebas from "@/img/icons/flechebas.png";
import Burger from "@/img/icons/burger.png";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";

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

const SPECIALTIES = [
    'Astrologie',
    'Tarologie', 
    'Numérologie',
    'Médiumnité',
    'Cartomancie',
    'Voyance',
    'Magnétisme',
    'Reiki',
    'Autres'
];

const MENU_ITEMS = [
    'Accueil',
    'Spécialités', 
    'Experts',
    'Contact',
    'Connexion'
];

const Index = () => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState("");
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    
    const menuRef = useRef(null);
    const menuPanel = useRef(null);
    const burgerRef = useRef(null);


    // Animation d'apparition du menu
    useEffect(() => {
        if (showMenu && menuPanel.current) {
            gsap.fromTo(
                menuPanel.current, 
                { x: -300 }, 
                { x: 0, duration: 0.4, ease: 'power2.out' }
            );
        }
    }, [showMenu]);

    // Fermeture du menu burger si clic extérieur
    useEffect(() => {
        if (!openMenu) return;
        function handleClickOutside(event) {
            if (
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                setOpenMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);


    const renderSpecialtiesDropdown = () => (
        <div
            className="relative specialites-dropdown-container"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
        >
            <div className="flex items-center gap-x-2 text-noir/90 cursor-pointer">
                <span className={`${lato.className} text-[14px] hover:text-maincolor/90 transition-all duration-100`}>
                    Spécialités
                </span>
                <img
                    src={Flechebas.src}
                    alt="Flèche"
                    className={`w-2 transition-transform duration-200 ${openDropdown ? 'rotate-180' : ''}`}
                />
            </div>
            {openDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 pt-5">
                    <div className="grid grid-cols-3 gap-x-10 gap-y-3 bg-white border text-noir/70 border-gray-200 rounded-lg shadow-lg z-50 px-8 py-6 min-w-max w-auto max-w-xs">
                        {SPECIALTIES.map((specialty, index) => (
                            <span 
                                key={index}
                                className="text-[14px] hover:text-maincolor/90 transition-all duration-100 cursor-pointer"
                            >
                                {specialty}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className={`bg-blanc w-full flex z-50 justify-between items-center backdrop-blur-md py-3 px-10 transition-colors duration-300`}>
            <div className="flex items-center gap-x-8">
                <span className={`${text_wicca.className} text-noir/90 text-[26px]`}>
                    wicca
                </span>
                <SearchBar fromHeader={true} />
            </div>

         

            <div className={`flex space-x-8 text-noir/90 items-center text-[14px] ${lato.className}`}>
                {renderSpecialtiesDropdown()}
                <span className="cursor-pointer hover:text-maincolor/90 transition-all duration-100" onClick={() => router.push('/register')}>
                    Inscription
                </span>
                <div className="border  bg-maincolor text-blanc hover:border-maincolor/80 transition-all duration-100 cursor-pointer rounded-full px-4 py-2">
                    <span>Me connecter</span>
                </div>
                <div
                    className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10 relative"
                    ref={burgerRef}
                    onClick={() => setOpenMenu((prev) => !prev)}
                >
                    <img src={Burger.src} alt="Burger" className="w-5 h-5 cursor-pointer" />
                    {openMenu && (
                        <div className="absolute right-0 pt-5 top-full z-50">
                            <div className="grid grid-cols-1 gap-y-3 bg-white border text-noir/70 border-gray-200 rounded-lg shadow-lg px-8 py-6 min-w-max w-auto max-w-xs">
                                {MENU_ITEMS.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[14px] hover:text-maincolor/90 transition-all duration-100 cursor-pointer"
                                        onClick={() => { setOpenMenu(false); router.push(item === 'Accueil' ? '/' : `/${item.toLowerCase()}`); }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Index;
