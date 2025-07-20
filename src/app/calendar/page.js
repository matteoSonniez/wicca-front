"use client";
import { useState, useEffect } from "react";

function getNextDays(nbDays) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < nbDays; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

function formatDay(date) {
  return date.toLocaleDateString('fr-FR', { weekday: 'long' });
}
function formatDate(date) {
  return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
}
function formatHour(date) {
  return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

export default function Page() {
  const [availabilities, setAvailabilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const nbDays = 3;
  const days = getNextDays(nbDays);

  useEffect(() => {
    async function fetchAvailabilities() {
      try {
        const res = await fetch("http://localhost:8000/api/calendar/6878f8a91839589951a418f2");
        if (!res.ok) throw new Error("Erreur lors du chargement des disponibilités");
        const data = await res.json();
        setAvailabilities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAvailabilities();
  }, []);

  // Grouper les créneaux par jour (clé: yyyy-mm-dd)
  const slotsByDay = {};
  days.forEach(day => {
    const key = day.toISOString().slice(0, 10);
    slotsByDay[key] = [];
  });
  availabilities.forEach(a => {
    const d = new Date(a.start);
    const key = d.toISOString().slice(0, 10);
    if (slotsByDay[key] && !a.isBooked) {
      slotsByDay[key].push(a);
    }
  });

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Disponibilités</h1>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 12px', textAlign: 'center' }}>
            <thead>
              <tr>
                {days.map((day, idx) => (
                  <th key={idx} style={{ color: '#2d3c4a', fontWeight: 700, fontSize: 18, paddingBottom: 4 }}>
                    {formatDay(day)}<br />
                    <span style={{ fontWeight: 400, fontSize: 16 }}>{formatDate(day)}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* On affiche jusqu'à 4 lignes de créneaux max */}
              {[0,1,2,3].map(rowIdx => (
                <tr key={rowIdx}>
                  {days.map((day, colIdx) => {
                    const key = day.toISOString().slice(0, 10);
                    const slots = slotsByDay[key] || [];
                    const slot = slots[rowIdx];
                    return (
                      <td key={colIdx} style={{ padding: 8 }}>
                        {slot ? (
                          <div style={{
                            background: '#eaf7fd',
                            color: '#22334a',
                            borderRadius: 12,
                            fontWeight: 700,
                            fontSize: 18,
                            padding: '10px 0',
                            margin: '0 auto',
                            minWidth: 80,
                            maxWidth: 100,
                            boxShadow: '0 1px 4px #0001',
                          }}>
                            {formatHour(new Date(slot.start))}
                          </div>
                        ) : (
                          <span style={{ color: '#7a8ca3', fontSize: 22 }}>–</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
