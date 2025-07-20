"use client";
import Image from "next/image";
import { useState } from "react";
import HeaderRegister from "@/components/HeaderRegister";
import Google from "@/img/google-logo.svg"
import Mail from "@/img/mail.png"
import {
    Freehand,
    Poiret_One,
    Playfair_Display,
    Inter,
    Montserrat
} from "next/font/google";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);
        try {
            const res = await fetch("http://localhost:8000/api/users/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Erreur lors de l'inscription");
            Cookies.set("token", data.token, { expires: 7 });
            setSuccess(true);
            router.push("/");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center relative">
            <HeaderRegister />
            <div className="mt-[18vh] flex flex-col items-center">
                <span className={`${mont_low.className} text-noir text-[36px] mb-2`}>Inscrivez-vous avec wicca</span>
                <div className="flex w-[600px] items-center border-[1px] bg-noir/80 border-gray-200 px-2 py-2 rounded-lg cursor-pointer mt-10">
                    <div className="flex items-center justify-center bg-white rounded-full p-2">
                        <img src={Google.src} className="h-5"></img>
                    </div>
                    <div className="w-full flex justify-center">
                        <span className={`${mont.className} text-white text-[16px]`}>Continuer avec Google</span>
                    </div>
                </div>

                <div className="w-full flex items-center my-6">
                    <hr className="border-t border-gray-300 flex-grow" />
                    <span className={`${mont_low.className} px-2 text-noir/80 text-[11px]`}>ou</span>
                    <hr className="border-t border-gray-300 flex-grow" />
                </div>

                <div className="flex w-full items-center rounded-lg cursor-pointer">
                    <form className="flex flex-col items-center gap-y-3 w-full" onSubmit={handleSubmit}>
                        <div className="flex w-full gap-x-2">
                            <div className="flex flex-col w-full gap-y-2">
                                <span className={`${mont_low.className} text-noir/80 text-[15px]`}>Prénom</span>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder=""
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="border px-2 py-2 rounded-lg w-full text-sm text-black focus:outline-none focus:ring-1 focus:ring-maincolor focus:border-maincolor"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-full gap-y-2">
                                <span className={`${mont_low.className} text-noir/80 text-[15px]`}>Nom</span>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder=""
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className="border px-2 py-2 rounded-lg w-full text-sm text-black focus:outline-none focus:ring-1 focus:ring-maincolor focus:border-maincolor"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-y-2">
                            <span className={`${mont_low.className} text-noir/80 text-[15px]`}>Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder=""
                                value={form.email}
                                onChange={handleChange}
                                className="border px-2 py-2 rounded-lg w-full text-sm text-black focus:outline-none focus:ring-1 focus:ring-maincolor focus:border-maincolor"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full gap-y-2">
                            <span className={`${mont_low.className} text-noir/80 text-[15px]`}>Téléphone</span>
                            <input
                            type="tel"
                            name="phone"
                            placeholder=""
                            value={form.phone}
                            onChange={handleChange}
                            className="border px-2 py-2 rounded-lg w-full text-sm text-black focus:outline-none focus:ring-1 focus:ring-maincolor focus:border-maincolor"
                        />
                        </div>
                        <div className="flex flex-col w-full gap-y-2">
                            <span className={`${mont_low.className} text-noir/80 text-[15px]`}>Mot de passe</span>
                            <input
                                type="password"
                                name="password"
                                placeholder=""
                                value={form.password}
                                onChange={handleChange}
                                className="border px-2 py-2 rounded-lg w-full text-sm text-black focus:outline-none focus:ring-1 focus:ring-maincolor focus:border-maincolor"
                                required
                            />
                        </div>
                        <button type="submit" className={`bg-maincolor text-white py-2 px-6 rounded-lg mt-6 ${mont.className} text-[16px]`} disabled={loading}>
                            {loading ? "Inscription..." : "Créer mon compte"}
                        </button>
                        {error && <span className="text-red-500 text-sm">{error}</span>}
                        {success && <span className="text-green-600 text-sm">Inscription réussie !</span>}
                        <span className={`${mont_low.className} text-noir/80 text-[15px] mt-2`}>Vous n'avez pas de compte ? <span className="text-maincolor cursor-pointer">Connection</span></span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
