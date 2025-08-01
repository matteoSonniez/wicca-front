"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Inter, Lato, Playfair_Display, Montserrat } from "next/font/google";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Location from "@/img/icons/locablanc.png";
import Image from "next/image";
import ServicesBis from "@/components/HomeComp/ServicesBis"
import Calendar from "@/img/calendar_doctolib.png";
import Header from "@/components/HeaderExpert"
import SearchBar from "@/components/SearchBar"
import { Suspense } from "react";
import { gsap } from "gsap";
import "./index.css";
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const lato_bold = Lato({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["600"],
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300"],
    display: "swap",
});
const images = [
    "/experts/portrait-home.jpg",
    "/experts/portrait-home2.jpg",
    "/experts/portrait-home3.jpg",
    "/experts/portrait-home4.jpg",
    "/experts/portrait-home5.jpg",
    "/experts/portrait-home6.jpg",
    "/experts/portrait-home7.jpg",
    "/experts/portrait-home8.jpg",
    "/experts/portrait-home9.jpg",
    "/experts/portrait-home10.jpg",
    "/experts/portrait.webp",
    "/experts/portrait2.webp",
    "/experts/portrait3.webp",
    "/experts/portrait5.webp",
    "/experts/portrait6.webp",
    "/experts/portrait7.webp",
    "/experts/portrait8.webp",
];
// Ajout du composant CalendarMiniSlots pour la liste d'experts

