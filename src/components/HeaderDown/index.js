"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Lato, Space_Grotesk } from 'next/font/google';
import Flechebas from "@/img/icons/flechebas.png";
import Search from "@/img/chercher.png";
import SearchBar from "@/components/SearchBar";

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
    'Tarot', 
    'Numérologie',
    'Médiumnité',
    'Cartomancie',
    'Voyance'
];

const MENU_ITEMS = [
    'Accueil',
    'Spécialités', 
    'Experts',
    'Contact',
    'Connexion'
];

const Index = () => {
    const [inputValue, setInputValue] = useState("");
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    
    const bar1 = useRef(null);
    const bar2 = useRef(null);
    const menuRef = useRef(null);
    const menuPanel = useRef(null);
    const menuButtonRef = useRef(null);

    // Gestion du menu hamburger
    useEffect(() => {
        const animateBars = () => {
            if (openMenu) {
                gsap.to(bar1.current, { rotate: 45, y: 5, duration: 0.3 });
                gsap.to(bar2.current, { rotate: -45, y: -5, duration: 0.3 });
            } else {
                gsap.to(bar1.current, { rotate: 0, y: 0, duration: 0.3 });
                gsap.to(bar2.current, { rotate: 0, y: 0, duration: 0.3 });
            }
        };

        const toggleBodyScroll = () => {
            document.body.style.overflow = openMenu ? 'hidden' : '';
        };

        animateBars();
        toggleBodyScroll();

        if (openMenu) {
            setShowMenu(true);
        } else if (menuPanel.current) {
            gsap.to(menuPanel.current, { 
                x: -300, 
                duration: 0.3, 
                ease: 'power2.in', 
                onComplete: () => setShowMenu(false) 
            });
        } else {
            setShowMenu(false);
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [openMenu]);

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

    // Fermeture du menu par clic extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isClickOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
            const isClickOutsideButton = menuButtonRef.current && !menuButtonRef.current.contains(event.target);
            
            if (openMenu && isClickOutsideMenu && isClickOutsideButton) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openMenu]);

    const toggleMenu = () => setOpenMenu(prev => !prev);

    const renderMenuButton = () => (
        <button
            ref={menuButtonRef}
            className="flex flex-col justify-center items-center w-8 h-8 z-50 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Ouvrir le menu"
        >
            <div
                ref={bar1}
                className="w-6 h-1 bg-noir rounded transition-all mb-1.5"
            />
            <div
                ref={bar2}
                className="w-6 h-1 bg-noir rounded transition-all"
            />
        </button>
    );

    const renderSearchBar = () => (
        <div className={`${lato.className} z-20 bg-white text-noir text-[14px] relative w-[630px] h-12 rounded-full flex items-center pl-6 pr-2`}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Chercher un expert..."
                className="w-full flex-1 focus:outline-none bg-transparent text-noir placeholder-noir/60"
            />
            <button className="h-9 w-9 bg-maincolor/80 rounded-full grid place-items-center">
                <img src={Search.src} alt="Rechercher" className="w-5" />
            </button>
        </div>
    );

    const renderSideMenu = () => (
        showMenu && (
            <div ref={menuRef} className="fixed top-0 left-0 w-full h-full z-40 flex">
                <div
                    ref={menuPanel}
                    className="bg-white shadow-lg w-64 h-full p-8 flex flex-col gap-6"
                    style={{ minHeight: '100vh' }}
                >
                    <span className="text-lg font-bold mb-4">Menu</span>
                    {MENU_ITEMS.map((item, index) => (
                        <span 
                            key={index}
                            className="cursor-pointer hover:text-maincolor/90 transition-colors duration-200"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        )
    );

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
                <div className="absolute left-0 pt-2">
                    <div className="flex flex-col gap-y-3 bg-white border text-noir/70 border-gray-200 rounded-lg shadow-lg z-50 px-8 py-6">
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
        <div className={`bg-blanc w-full flex justify-between items-center backdrop-blur-md py-4 px-10 transition-colors duration-300`}>
            <div className="flex items-center gap-x-4">
                {renderMenuButton()}
                <span className={`${text_wicca.className} text-maincolor/90 text-[26px]`}>
                    wicca
                </span>
                <SearchBar fromHeader={true} />
            </div>

            {/* Overlay sombre */}
            {showMenu && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black/60 z-30 transition-opacity duration-300"
                    style={{ pointerEvents: openMenu ? 'auto' : 'none' }}
                    onClick={() => setOpenMenu(false)}
                />
            )}

            {renderSideMenu()}

            <div className={`flex space-x-8 text-noir/90 items-center text-[15px] ${lato.className}`}>
                {renderSpecialtiesDropdown()}
                <span className="cursor-pointer hover:text-maincolor/90 transition-all duration-100">
                    Vous êtes praticien ?
                </span>
                <div className="border border-noir/60 hover:bg-maincolor hover:text-blanc hover:border-maincolor/80 transition-all duration-100 cursor-pointer rounded-full px-4 py-2">
                    <span>Me connecter</span>
                </div>
            </div>
        </div>
    );
};

export default Index;
