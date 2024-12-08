import React, { useState, useRef } from 'react';

const SearchToggle: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsActive(!isActive);

    if (!isActive && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
      <div>
        <a href="#" className="search-toggle" onClick={handleToggle}>
          Toggle Search
        </a>
        <div className={`search-box ${isActive ? 'active' : ''}`}>
          <div className={`search-input ${isActive ? 'active' : ''}`}>
            <input ref={inputRef} type="text" />
          </div>
        </div>
      </div>
  );
};

export default SearchToggle;
