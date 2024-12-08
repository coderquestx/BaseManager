import React, { useEffect } from 'react';
import SkyconsInit from 'skycons';

const SkyconsComponent: React.FC = () => {
  useEffect(() => {
    const Skycons = SkyconsInit(window);
    const icons = new Skycons({ color: '#ff6849' });
    const list = [
      'clear-day',
      'clear-night',
      'partly-cloudy-day',
      'partly-cloudy-night',
      'cloudy',
      'rain',
      'sleet',
      'snow',
      'wind',
      'fog',
    ];

    list.forEach(weatherType => {
      const elements = document.getElementsByClassName(weatherType);
      Array.from(elements).forEach(el => {
        icons.set(el, weatherType);
      });
    });

    icons.play();

    return () => {
      icons.stop();
    };
  }, []);

  return (
      <div>
        {[
          'clear-day',
          'clear-night',
          'partly-cloudy-day',
          'partly-cloudy-night',
          'cloudy',
          'rain',
          'sleet',
          'snow',
          'wind',
          'fog',
        ].map((type) => (
            <canvas key={type} className={type} width="100" height="100"></canvas>
        ))}
      </div>
  );
};

export default SkyconsComponent;
