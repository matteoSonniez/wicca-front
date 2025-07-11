"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

function base64URLEncode(str) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const hash = await window.crypto.subtle.digest("SHA-256", data);
  return hash;
}

export default function Page() {
  // À remplacer par tes variables d'env ou depuis le backend en prod !
  const CALENDLY_CLIENT_ID = "Pllb7IjwFP6rz2DiiULQ1g6XljyAfys6XYcT98HWbNk";
  const REDIRECT_URI = "http://localhost:8000/api/calendly/callback";

  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleCalendlyConnect = async () => {
    // Générer code_verifier
    const code_verifier = [...Array(64)].map(() => Math.random().toString(36)[2]).join("");
    // Stocker dans sessionStorage
    localStorage.setItem("calendly_code_verifier", code_verifier);
    // Générer code_challenge
    const hashed = await sha256(code_verifier);
    const code_challenge = base64URLEncode(hashed);
    // Construire l’URL d’authentification
    const calendlyAuthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${CALENDLY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=default&code_challenge=${code_challenge}&code_challenge_method=S256`;
    window.location.href = calendlyAuthUrl;
  };

  // Gestion du callback Calendly
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      const code_verifier = "T1tacz3oafVOrj5ZGO-FVPHzGpCAcZDAahmH5MAcs4M";
      if (!code_verifier) {
        setMessage("Erreur : code_verifier introuvable dans le navigateur.");
        return;
      }
      fetch("http://localhost:8000/api/calendly/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, code_verifier }),
      })
        .then(async (res) => {
          if (res.ok) {
            setMessage("Connexion Calendly réussie !");
          } else {
            const data = await res.text();
            setMessage("Erreur backend : " + data);
          }
        })
        .catch((err) => {
          setMessage("Erreur réseau : " + err.message);
        });
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold">Connecte ton Calendly</h1>
      <p className="text-gray-600">
        Pour permettre à l’application de synchroniser tes disponibilités.
      </p>
      <button
        onClick={handleCalendlyConnect}
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition"
      >
        Connecter mon Calendly
      </button>
      {message && (
        <div className="mt-4 text-center text-red-500">{message}</div>
      )}
    </div>
  );
}
