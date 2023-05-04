import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Leaflet.css';

const Leaflet = () => {
  const restaurantTileLayer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }
  );

  return (
    <div className="w-full h-96">
      <MapContainer
        center={[40.7128, -74.006]}
        zoom={15}
        className="w-full h-full"
      >
        <TileLayer url={restaurantTileLayer._url} />
        <Marker position={[40.7128, -74.006]}>
          <Popup>
            Welcome to our restaurant! <br /> We are located here.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Leaflet;
