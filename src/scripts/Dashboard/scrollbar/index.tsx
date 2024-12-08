import React, { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const ScrollableContainer: React.FC = () => {
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const element = scrollableRef.current;
    if (element) {
      const ps = new PerfectScrollbar(element);

      return () => {
        ps.destroy();
      };
    }
  }, []);

  return (
      <div className="scrollable" ref={scrollableRef}>
      </div>
  );
};

export default ScrollableContainer;
