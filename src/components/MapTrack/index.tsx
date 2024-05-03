import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Leaflet from "leaflet";

import pathIconPosition from "../../assets/images/icon-location.svg";

interface MapTrackProps {
  lat: number;
  lng: number;
}

const IconCustom = new Leaflet.Icon({
  iconUrl: pathIconPosition,
  iconSize: [30, 40]
});

export const MapTrack = ({ lat, lng }: MapTrackProps) => {
  return (
    <MapContainer className="h-[90vh] z-10" center={[lat, lng]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={IconCustom} />
    </MapContainer>
  );
};
