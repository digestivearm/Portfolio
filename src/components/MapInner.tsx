import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const SURAT: [number, number] = [21.174333, 72.659333];

const violetIcon = L.divIcon({
  className: "",
  html: `
    <div style="position:relative;width:36px;height:48px;transform:translate(-50%,-100%);">
      <div style="position:absolute;inset:0;display:flex;align-items:flex-start;justify-content:center;">
        <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vg" x1="0" y1="0" x2="36" y2="48" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFFFFF"/>
              <stop offset="0.6" stop-color="#D4D4D4"/>
              <stop offset="1" stop-color="#8A8A8A"/>
            </linearGradient>
          </defs>
          <path d="M18 0C8.06 0 0 8.06 0 18c0 13 18 30 18 30s18-17 18-30C36 8.06 27.94 0 18 0z" fill="url(#vg)"/>
          <circle cx="18" cy="18" r="6.5" fill="#191919"/>
        </svg>
      </div>
      <div style="position:absolute;left:50%;bottom:-6px;width:24px;height:8px;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(255,255,255,0.35),transparent);filter:blur(2px);"></div>
    </div>
  `,
  iconSize: [36, 48],
  iconAnchor: [18, 48],
});

export default function MapInner() {
  return (
    <MapContainer
      center={SURAT}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", background: "#191919" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={SURAT} icon={violetIcon}>
        <Popup>Surat, Gujarat, India</Popup>
      </Marker>
    </MapContainer>
  );
}
