"use client";

import Image from "next/image";
import { Inter, Lato, Playfair_Display, Montserrat } from "next/font/google";
import Search from "@/img/chercher.png";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Location from "@/img/icons/loca.png";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300"],
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["900"],
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

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const SearchBar = ({ fromHeader }) => {
    const [search, setSearch] = useState("");
    const [resultsExperts, setResultsExperts] = useState([]);
    const [resultsSpecialties, setResultsSpecialties] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [localisation, setLocalisation] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const inputRef = useRef();
    const router = useRouter();

    // Ajout de la fonction pour chercher les experts par spécialité
    const handleSpecialtyClick = (spec) => {
        setSelectedSpecialty(spec);
        setSearch(spec.name);
        setShowDropdown(false);
        setResultsExperts([]);
        // On ne stocke plus dans le localStorage
        // On ne redirige pas ici, on attend le bouton
    };

    // On ne lance la recherche d'experts par spécialité+localisation que sur clic bouton
    const handleExpertBySpecialty = async (e) => {
        e.preventDefault();
        if (!selectedSpecialty) return;
        // On envoie l'id et la localisation dans l'URL
        const params = new URLSearchParams({
            id: selectedSpecialty._id,
            localisation: localisation
        });
        router.push(`/experts?${params.toString()}`);
    };

    // Debounce la recherche
    const debouncedSearch = useRef(
        debounce(async (value) => {
            if (!value) {
                setResultsExperts([]);
                setResultsSpecialties([]);
                setShowDropdown(false);
                return;
            }
            try {
                // Appels en parallèle
                const [expertsRes, specialtiesRes] = await Promise.all([
                    fetch("http://localhost:8000/api/experts/search", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ search: value })
                    }),
                    fetch("http://localhost:8000/api/specialties/search", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ search: value })
                    })
                ]);
                const experts = await expertsRes.json();
                const specialties = await specialtiesRes.json();
                setResultsExperts(experts);
                setResultsSpecialties(specialties);
                setShowDropdown(true);
            } catch (error) {
                setResultsExperts([]);
                setResultsSpecialties([]);
                setShowDropdown(false);
            }
        }, 400)
    ).current;

    const debouncedLocationSearch = useRef(
        debounce(async (value) => {
            if (!value) {
                setLocationSuggestions([]);
                setShowLocationDropdown(false);
                return;
            }
            try {
                const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(value)}&limit=5`);
                const data = await res.json();
                setLocationSuggestions(data.features.map(f => f.properties.label));
                setShowLocationDropdown(true);
            } catch (error) {
                setLocationSuggestions([]);
                setShowLocationDropdown(false);
            }
        }, 400)
    ).current;

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        debouncedSearch(value);
    };

    const handleBlur = () => {
        setTimeout(() => setShowDropdown(false), 150); // Laisse le temps de cliquer
    };

    return (
        <div
            style={{
                boxShadow: "0 0 3px 0 rgba(0,0,0,0.10)"
            }} className={`${lato.className} z-40 bg-white relative ${fromHeader ? "h-12 w-[630px]" : "h-16 w-full"} rounded-full border-[1px] border-gray-300 flex items-center pl-6 pr-2`}>
            <form className="flex w-full items-center text-noir/80" onSubmit={selectedSpecialty ? handleExpertBySpecialty : e => e.preventDefault()}>
                {/* Partie gauche : recherche expert/spécialité */}
                <div className="flex items-center flex-1  w-full">
                    <div className="flex items-center w-[55%]">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Nom, spécialité..."
                            className="w-full flex-1 bg-white placeholder:text-noir/50 focus:outline-none"
                            value={search}
                            onChange={handleChange}
                            onFocus={() => search && (resultsExperts.length > 0 || resultsSpecialties.length > 0) && setShowDropdown(true)}
                            onBlur={handleBlur}
                            disabled={!!selectedSpecialty}
                        />
                        {selectedSpecialty && (
                            <span className="ml-2 px-2 py-1 bg-maincolor/10 rounded text-maincolor text-xs flex items-center">
                                {selectedSpecialty.name}
                                <button type="button" className="ml-1 text-maincolor" onClick={() => { setSelectedSpecialty(null); setSearch(""); setResultsExperts([]); }}>
                                    ✕
                                </button>
                            </span>
                        )}
                    </div>
                    <div className="h-8 w-px bg-gray-300 mx-4" />
                    {/* Partie droite : champ localisation */}
                    <div className="flex items-center w-[45%]">
                        <Image src={Location} alt="Localisation" className="w-4 mr-2" />
                        <input
                            type="text"
                            placeholder="Localisation..."
                            className="w-36 bg-white placeholder:text-noir/50 focus:outline-none"
                            value={localisation}
                            onChange={e => {
                                setLocalisation(e.target.value);
                                debouncedLocationSearch(e.target.value);
                            }}
                            onBlur={() => setTimeout(() => setShowLocationDropdown(false), 150)}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={`ml-4 ${fromHeader ? "h-9 w-9" : "h-12 w-12"} bg-maincolor/90 rounded-full flex justify-center items-center`}
                    disabled={!selectedSpecialty}
                >
                    <Image src={Search} alt="Rechercher" className="w-5" />
                </button>
            </form>
            {/* Dropdown résultats */}
            {showDropdown && (resultsExperts.length > 0 || resultsSpecialties.length > 0) && !selectedSpecialty && (
                <div className="absolute left-0 top-[110%] w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-72 overflow-y-auto z-50">
                    {resultsSpecialties.length > 0 && (
                        <div>
                            {resultsSpecialties.map((spec, idx) => (
                                <div key={spec._id || idx} className="px-4 py-3 hover:bg-maincolor/10 text-noir/80 cursor-pointer border-b last:border-b-0"
                                    onMouseDown={() => handleSpecialtyClick(spec)}
                                >
                                    <div className={`${montserrat.className} text-[15px]`}>{spec.name}</div>
                                </div>
                            ))}
                        </div>
                    )}
                    {(resultsSpecialties.length > 0 && resultsExperts.length > 0) && (
                        <div className="w-full h-[1px] bg-gray-300"></div>
                    )}
                    {resultsExperts.length > 0 && (
                        <div>
                            {resultsExperts.map((expert, idx) => (
                                <div key={expert._id || idx} className="px-4 py-3 hover:bg-maincolor/10 text-noir/80 cursor-pointer flex items-center gap-x-4">
                                    <div className="flex relative items-center justify-center w-10 h-10 rounded-full overflow-hidden">
                                        <Image src="/experts/home3.webp" alt="Avatar" fill className="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className={`${montserrat_bold.className} text-[15px] first-letter:uppercase`}>{expert.firstName} {expert.lastName}</div>
                                        {expert.specialties && expert.specialties.length > 0 && (
                                            <div className="text-sm text-gray-500">
                                                {expert.specialties.map((s, i) => s.specialty?.name).filter(Boolean).join(", ")}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {showLocationDropdown && locationSuggestions.length > 0 && (
                <div className="absolute left-[50%] top-[110%] w-60 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto z-50">
                    {locationSuggestions.map((suggestion, idx) => (
                        <div
                            key={idx}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-noir/80"
                            onMouseDown={() => {
                                setLocalisation(suggestion);
                                setShowLocationDropdown(false);
                            }}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
