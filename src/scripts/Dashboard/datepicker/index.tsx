import React, { useEffect } from 'react';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';

const DatePickerComponent: React.FC = () => {
  useEffect(() => {
    const startDateElement = document.querySelector('.start-date');
    const endDateElement = document.querySelector('.end-date');

    if (startDateElement) {
      (window as any).$(startDateElement).datepicker();
    }
    if (endDateElement) {
      (window as any).$(endDateElement).datepicker();
    }

    return () => {
      if (startDateElement) {
        (window as any).$(startDateElement).datepicker('destroy');
      }
      if (endDateElement) {
        (window as any).$(endDateElement).datepicker('destroy');
      }
    };
  }, []);

  return (
      <>
        <input type="text" className="start-date" placeholder="Start Date" />
        <input type="text" className="end-date" placeholder="End Date" />
      </>
  );
};

export default DatePickerComponent;
