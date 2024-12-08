import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';

const MasonryGrid: React.FC = () => {
  const masonryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (masonryRef.current) {
      const msnry = new Masonry(masonryRef.current, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
      });

      return () => {
        msnry.destroy();
      };
    }
  }, []);

  return (
      <div className="masonry" ref={masonryRef}>
        <div className="masonry-sizer"></div>
        <div className="masonry-item">Item 1</div>
        <div className="masonry-item">Item 2</div>
        <div className="masonry-item">Item 3</div>
      </div>
  );
};

export default MasonryGrid;
