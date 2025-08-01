"use client";

import { Lato, Poppins } from "next/font/google";
import ImageAuth from "@/img/bg-auth.jpg"
import Google from "@/img/google-logo.svg"
import Mail from "@/img/mail.png"
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import LoginImage from "@/img/login2.svg";
import Portal from "./Portal";

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const poppins_bold = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const poppins_small = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Index = ({ onClose, visible }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erreur lors de la connexion");
      Cookies.set("token", data.token, { expires: 7 });
      setSuccess(true);
      setTimeout(() => {
        onClose && onClose();
        router.push('/');
      }, 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Portal>
      {/* Container qui couvre tout l'écran et centre la popup */}
      <div
        className={`
          fixed inset-0 z-50 flex items-center justify-center
          transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Backdrop semi-transparent */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onClose} // Ferme la popup si l'utilisateur clique sur le fond
        />

        <div
          className={`
            relative
            bg-white
            w-[900px]
            h-[640px]
            rounded-lg
            shadow-lg
            flex overflow-hidden
            ${lato.className}
          `}
        >
          <div className="w-1/2 h-full flex items-center justify-center">
            <img src={LoginImage.src} className="w-[300px]"></img>
          </div>
          
          <div className="flex flex-col w-1/2 px-10 pb-10 pt-10 h-full">

            <span className={`${poppins.className} text-gray-800 text-[23px] mb-2`}>Connectez-vous à wicca</span>
            <span className={`${poppins_small.className} text-gray-600 text-[14px]`}>
              Vous n'avez pas de compte ? &nbsp;
              <span 
                className="text-maincolor cursor-pointer" 
                onClick={() => router.push('/register')}
              >
                Inscrivez-vous ici
              </span>
            </span>

            <div className="flex items-center border-[1px] border-gray-200 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer mt-10">
              <img src={Google.src} className="h-6"></img>
              <div className="w-full flex justify-center">
                <span className={`${poppins.className} text-gray-800 text-[15px]`}>Continuer avec Google</span>
              </div>  
            </div>
            
            <div className="w-full flex items-center my-6">
              <hr className="border-t border-gray-300 flex-grow" />
              <span className={`${poppins_small.className} px-2 text-gray-500 text-[11px]`}>ou</span>
              <hr className="border-t border-gray-300 flex-grow" />
            </div>

            <div className="flex items-center w-full rounded-lg cursor-pointer">
              <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                <span className={`${poppins.className} text-gray-600 text-[15px] mb-2`}>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  value={form.email}
                  onChange={handleChange}
                  className={`${poppins_small.className} border px-2 py-2 rounded-lg text-black text-sm placeholder:text-gray-400 placeholder:text-[11px] w-full`}
                  required
                />
                <span className={`${poppins.className} text-gray-600 text-[15px] mt-5 mb-2`}>Mot de passe</span>
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  value={form.password}
                  onChange={handleChange}
                  className={`${poppins_small.className} border px-2 py-2 rounded-lg text-black text-sm placeholder:text-gray-400 placeholder:text-[11px] w-full`}
                  required
                />
                <button type="submit" className="bg-maincolor text-white py-2 rounded mt-5" disabled={loading || success}>
                  {loading ? "Connexion..." : "Se connecter"}
                </button>
                {error && <span className="text-red-500 text-sm">{error}</span>}
                {success && <span className="text-green-600 text-sm">Connexion réussie !</span>}
              </form>
            </div>

            <div className="mt-auto">
              <span className={`${poppins_small.className} text-gray-600 text-[11px]`}>
                En vous inscrivant, vous acceptez les Conditions générales d'utilisation de Wicca et de recevoir occasionnellement des e-mails de notre part.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Index;