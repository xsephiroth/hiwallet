import React, { useState } from 'react';
import './DateInput.scss';

const DateInput = ({ value, onChange }) => {
  const today = value;
  const [date, setDate] = useState(today);

  const handleDateChange = e => {
    const date = e.target.value || today;
    setDate(date);
    onChange && onChange(date);
  };

  return (
    <input
      className="datepicker"
      type="date"
      value={date}
      onChange={handleDateChange}
    />
  );
};

export default DateInput;
