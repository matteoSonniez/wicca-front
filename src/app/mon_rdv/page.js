"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Page() {
  const [success, setSuccess] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);
  const [bookingError, setBookingError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setSuccess(params.get("success"));

      // Si paiement validé, tente de réserver le créneau
      if (params.get("success") === "1") {
        const rdvData = localStorage.getItem("rdvToBook");
        if (rdvData) {
          const { expertId, slot, duree, specialty } = JSON.parse(rdvData);
          const token = Cookies.get("token");

          fetch("http://localhost:8000/api/calendar/bookSlot", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
              expertId,
              date: slot.date,
              start: slot.start,
              duration: duree,
              specialty
            })
          })
            .then(res => res.json())
            .then(data => {
              if (data && data.message && data.message.includes("réservé")) {
                setBookingDone(true);
                localStorage.removeItem("rdvToBook");
              } else {
                setBookingError(data.message || "Erreur lors de la réservation.");
              }
            })
            .catch(() => setBookingError("Erreur réseau lors de la réservation."));
        }
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {success === "1" ? (
        <div className="bg-white p-8 rounded shadow text-center">
          <h1 className="text-2xl font-bold text-maincolor mb-4">Rendez-vous confirmé !</h1>
          {bookingDone ? (
            <p className="text-lg text-gray-700">Votre paiement a bien été validé et votre rendez-vous est confirmé.</p>
          ) : bookingError ? (
            <p className="text-lg text-red-500">{bookingError}</p>
          ) : (
            <p className="text-lg text-gray-700">Réservation en cours...</p>
          )}
        </div>
      ) : success === "0" ? (
        <div className="bg-white p-8 rounded shadow text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Paiement annulé</h1>
          <p className="text-lg text-gray-700">Votre paiement n'a pas été validé. Veuillez réessayer.</p>
        </div>
      ) : null}
    </div>
  );
}
