import React from 'react';
import './DatePickers.css';

const DatePickers = ({ checkinLabel, checkoutLabel }) => { // Recebe labels como props
  return (
    <div className="date-pickers">
      <div className="date-input">
        <label htmlFor="start-date">{checkinLabel}</label>
        <input type="text" id="start-date" defaultValue="08/07/2025" />
      </div>
      <div className="date-input">
        <label htmlFor="end-date">{checkoutLabel}</label>
        <input type="text" id="end-date" defaultValue="08/08/2025" />
      </div>
    </div>
  );
};

export default DatePickers;