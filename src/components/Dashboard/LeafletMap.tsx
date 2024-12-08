import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const markers = [
    { id: 1, position: [51.505, -0.09], name: 'Marker 1', description: 'Description for Marker 1' },
    { id: 2, position: [51.515, -0.1], name: 'Marker 2', description: 'Description for Marker 2' },
    { id: 3, position: [51.525, -0.11], name: 'Marker 3', description: 'Description for Marker 3' },
];

const LeafletMap = ({ onMarkerSelect }) => {
    const handleMarkerClick = (marker) => {
        onMarkerSelect(marker);
    };

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker) => (
                <Marker
                    key={marker.id}
                    position={marker.position}
                    eventHandlers={{
                        click: () => handleMarkerClick(marker),
                    }}
                >
                    <Popup>
                        {marker.name}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default LeafletMap;
