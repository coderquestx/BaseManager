import React, { useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';

const BootstrapComponents: React.FC = () => {
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

    return () => {
      popoverList.forEach((popover) => popover.dispose());
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  return (
      <div>
        <button type="button" className="btn btn-secondary" data-bs-toggle="popover" data-bs-content="Popover content">
          Popover
        </button>

        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" title="Tooltip content">
          Tooltip
        </button>
      </div>
  );
};

export default BootstrapComponents;
