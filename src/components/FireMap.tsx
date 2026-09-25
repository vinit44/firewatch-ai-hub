import { useEffect, useRef } from "react";
import type { Hotspot } from "@/lib/hotspots";

interface FireMapProps {
  events: Hotspot[];
  selectedId?: string;
  onSelect: (event: Hotspot) => void;
  compact?: boolean;
}

const riskColors = { Critical: "#ef4444", High: "#f97316", Medium: "#eab308", Low: "#22c55e" };

export default function FireMap({ events, selectedId, onSelect, compact = false }: FireMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef(onSelect);
  selectRef.current = onSelect;

  useEffect(() => {
    const element = mapRef.current;
    if (!element) return;
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    void import("leaflet").then((L) => {
      if (cancelled || !element) return;
      map = L.map(element, { zoomControl: false, attributionControl: true }).setView(compact ? [21.3, 78.7] : [22.2, 79.2], compact ? 4 : 5);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);
      L.control.zoom({ position: "bottomright" }).addTo(map);
      events.forEach((event) => {
        const selected = event.id === selectedId;
        const marker = L.circleMarker([event.lat, event.lng], {
          radius: selected ? 12 : event.risk === "Critical" ? 9 : 7,
          fillColor: riskColors[event.risk], color: selected ? "#f8fafc" : riskColors[event.risk],
          weight: selected ? 3 : 1, opacity: 1, fillOpacity: .88,
        }).addTo(map as import("leaflet").Map);
        marker.bindTooltip(`<strong>${event.name}</strong><br/>${event.risk} · Score ${event.score}<br/><small>Simulated detection</small>`, { direction:"top" });
        marker.on("click", () => selectRef.current(event));
      });
      setTimeout(() => map?.invalidateSize(), 100);
    });
    return () => { cancelled = true; map?.remove(); };
  }, [events, selectedId, compact]);

  return <div ref={mapRef} className="h-full w-full bg-map" aria-label="Interactive simulated hotspot map of India" />;
}