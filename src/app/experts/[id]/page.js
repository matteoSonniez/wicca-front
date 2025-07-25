"use client";
import Image from "next/image";
import Header from "@/components/HeaderDown";
import Loca from "@/img/icons/loca-red.png";
import Visio from "@/img/icons/camera-red.png";
import PriseRdv from "@/components/PopUp/Auth";
import {
    Montserrat
} from "next/font/google";
import { useRouter, useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

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
    const params = useParams();
    const { id } = params;
    const [expert, setExpert] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lieu, setLieu] = useState("cabinet"); // State for lieu selection
    const [selectedSpecialty, setSelectedSpecialty] = useState("");
    const [selectedSpecialtyName, setSelectedSpecialtyName] = useState("");
    const [duree, setDuree] = useState(60);
    const stickyRef = useRef(null);
    const buttonRef = useRef(null);
    const presentationRef = useRef(null);
    const infosRef = useRef(null);
    const avisRef = useRef(null);
    const [activeSection, setActiveSection] = useState("presentation");
    const [showPriseRdv, setShowPriseRdv] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetch(`http://localhost:8000/api/experts/get-one/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Erreur lors de la récupération de l'expert");
                return res.json();
            })
            .then(data => {
                setExpert(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        function handleScroll() {
            if (!presentationRef.current || !infosRef.current || !avisRef.current || !buttonRef.current) return;

            const buttonBottom = buttonRef.current.getBoundingClientRect().bottom;

            // On récupère le bottom de chaque section par rapport au viewport
            const presBottom = presentationRef.current.getBoundingClientRect().bottom;
            const infosBottom = infosRef.current.getBoundingClientRect().bottom;
            const avisBottom = avisRef.current.getBoundingClientRect().bottom;

            // Si le bas de la section est au-dessus du bas du bouton, on passe à la suivante
            if (presBottom > buttonBottom) {
                if (activeSection !== "presentation") setActiveSection("presentation");
            } else if (infosBottom > buttonBottom) {
                if (activeSection !== "infos") setActiveSection("infos");
            } else {
                if (activeSection !== "avis") setActiveSection("avis");
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Appel initial pour l'état au chargement
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    // useEffect(() => {
    //     if (loading || !expert || !stickyRef.current) return;

    //     // Nettoie les triggers précédents pour éviter les bugs en dev
    //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    //     gsap.fromTo(
    //         stickyRef.current,
    //         {
    //             paddingBottom: 80,
    //         },
    //         {
    //             paddingBottom: 40,
    //             ease: "power2.out",
    //             scrollTrigger: {
    //                 trigger: stickyRef.current,
    //                 start: "top top",
    //                 end: "+=200", // Ajuste la distance de scroll selon l'effet voulu
    //                 scrub: true,
    //                 // markers: true, // pour debug
    //             }
    //         }
    //     );
    // }, [loading, expert]);

    function scrollToSection(sectionRef) {
        if (!sectionRef.current || !buttonRef.current || !stickyRef.current) return;

        // Position du sticky par rapport au viewport
        const stickyRect = stickyRef.current.getBoundingClientRect();
        // Si stickyRect.top > 0, il n'est pas encore collé
        const stickyOffset = Math.max(0, stickyRect.top);

        // Position du haut de la section par rapport au document
        const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
        // Position du bas de la barre de boutons (toujours sticky)
        const buttonBottom = buttonRef.current.getBoundingClientRect().bottom + window.scrollY;

        // Calcul du scroll cible : on ajoute le stickyOffset pour compenser le manque de scroll
        const scrollTarget = sectionTop - (buttonBottom - window.scrollY) + stickyOffset;

        gsap.to(window, {
            scrollTo: { y: scrollTarget, autoKill: false },
            duration: 1,
            ease: "power2.out"
        });
    }

    return (
        <div className=" flex flex-col relative">
            <Header />
            {loading ? (
                <div>Chargement...</div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : expert ? (
                <div className="flex flex-col">
                    <div ref={stickyRef} className="w-full bg-blanc flex shadow-md pt-[80px] pl-[10vw] sticky -top-[40px] z-20 relative">
                        <div className="flex flex-col space-y-10">
                            <div className="flex items-center space-x-20">
                                <div className="flex items-center justify-center relative w-[180px] h-[230px] rounded-xl overflow-hidden">
                                    <Image src="/experts/portrait-home.jpg" fill alt="Expert" className="object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className={`${mont.className} text-[30px] font-bold mb-2 text-nuit/90 first-letter:uppercase`}>{expert.firstName} {expert.lastName}</h1>
                                    {expert.specialties && expert.specialties.length > 0 && (
                                        <div className="mt-4 flex gap-x-2">
                                            {expert.specialties.map((spe) => (
                                                <div className="bg-nuit/10 rounded-full px-4 py-2" key={spe._id || (spe.specialty && spe.specialty._id)}>
                                                    <span className={`${mont_low.className} text-nuit/90 text-[13px]`}>{spe.specialty.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex items-center space-x-2 mt-5">
                                        <img src={Loca.src} alt="Loca" className="w-[15px] h-[15px]" />
                                        <p className="text-nuit/80 text-[15px]">Cabinet à {expert.adressrdv}</p>
                                    </div>
                                    <div className="flex items-end space-x-2 mt-5">
                                        <img src={Visio.src} alt="Visio" className="w-[17px] h-[17px]" />
                                        <span className="text-nuit/80 text-[15px]">A distance ou sur place</span>
                                    </div>
                                </div>
                            </div>
                            <div ref={buttonRef} className=" w-full h-[60px] flex items-end bg-blanc">
                                <button
                                    className={`text-[14px] ${activeSection === "presentation" ? mont_low.className + " text-maincolor" : mont.className + " text-nuit/90"} relative pb-4 px-5`}
                                    onClick={() => scrollToSection(presentationRef)}
                                >
                                    PRÉSENTATION
                                    <span
                                        className={`absolute left-0 bottom-0 w-full h-[2px] rounded transition-all duration-200 ${activeSection === "presentation" ? "bg-maincolor" : "bg-white"}`}
                                    ></span>
                                </button>
                                <button
                                    className={`text-[14px] ${activeSection === "infos" ? mont_low.className + " text-maincolor" : mont.className + " text-nuit/90"} relative pb-4 px-5`}
                                    onClick={() => scrollToSection(infosRef)}
                                >
                                    INFORMATIONS PRATIQUES
                                    <span
                                        className={`absolute left-0 bottom-0 w-full h-[2px] rounded transition-all duration-200 ${activeSection === "infos" ? "bg-maincolor" : "bg-white"}`}
                                    ></span>
                                </button>
                                <button
                                    className={`text-[14px] ${activeSection === "avis" ? mont_low.className + " text-maincolor" : mont.className + " text-nuit/90"} relative pb-4 px-5`}
                                    onClick={() => scrollToSection(avisRef)}
                                >
                                    AVIS ET RECOMMANDATIONS
                                    <span
                                        className={`absolute left-0 bottom-0 w-full h-[2px] rounded transition-all duration-200 ${activeSection === "avis" ? "bg-maincolor" : "bg-white"}`}
                                    ></span>
                                </button>
                            </div>
                        </div>
                        {/* <div className="absolute bottom-0 left-0 pl-[10vw] w-full h-[60px] flex items-end bg-blanc z-30" style={{ width: "calc(100% - 540px)" }}>
                            <button className={`text-[14px] ${mont_low.className} text-maincolor relative pb-2 px-5`}>
                                PRÉSENTATION
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-maincolor rounded"></span>
                            </button>
                            <button className={`text-[14px] ${mont.className} text-nuit/90 pb-2 px-5`}>INFORMATIONS PRATIQUES</button>
                            <button className={`text-[14px] ${mont.className} text-nuit/90 pb-2 px-5`}>AVIS ET RECOMMANDATIONS</button>
                        </div> */}
                        <div className="flex absolute right-[60px] bottom-[-20px] translate-y-1/2 flex-col bg-white rounded-xl overflow-hidden w-[440px] shadow-sm">
                            <div className="flex w-full bg-becomepract text-blanc justify-center items-center py-6">
                                <h1 className={`${mont.className} text-[25px] first-letter:uppercase`}>prendre rendez-vous</h1>
                            </div>
                            <div className="flex-1 flex-col p-6">
                                <span className={`${mont_low.className} text-nuit/80 text-[16px]`}>1 Lieu de la consultation </span>
                                <LieuDropdown
                                    value={lieu}
                                    onChange={setLieu}
                                    adresse={expert?.adressrdv}
                                />
                                <span className={`${mont_low.className} text-nuit/80 text-[16px]`}>2 Type de consultation </span>
                                <TypeDropdown
                                    value={selectedSpecialty}
                                    onChange={setSelectedSpecialty}
                                    onChangeName={setSelectedSpecialtyName}
                                    specialties={expert?.specialties}
                                />
                                <span className={`${mont_low.className} text-nuit/80 text-[16px]`}>3 Durée de la consultation </span>
                                <DureeDropdown
                                    value={duree}
                                    onChange={setDuree}
                                />
                                <CalendarSlots
                                    expertId={expert._id}
                                    lieu={lieu}
                                    specialty={selectedSpecialty}
                                    duree={duree}
                                    onSlotClick={(slot) => {
                                        console.log("Clic sur créneau", slot);
                                        setSelectedSlot(slot);
                                        setShowPriseRdv(true);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-[10vw] gap-y-10 mt-10 mb-10" style={{ width: "calc(100% - 440px)" }}>
                        <section ref={presentationRef} id="presentation" className="flex-1 flex-col">
                            <h1 className={`${mont.className} text-[23px] font-bold mb-2 text-nuit/90 first-letter:uppercase`}>présentation</h1>
                            <span className="text-nuit/80 text-[16px]">Je suis Chloé, voyant médium et guide spirituel depuis plus de [nombre] ans.
                                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière aux énergies et
                                aux vibrations qui nous entourent. Grâce à mes dons innés et à mon expérience,
                                je suis ici pour vous aider à éclaircir votre chemin de vie et à trouver des réponses à vos
                                questions les plus profondes.</span>
                            <span className="text-nuit/80 text-[16px]">Je suis Chloé, voyant médium et guide spirituel depuis plus de [nombre] ans.
                                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière aux énergies et
                                aux vibrations qui nous entourent. Grâce à mes dons innés et à mon expérience,
                                je suis ici pour vous aider à éclaircir votre chemin de vie et à trouver des réponses à vos
                                questions les plus profondes.</span>
                            <span className="text-nuit/80 text-[16px]">Je suis Chloé, voyant médium et guide spirituel depuis plus de [nombre] ans.
                                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière aux énergies et
                                aux vibrations qui nous entourent. Grâce à mes dons innés et à mon expérience,
                                je suis ici pour vous aider à éclaircir votre chemin de vie et à trouver des réponses à vos
                                questions les plus profondes.</span>
                            <span className="text-nuit/80 text-[16px]">Je suis Chloé, voyant médium et guide spirituel depuis plus de [nombre] ans.
                                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière aux énergies et
                                aux vibrations qui nous entourent. Grâce à mes dons innés et à mon expérience,
                                je suis ici pour vous aider à éclaircir votre chemin de vie et à trouver des réponses à vos
                                questions les plus profondes.</span>
                        </section>
                        <section ref={infosRef} id="infos" className="flex-1 flex-col">
                            <h1 className={`${mont.className} text-[23px] font-bold mb-2 text-nuit/90 first-letter:uppercase`}>Informations pratique</h1>
                            <span className="text-nuit/80 text-[16px]">Je suis Chloé, voyant médium et guide spirituel depuis plus de [nombre] ans.
                                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière aux énergies et
                                aux vibrations qui nous entourent. Grâce à mes dons innés et à mon expérience,
                                je suis ici pour vous aider à éclaircir votre chemin de vie et à trouver des réponses à vos
                                questions les plus profondes.</span>
                            <span className="text-nuit/80 text-[16px]">Je suis Chloé, voyant médium et guide spirituel depuis plus de [nombre] ans.
                                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière aux énergies et
                                aux vibrations qui nous entourent. Grâce à mes dons innés et à mon expérience,
                                je suis ici pour vous aider à éclaircir votre chemin de vie et à trouver des réponses à vos
                                questions les plus profondes.</span>
                        </section>
                        <section ref={avisRef} id="avis" className="flex-1 flex-col">
                            <h1 className={`${mont.className} text-[23px] font-bold mb-2 text-nuit/90 first-letter:uppercase`}>Avis et recommandations</h1>
                            <span className="text-nuit/80 text-[16px]">Je suis Chloé, voyant médium et guide spirituel depuis plus de [nombre] ans.
                                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière aux énergies et
                                aux vibrations qui nous entourent. Grâce à mes dons innés et à mon expérience,
                                je suis ici pour vous aider à éclaircir votre chemin de vie et à trouver des réponses à vos
                                questions les plus profondes.</span>
                            <span className="text-nuit/80 text-[16px]">Je suis Chloé, voyant médium et guide spirituel depuis plus de [nombre] ans.
                                Depuis mon plus jeune âge, j'ai développé une sensibilité particulière aux énergies et
                                aux vibrations qui nous entourent. Grâce à mes dons innés et à mon expérience,
                                je suis ici pour vous aider à éclaircir votre chemin de vie et à trouver des réponses à vos
                                questions les plus profondes.</span>
                        </section>
                        <div className="w-full h-[400px]">
                        </div>
                    </div>
                    {showPriseRdv && (
                        <>
                            {console.log("POPUP DOIT S'AFFICHER", selectedSlot)}
                            <PriseRdv
                                expert={expert}
                                slot={selectedSlot}
                                duree={duree}
                                specialty={selectedSpecialtyName}
                                specialtyId={selectedSpecialty}
                                onClose={() => setShowPriseRdv(false)}
                                visible={showPriseRdv}
                            />
                        </>
                    )}
                </div>
            ) : (
                <div>Aucun expert trouvé.</div>
            )}
        </div>
    );
}

// Ajout du composant CalendarSlots
function CalendarSlots({ expertId, lieu, specialty, duree, onSlotClick }) {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const nbDays = 5; // Afficher seulement 4 jours
    const maxRows = 3;
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (!expertId || !duree) return;
        setLoading(true);
        fetch(`http://localhost:8000/api/calendar/availabilities/${expertId}?duration=${duree}`)
            .then(res => {
                if (!res.ok) throw new Error("Erreur lors de la récupération des créneaux disponibles");
                return res.json();
            })
            .then(data => {
                setSlots(data.availabilities || []);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [expertId, duree]);

    // Formatage des dates pour l'affichage
    function formatDay(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR', { weekday: 'short' });
    }
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
    }
    // On prend les nbDays premiers jours
    const days = slots.slice(0, nbDays);
    return (
        <div className="w-full flex flex-col items-center mt-6">
            {loading ? <div>Chargement des créneaux...</div> : error ? <div className="text-red-500">{error}</div> : (
                <div className="w-full flex flex-col items-center">
                    <div className={`flex w-full justify-center items-start gap-4 ${mont_low.className}`}>
                        {days.map((day, idx) => (
                            <div key={idx} className="flex flex-col items-center w-full max-w-[180px] flex-1">
                                <div className="text-[16px] font-semibold text-nuit/90 text-center" style={{ textTransform: 'capitalize' }}>
                                    {formatDay(day.date)}.<br />
                                    <span className="text-[14px] font-normal">{formatDate(day.date)}</span>
                                </div>
                                {/* Créneaux horaires */}
                                {(showAll ? day.slots : day.slots.slice(0, maxRows)).map((slot, rowIdx) => (
                                    <div
                                        key={rowIdx}
                                        className="w-full flex items-center justify-center mt-3 rounded-xl border border-maincolor/20 hover:bg-maincolor/20 cursor-pointer bg-maincolor/5 text-nuit/90 text-[15px] p-2"
                                        onClick={() => onSlotClick && onSlotClick({ ...slot, date: day.date })}
                                    >
                                        {slot.start}
                                    </div>
                                ))}
                                {/* Cases vides si pas assez de créneaux et qu'on n'est pas en mode showAll */}
                                {!showAll && day.slots.length < maxRows && Array.from({ length: maxRows - day.slots.length }).map((_, i) => (
                                    <div key={`empty-${i}`} className="w-full h-[48px] flex items-center justify-center mt-3 rounded-xl border border-gray-300 bg-white text-gray-400"></div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <button
                        className={`mt-8 text-[16px] text-maincolor ${mont_low.className} underline underline-offset-2 hover:text-maincolor/80`}
                        onClick={() => setShowAll(v => !v)}
                    >
                        {showAll ? 'Voir moins' : "Voir plus de disponibilités"}
                    </button>
                </div>
            )}
        </div>
    );
}

function LieuDropdown({ value, onChange, adresse }) {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // Fermer le menu si on clique en dehors
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const options = [
        { value: "cabinet", label: adresse || "Adresse du praticien" },
        { value: "visio", label: "À distance" }
    ];

    return (
        <div ref={ref} className="relative w-full mt-3 mb-5">
            <button
                type="button"
                className="w-full flex items-center justify-between rounded-full border border-gray-300 px-4 py-2 text-[15px] font-semibold text-nuit/90 bg-white focus:outline-none"
                onClick={() => setOpen((v) => !v)}
            >
                <span style={{ fontWeight: 600 }}>{options.find(o => o.value === value)?.label}</span>
                <svg width="24" height="24" fill="none"><path d="M7 10l5 5 5-5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {open && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-300 z-10 py-4">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="px-6 py-2 text-[17px] font-semibold text-nuit/90 cursor-pointer hover:bg-gray-100"
                            style={{ fontWeight: 600 }}
                            onClick={() => {
                                onChange(option.value);
                                setOpen(false);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// Composant pour choisir la spécialité
function TypeDropdown({ value, onChange, specialties, onChangeName }) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    if (!specialties || specialties.length === 0) return null;
    return (
        <div ref={ref} className="relative w-full mt-3 mb-5">
            <button
                type="button"
                className="w-full flex items-center justify-between rounded-full border border-gray-300 px-4 py-2 text-[15px] font-semibold text-nuit/90 bg-white focus:outline-none"
                onClick={() => setOpen((v) => !v)}
            >
                <span style={{ fontWeight: 600 }}>{specialties.find(s => (s.specialty?._id || s._id) === value)?.specialty?.name || "Choisir une spécialité"}</span>
                <svg width="24" height="24" fill="none"><path d="M7 10l5 5 5-5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {open && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-300 z-10 py-4">
                    {specialties.map((option) => (
                        <div
                            key={option.specialty?._id || option._id}
                            className="px-6 py-2 text-[17px] font-semibold text-nuit/90 cursor-pointer hover:bg-gray-100"
                            style={{ fontWeight: 600 }}
                            onClick={() => {
                                onChange(option.specialty?._id || option._id);
                                onChangeName(option.specialty?.name || option.name);
                                setOpen(false);
                            }}
                        >
                            {option.specialty?.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
// Composant pour choisir la durée
function DureeDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const options = [5, 10, 15, 30, 45, 60];
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <div ref={ref} className="relative w-full mt-3 mb-5">
            <button
                type="button"
                className="w-full flex items-center justify-between rounded-full border border-gray-300 px-4 py-2 text-[15px] font-semibold text-nuit/90 bg-white focus:outline-none"
                onClick={() => setOpen((v) => !v)}
            >
                <span style={{ fontWeight: 600 }}>{value} min</span>
                <svg width="24" height="24" fill="none"><path d="M7 10l5 5 5-5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {open && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-300 z-10 py-4">
                    {options.map((option) => (
                        <div
                            key={option}
                            className="px-6 py-2 text-[17px] font-semibold text-nuit/90 cursor-pointer hover:bg-gray-100"
                            style={{ fontWeight: 600 }}
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                        >
                            {option} min
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Page;
