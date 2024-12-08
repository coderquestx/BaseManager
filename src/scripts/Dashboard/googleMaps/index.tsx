import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, useGoogleMap } from '@react-google-maps/api';

const MapContainer: React.FC = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = mapRef.current;

    if (map) {
      const latitude = 26.8206;
      const longitude = 30.8025;
      const mapZoom = 5;

      map.setOptions({
        center: { lat: latitude, lng: longitude },
        zoom: mapZoom,
        styles: [
          {
            featureType: 'landscape',
            stylers: [
              { hue: '#FFBB00' },
              { saturation: 43.4 },
              { lightness: 37.6 },
              { gamma: 1 },
            ],
          },
          {
            featureType: 'road.highway',
            stylers: [
              { hue: '#FFC200' },
              { saturation: -61.8 },
              { lightness: 45.6 },
              { gamma: 1 },
            ],
          },
          {
            featureType: 'road.arterial',
            stylers: [
              { hue: '#FF0300' },
              { saturation: -100 },
              { lightness: 51.2 },
              { gamma: 1 },
            ],
          },
          {
            featureType: 'road.local',
            stylers: [
              { hue: '#FF0300' },
              { saturation: -100 },
              { lightness: 52 },
              { gamma: 1 },
            ],
          },
          {
            featureType: 'water',
            stylers: [
              { hue: '#0078FF' },
              { saturation: -13.2 },
              { lightness: 2.4 },
              { gamma: 1 },
            ],
          },
          {
            featureType: 'poi',
            stylers: [
              { hue: '#00FF6A' },
              { saturation: -1.1 },
              { lightness: 11.2 },
              { gamma: 1 },
            ],
          },
        ],
      });

      new google.maps.Marker({
        map,
        position: { lat: latitude, lng: longitude },
        visible: true,
      });
    }
  }, []);

  return (
      <LoadScript googleMapsApiKey="AIzaSyDW8td30_gj6sGXjiMU0ALeMu1SDEwUnEA">
        <GoogleMap
            id="google-map"
            mapContainerStyle={{ height: '100vh', width: '100%' }}
            options={{ disableDefaultUI: true }}
            onLoad={map => (mapRef.current = map)}
        />
      </LoadScript>
  );
};

export default MapContainer;
