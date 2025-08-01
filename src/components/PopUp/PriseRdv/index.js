"use client";

import { Lato, Poppins, Montserrat } from "next/font/google";
import ImageAuth from "@/img/bg-auth.jpg"
import Google from "@/img/google-logo.svg"
import Mail from "@/img/mail.png"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import RdvImage from "@/img/rdv.svg";
import Check from "@/img/icons/check.png";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const montserrat_semi = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const montserrat_bold = Montserrat({
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

const Index = ({ onClose, visible, expert, slot, duree, specialty }) => {
  useEffect(() => {
    console.log("expert", expert);
    console.log("slot", slot);
    console.log("duree", duree);
    console.log("specialty", specialty);
  }, [expert, slot, duree, specialty]);

  // Gestion des étapes
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [stripeLoading, setStripeLoading] = useState(false);
  const [stripeError, setStripeError] = useState("");

  useEffect(() => {
    // Vérifie la présence d'un token dès l'ouverture de la popup
    const token = Cookies.get('token');
    if (token) {
      setStep(2);
    }
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = Cookies.get('token');
      if (!token) return;
      try {
        const res = await fetch('http://localhost:8000/api/users/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          setUserInfo(data);
        }
      } catch (err) {
        // Optionnel : gérer l'erreur
      }
    };
    if (step === 2) {
      fetchUserInfo();
    }
  }, [step]);

  // --- LOGIQUE FORMULAIRE INSCRIPTION ---
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
      setStep(2); // Passe à l'étape 2 après inscription
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  // --- FIN LOGIQUE FORMULAIRE INSCRIPTION ---

  const reserverCreneau = async () => {
    try {
      const token = Cookies.get('token'); // Récupère le token depuis les cookies
      console.log("experteeeee", expert);
      const response = await fetch('http://localhost:8000/api/calendar/bookSlot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Ajoute le token ici
        },
        body: JSON.stringify({
          expertId: expert._id,
          date: slot.date,
          start: slot.start,
          duration: duree
        })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Créneau réservé avec succès !');
        // Autres actions (fermer popup, refresh, etc)
      } else {
        alert(data.message || "Erreur lors de la réservation");
      }
    } catch (err) {
      alert("Erreur réseau");
    }
  };

  return (
    // Container qui couvre tout l'écran et centre la popup
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

      {/* Fenêtre de la popup (50% largeur / 50% hauteur) */}
      <div
        className={`
          relative
          bg-white
          w-[1200px]
          h-[740px]
          rounded-lg
          shadow-lg
          flex flex-col overflow-hidden
          ${lato.className}
        `}
      >
        <div className="flex justify-center items-center w-full pt-10">
          {/* CERCLES D'ÉTAPES */}
          {/* Cercle 1 */}
          <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center ${step === 1 ? 'bg-maincolor' : step > 1 ? 'bg-maincolor' : 'bg-maincolor/20'}`}>
            {step === 1 && <div className="w-[12px] h-[12px] bg-white rounded-full flex items-center justify-center"></div>}
            {step > 1 && <img src={Check.src} className="w-[14px] h-[14px]" alt="check" />}
          </div>
          <div className={`w-[380px] h-[4px] ${step > 1 ? 'bg-maincolor' : 'bg-maincolor/20'}`}></div>
          {/* Cercle 2 */}
          <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center ${step === 2 ? 'bg-maincolor' : step > 2 ? 'bg-maincolor' : 'bg-maincolor/20'}`}>
            {step === 2 && <div className="w-[12px] h-[12px] bg-white rounded-full flex items-center justify-center"></div>}
            {step > 2 && <img src={Check.src} className="w-[14px] h-[14px]" alt="check" />}
          </div>
          <div className={`w-[380px] h-[4px] ${step > 2 ? 'bg-maincolor' : 'bg-maincolor/20'}`}></div>
          {/* Cercle 3 */}
          <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center ${step === 3 ? 'bg-maincolor' : 'bg-maincolor/20'}`}>
            {step === 3 && <div className="w-[12px] h-[12px] bg-white rounded-full flex items-center justify-center"></div>}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-[140px] h-full">
          {/* FORMULAIRE D'INSCRIPTION */}
          <div className="flex items-center justify-center">
            {step === 1 && (
              <form className="flex flex-col items-center gap-y-3 w-[400px] bg-blanc p-8 rounded-xl shadow-sm" onSubmit={handleSubmit}>
                <span className={`${montserrat_semi.className} text-noir text-[22px] mb-2`}>Je crée mon compte</span>
                <div className="flex w-full gap-x-2">
                  <div className="flex flex-col w-full gap-y-2">
                    <span className={`${montserrat.className} text-noir/80 text-[15px]`}>Prénom</span>
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
                    <span className={`${montserrat.className} text-noir/80 text-[15px]`}>Nom</span>
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
                  <span className={`${montserrat.className} text-noir/80 text-[15px]`}>Email</span>
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
                  <span className={`${montserrat.className} text-noir/80 text-[15px]`}>Téléphone</span>
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
                  <span className={`${montserrat.className} text-noir/80 text-[15px]`}>Mot de passe</span>
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
                <button type="submit" className={`bg-maincolor/90 hover:bg-maincolor text-white py-2 px-6 rounded-lg mt-6 ${montserrat_bold.className} text-[14px]`} disabled={loading}>
                  {loading ? "Inscription..." : "Créer mon compte"}
                </button>
                {error && <span className="text-red-500 text-sm">{error}</span>}
              </form>
            )}
            {step === 2 && (
              userInfo ? (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-maincolor text-xl font-bold mb-4">Confirmer mes coordonnées</span>
                  <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col gap-4 text-becomepract/80 mb-6">
                    <span><b>Prénom :</b> {userInfo.firstName}</span>
                    <span><b>Nom :</b> {userInfo.lastName}</span>
                    <span><b>Email :</b> {userInfo.email}</span>
                    <span><b>Téléphone :</b> {userInfo.phone}</span>
                    <button
                      className="bg-maincolor hover:bg-maincolor/90 text-white mt-3 py-2 px-6 rounded-lg text-[14px] font-bold"
                      onClick={() => setStep(3)}
                    >
                      Confirmer mes coordonnées
                    </button>
                  </div>
                </div>
              ) : (
                <span>Chargement des informations...</span>
              )
            )}
            {step === 3 && (
              <div className="flex flex-col items-center justify-center">
                <span className="text-maincolor text-xl font-bold mb-4">Paiement</span>
                <span className="mb-6 text-gray-700">Validez votre réservation en procédant au paiement sécurisé.</span>
                <button
                  className="bg-maincolor hover:bg-maincolor/90 text-white py-2 px-6 rounded-lg text-[14px] font-bold"
                  disabled={stripeLoading}
                  onClick={async () => {
                    setStripeLoading(true);
                    setStripeError("");
                    try {
                      const token = Cookies.get('token');
                      const successUrl = window.location.origin + '/mon_rdv?success=1';
                      const cancelUrl = window.location.origin + '/mon_rdv?success=0';

                      const res = await fetch('http://localhost:8000/api/stripe/create-checkout-session', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                          amount: 5000,
                          currency: 'eur',
                          success_url: successUrl,
                          cancel_url: cancelUrl
                        })
                      });
                      const data = await res.json();
                      if (res.ok && data.url) {
                        // Stocke les infos nécessaires dans le localStorage
                        localStorage.setItem('rdvToBook', JSON.stringify({
                          expertId: expert._id,
                          slot,
                          duree,
                          specialty
                        }));
                        window.location.href = data.url;
                      } else {
                        setStripeError(data.message || "Erreur lors de la création de la session de paiement.");
                      }
                    } catch (err) {
                      setStripeError("Erreur réseau ou Stripe.");
                    } finally {
                      setStripeLoading(false);
                    }
                  }}
                >
                  {stripeLoading ? "Redirection vers Stripe..." : "Payer avec Stripe"}
                </button>
                {stripeError && <span className="text-red-500 mt-2">{stripeError}</span>}
              </div>
            )}
          </div>

          <div className={`flex bg-maincolor/5 rounded-xl flex-col px-10 py-8 ${montserrat.className}`}>
            <span className={` text-gray-800 text-[23px] mb-6 ${montserrat_semi.className}`}>Récapitulatif de votre RDV</span>
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-4 mb-4">
                  <div className="flex items-center justify-center relative w-[120px] h-[120px] rounded-full overflow-hidden">
                    <Image src="/experts/portrait-home.jpg" fill alt="Expert" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className={` text-gray-800 text-[20px] mb-2 ${montserrat_bold.className}`}>{expert.firstName} {expert.lastName}</span>
                    <span className={` text-gray-800 text-[14px] mb-2`}>51 avis</span>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1 py-4 border-b border-t border-gray-200">
                  <span className={` text-gray-800 text-[14px] ${montserrat_bold.className}`}>Lieu de la consultation</span>
                  <span className={` text-gray-800 text-[14px]`}>{expert.adressrdv} 251 bis boulevard de la République</span>
                </div>
                <div className="flex flex-col gap-y-1 py-4 border-b border-gray-200">
                  <span className={` text-gray-800 text-[14px] ${montserrat_bold.className}`}>Dates et heures</span>
                  <span className={` text-gray-800 text-[14px]`}>{slot.start} à {slot.end} le {slot.date}</span>
                </div>
                <div className="flex flex-col gap-y-1 py-4">
                  <span className={` text-gray-800 text-[14px] ${montserrat_bold.className}`}>Type de consultation</span>
                  <span className={` text-gray-800 text-[14px]`}>{specialty}</span>
                </div>
                {/* <button onClick={reserverCreneau} className={`flex items-center justify-center bg-maincolor text-white rounded-full px-4 py-2 mt-2 ${montserrat_bold.className}`}>Valider</button> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
