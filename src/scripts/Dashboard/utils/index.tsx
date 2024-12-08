import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {

    const resizeEvent = new Event('resize');

    window.dispatchEvent(resizeEvent);

    const updateExternalLinks = () => {
      document.querySelectorAll('a[href^="http"], a[href^="//"]').forEach(anchor => {
        if (!anchor.href.includes(window.location.host)) {
          anchor.setAttribute('rel', 'noopener noreferrer');
          anchor.setAttribute('target', '_blank');
        }
      });
    };

    updateExternalLinks();

    const handleClick = () => {
      window.dispatchEvent(resizeEvent);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
      <div>

      </div>
  );
};

export default App;
