"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Inter, Lato, Playfair_Display } from "next/font/google";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Location from "@/img/icons/locablanc.png";
import Image from "next/image";
import Calendar from "@/img/calendar_doctolib.png";
import Header from "@/components/HeaderExpert"
import SearchBar from "@/components/SearchBar"
import { Suspense } from "react";
import { gsap } from "gsap";
import { useRef } from "react";

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
const Card = ({ key, firstname, lastname, adress, specialties, image, onClick }) => (
    <div onClick={onClick} className="p-4 rounded-lg bg-white flex space-x-5 w-[48.5%] aspect-[1/0.45] border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-200"
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
            <div className={`${lato.className} text-white absolute bottom-4 left-4 z-40 first-letter:uppercase space-y-2`}>
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
            <Image src={Calendar} alt="Calendar" fill className="scale-[0.9]" />
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
    const router = useRouter();

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
        if (window.scrollY > 0) {
          gsap.to(searchBarRef.current, { y: -60, scale: 0.75, duration: 0.5, ease: "power2.out" });
          gsap.to(bgBlancRef.current, { height: 80, duration: 0.5, ease: "power2.out" }); // 80px = hauteur du header seul
        } else {
          gsap.to(searchBarRef.current, { y: 0, scale: 1, duration: 0.5, ease: "power2.out" });
          gsap.to(bgBlancRef.current, { height: 180, duration: 0.5, ease: "power2.out" }); // 180px = header + search bar
        }
      };

      // Initialiser la hauteur au chargement
      if (bgBlancRef.current) {
        bgBlancRef.current.style.height = "180px";
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex bg-white">
            <div ref={bgBlancRef} className="fixed w-full z-50 top-0 bg-blanc border-b border-gray-200">
                <Header />
                <div ref={searchBarContainerRef} className="px-[16vw]">
                    <div ref={searchBarRef}>
                        <SearchBar />
                    </div>
                </div>
            </div>
            <div className="flex px-12 w-full relative mt-[200px]">
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
                    <div className=" w-full flex flex-wrap  justify-between gap-y-8">
                        {experts.map((expert, idx) => (
                            <Card
                                key={expert._id}
                                firstname={expert.firstName}
                                lastname={expert.lastName}
                                adress={expert.adressrdv}
                                specialties={
                                    specialtyId
                                        ? [...expert.specialties].sort((a, b) =>
                                            a.specialty._id === specialtyId ? -1 : b.specialty._id === specialtyId ? 1 : 0
                                        )
                                        : expert.specialties
                                }
                                image={images[idx % images.length]}
                                onClick={() => router.push(`/experts/${expert._id}`)}
                            />
                        ))}
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