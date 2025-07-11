"use client";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

export default function Page() {
  const [events, setEvents] = useState([]);

  // 2.1 Récupérer les événements depuis le backend
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/events`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Erreur fetch events:", err));
  }, []);

  // 2.2 Gestion de la sélection
  const handleDateSelect = (selectInfo) => {
    const title = prompt("Titre de l'événement :");
    selectInfo.view.calendar.unselect();
    if (title) {
      const newEvent = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };
      // Envoie au back
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/events`, newEvent)
        .then((res) => {
          selectInfo.view.calendar.addEvent({
            id: res.data._id, // ou `id` selon ton modèle
            ...newEvent,
          });
        })
        .catch((err) => console.error("Erreur création event :", err));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        events={events}
        select={handleDateSelect}
        eventChange={(changeInfo) => {
          const e = changeInfo.event;
          axios
            .put(`${process.env.NEXT_PUBLIC_API_URL}/events/${e.id}`, {
              title: e.title,
              start: e.start.toISOString(),
              end: e.end.toISOString(),
            })
            .catch((err) =>
              console.error("Erreur mise à jour event :", err)
            );
        }}
        eventRemove={(removeInfo) => {
          axios
            .delete(
              `${process.env.NEXT_PUBLIC_API_URL}/events/${removeInfo.event.id}`
            )
            .catch((err) => console.error("Erreur suppression event :", err));
        }}
        height="auto"
      />
    </div>
  );
}