function CalendarMiniSlots({ expertId, onSlotClick }) {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const nbDays = 4;
    const maxRows = 5;
    const duree = 30;

    useEffect(() => {
        if (!expertId) return;
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
    }, [expertId]);

    function formatDay(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR', { weekday: 'short' });
    }
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
    }
    const days = slots.slice(0, nbDays);
    return (
        <div className="w-full h-full flex flex-col items-center justify-center flex-1">
            {loading ? <div className="text-xs text-gray-400">Chargement...</div> : error ? <div className="text-xs text-red-500">{error}</div> : (
                <div className="flex w-full h-full justify-center items-start gap-2 flex-1">
                {days.map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center w-full flex-1 h-full justify-between">
                        <div className="text-[11px] font-semibold text-nuit/90 text-center" style={{ textTransform: 'capitalize' }}>
                            {formatDay(day.date)}.<br />
                            <span className="text-[10px] font-normal">{formatDate(day.date)}</span>
                        </div>
                        {/* Créneaux horaires */}
                        <div className="flex flex-col w-full h-full flex-1 justify-between">
                            {[...Array(maxRows)].map((_, rowIdx) => {
                                const slot = day.slots[rowIdx];
                                return slot ? (
                                    <div
                                        key={rowIdx}
                                        className="w-full flex-1 flex items-center justify-center my-1 rounded border border-maincolor/20 bg-maincolor/5 text-nuit/90 text-[10px] p-1 cursor-pointer min-h-[32px] hover:bg-maincolor/10"
                                    >
                                        {slot.start}
                                    </div>
                                ) : (
                                    <div key={rowIdx} className="w-full flex-1 flex items-center justify-center my-1 rounded border border-gray-300 bg-white text-gray-400 min-h-[32px]"></div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}
const Card = ({ key, firstname, lastname, adress, specialties, image, onClick, isScrolling, expertId, onSlotClick }) => (
    <div
        onClick={onClick}
        className={`p-4 rounded-lg bg-white flex space-x-5 w-[48.5%] aspect-[1/0.45] border border-gray-200 cursor-pointer transition-shadow duration-200
            ${!isScrolling ? "hover:border-maincolor/60 hover:shadow-lg" : ""}
        `}
        style={{
            boxShadow: "0 0 8px 0 rgba(0,0,0,0.05)"
        }}>
        <div className="flex relative aspect-[0.8/1] h-[100%] rounded-lg overflow-hidden">
            <Image
                src={image}
                alt="Portrait de l'expert"
                fill
                className="object-cover brightness-[0.9]"
            />
            <div className={`${lato.className} text-white absolute bottom-4 left-4 z-20 first-letter:uppercase space-y-2`}>
                <span className="text-[20px]">{firstname}</span>
                <div className="flex items-center space-x-2">
                    <img src={Location.src} alt="Location" className="w-4 h-4" />
                    <span className="text-[13px]">{adress}</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            {specialties && specialties.length > 0 && (
                <div className="flex flex-col space-y-2 text-noir/80">
                    {specialties.map((specialty) => (
                        <div key={specialty._id} className="flex justify-center items-center bg-maincolor/5 rounded-lg p-2">
                            <span className="text-[11px] text-black">{specialty.specialty.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className="flex-1 relative flex justify-center items-center overflow-hidden">
            <CalendarMiniSlots expertId={expertId} onSlotClick={onSlotClick} />
        </div>
    </div>
);

function ExpertsPage() {
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const specialtyId = searchParams.get("id");
    const localisation = searchParams.get("localisation");
    const searchBarRef = useRef(null);
    const searchBarContainerRef = useRef(null);
    const bgBlancRef = useRef(null);
    const expertsContainerRef = useRef(null);
    const servicesBisRef = useRef(null);
    const router = useRouter();
    const [isScrolling, setIsScrolling] = useState(false);

    const searchBarControls = useAnimation();
    const bgBlancControls = useAnimation();
    const servicesBisControls = useAnimation();

    useEffect(() => {
        if (!specialtyId) {
            setExperts([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        const body = { specialtyId: specialtyId };
        if (localisation) {
            console.log(localisation, "boyyyyyyy");
            body.adressrdv = localisation;
        }
        fetch("http://localhost:8000/api/experts/find-by-specialty", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data) => {
                setExperts(data);
                setLoading(false);
            })
            .catch((err) => {
                setExperts([]);
                setLoading(false);
            });
    }, [specialtyId, localisation]);

    useEffect(() => {
        const handleScroll = () => {
            const rect = expertsContainerRef.current?.getBoundingClientRect();
            if (!rect) return;
            if (rect.top <= 200) {
                searchBarControls.start({ y: -120, scale: 0.75, transition: { duration: 0.25 } });
                bgBlancControls.start({ height: 80, transition: { duration: 0.25 } });
                servicesBisControls.start({ y: -105, transition: { duration: 0.25 } });
            } else {
                searchBarControls.start({ y: 0, scale: 1, transition: { duration: 0.25 } });
                bgBlancControls.start({ height: 220, transition: { duration: 0.25 } });
                servicesBisControls.start({ y: 0, transition: { duration: 0.25 } });
            }
            setIsScrolling(true);
            clearTimeout(window._scrollTimeout);
            window._scrollTimeout = setTimeout(() => setIsScrolling(false), 450);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(window._scrollTimeout);
        };
    }, []);

    return (
        <div className="flex bg-white">
            <motion.div
                ref={servicesBisRef}
                className="fixed z-40 flex w-[68vw] left-1/2 top-4"
                style={{ x: "-50%" }} // translation horizontale initiale
                animate={servicesBisControls}
                initial={{ y: 0, x: "-50%" }} // x: "-50%" pour centrer
            >
                <ServicesBis fromHome={false} />
            </motion.div>

            <motion.div
                ref={bgBlancRef}
                className="fixed w-full flex flex-col space-y-14 z-30 top-0 bg-grisbg border-b border-gray-200"
                animate={bgBlancControls}
                initial={{ height: 220 }}
            >
                <Header />
                <div ref={searchBarContainerRef} className="px-[16vw] z-40">
                    <motion.div ref={searchBarRef} animate={searchBarControls} initial={{ y: 0, scale: 1 }}>
                        <SearchBar />
                    </motion.div>
                </div>
            </motion.div>
            <div ref={expertsContainerRef} className="flex px-12 w-full relative mt-[240px]">
                {/* <div className="bg-red-500 w-[230px] border border-gray-400/70 rounded-lg top-0 left-9 overflow-hidden">
                    <Image
                        src="/expertpage/filtre1.png"
                        alt="Portrait de l'expert"
                        width={230}
                        height={300} // n'importe quelle valeur, c'est juste pour le ratio, sera ajusté automatiquement
                        className="w-full h-auto object-cover"
                    />
                    <Image
                        src="/expertpage/filtre2.png"
                        alt="Portrait de l'expert"
                        width={230}
                        height={300} // n'importe quelle valeur, c'est juste pour le ratio, sera ajusté automatiquement
                        className="w-full h-auto object-cover"
                    />
                </div> */}
                {loading ? (
                    <div>Chargement...</div>
                ) : experts.length === 0 ? (
                    <div>Aucun expert trouvé.</div>
                ) : (
                    <div>
                        <span className={`${montserrat.className} text-[16px] text-black/80`}>245 résultats</span>
                        <div className=" w-full flex flex-wrap  justify-between gap-y-8 mt-5">
                            {experts.map((expert, idx) => (
                                <Card
                                    key={expert._id}
                                    firstname={expert.firstName}
                                    lastname={expert.lastName}
                                    adress={expert.adressrdv}
                                    specialties={specialtyId
                                        ? [...expert.specialties].sort((a, b) =>
                                            a.specialty._id === specialtyId ? -1 : b.specialty._id === specialtyId ? 1 : 0
                                        )
                                        : expert.specialties
                                    }
                                    image={images[idx % images.length]}
                                    onClick={() => router.push(`/experts/${expert._id}`)}
                                    isScrolling={isScrolling}
                                    expertId={expert._id}
                                    onSlotClick={() => {}} // Placeholder for now, will be implemented later
                                />
                            ))}
                        </div>
                    </div>

                )}
            </div>


        </div>
    );
}

export default function ExpertsPageWrapper() {
    return (
        <Suspense fallback={<div>Chargement...</div>}>
            <ExpertsPage />
        </Suspense>
    );
} 