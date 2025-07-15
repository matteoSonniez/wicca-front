"use client";

import Image from "next/image";
import { Inter, Lato, Playfair_Display } from "next/font/google";
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

const playfair2 = Playfair_Display({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [resultsExperts, setResultsExperts] = useState([]);
    const [resultsSpecialties, setResultsSpecialties] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [localisation, setLocalisation] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const inputRef = useRef();
    const router = useRouter();

    // Ajout de la fonction pour chercher les experts par spécialité
    const handleSpecialtyClick = (spec) => {
        setSelectedSpecialty(spec);
        setSearch(spec.name);
        setShowDropdown(false);
        setResultsExperts([]);
    };

    // On ne lance la recherche d'experts par spécialité+localisation que sur clic bouton
    const handleExpertBySpecialty = async (e) => {
        e.preventDefault();
        if (!selectedSpecialty) return;
        // Stocker la spécialité et la localisation pour la page /experts
        localStorage.setItem("wicca_selected_specialty", JSON.stringify(selectedSpecialty));
        localStorage.setItem("wicca_selected_localisation", localisation);
        router.push("/experts");
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

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        debouncedSearch(value);
    };

    const handleBlur = () => {
        setTimeout(() => setShowDropdown(false), 150); // Laisse le temps de cliquer
    };

    return (
        <div className={`${lato.className} z-40 bg-white relative w-full h-16 rounded-full border-[1px] border-gray-400/70 flex items-center pl-6 pr-2`}>
            <form className="flex w-full items-center text-noir/80" onSubmit={selectedSpecialty ? handleExpertBySpecialty : e => e.preventDefault()}>
                {/* Partie gauche : recherche expert/spécialité */}
                <div className="flex items-center flex-1  w-full">
                    <div className="flex items-center w-[70%]">
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
                    <div className="flex items-center w-[30%]">
                        <Image src={Location} alt="Localisation" className="w-4 mr-2" />
                        <input
                            type="text"
                            placeholder="Localisation..."
                            className="w-36 bg-white placeholder:text-noir/50 focus:outline-none"
                            value={localisation}
                            onChange={e => setLocalisation(e.target.value)}
                        //disabled={!selectedSpecialty}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="ml-4 h-12 w-12 bg-maincolor/90 rounded-full flex justify-center items-center"
                    disabled={!selectedSpecialty}
                >
                    <Image src={Search} alt="Rechercher" className="w-5" />
                </button>
            </form>
            {/* Dropdown résultats */}
            {showDropdown && (resultsExperts.length > 0 || resultsSpecialties.length > 0) && !selectedSpecialty && (
                <div className="absolute left-0 top-[110%] w-full bg-white border border-gray-300 rounded-b-xl shadow-lg max-h-72 overflow-y-auto z-50">
                    {resultsExperts.length > 0 && (
                        <div>
                            <div className="px-4 py-2 text-xs font-bold text-maincolor/80 uppercase bg-gray-50">Experts</div>
                            {resultsExperts.map((expert, idx) => (
                                <div key={expert._id || idx} className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0">
                                    <div className="font-semibold">{expert.firstName} {expert.lastName}</div>
                                    {expert.specialties && expert.specialties.length > 0 && (
                                        <div className="text-sm text-gray-500">
                                            {expert.specialties.map((s, i) => s.specialty?.name).filter(Boolean).join(", ")}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    {resultsSpecialties.length > 0 && (
                        <div>
                            <div className="px-4 py-2 text-xs font-bold text-maincolor/80 uppercase bg-gray-50">Spécialités</div>
                            {resultsSpecialties.map((spec, idx) => (
                                <div key={spec._id || idx} className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                                    onMouseDown={() => handleSpecialtyClick(spec)}
                                >
                                    <div className="font-semibold">{spec.name}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
