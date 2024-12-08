import React from 'react';
import { VectorMap } from 'react-jvectormap';
import 'react-jvectormap/lib/react-jvectormap.css';

const mapOptions = {
  map: 'world_mill',
  backgroundColor: '#fff',
  borderColor: '#fff',
  borderOpacity: 0.25,
  borderWidth: 0,
  color: '#e6e6e6',
  regionStyle: {
    initial: {
      fill: '#e4ecef',
    },
  },
  markerStyle: {
    initial: {
      r: 7,
      fill: '#fff',
      fillOpacity: 1,
      stroke: '#000',
      strokeWidth: 2,
      strokeOpacity: 0.4,
    },
  },
  markers: [
    { latLng: [21.00, 78.00], name: 'INDIA : 350' },
    { latLng: [-33.00, 151.00], name: 'Australia : 250' },
    { latLng: [36.77, -119.41], name: 'USA : 250' },
    { latLng: [55.37, -3.41], name: 'UK : 250' },
    { latLng: [25.20, 55.27], name: 'UAE : 250' }
  ],
  series: {
    regions: [{
      values: {
        'US': 298,
        'SA': 200,
        'AU': 760,
        'IN': 200,
        'GB': 120,
      },
      scale: ['#03a9f3', '#02a7f1'],
      normalizeFunction: 'polynomial',
    }],
  },
  hoverOpacity: null,
  normalizeFunction: 'linear',
  zoomOnScroll: false,
  scaleColors: ['#b6d6ff', '#005ace'],
  selectedColor: '#c9dfaf',
  selectedRegions: [],
  enableZoom: false,
  hoverColor: '#fff',
};

const WorldMap: React.FC = () => (
    <div
        id="world-map-marker"
        style={{
          height: '490px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
    >
      <VectorMap
          map="world_mill"
          {...mapOptions}
      />
    </div>
);

export default WorldMap;
