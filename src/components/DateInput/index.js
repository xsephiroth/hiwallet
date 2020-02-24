import React from 'react';
import './DateInput.scss';

const DateInput = ({ value, onChange }) => {
  return (
    <div className="datepicker">
      <span>{value}</span>
      <input className="picker" type="date" value={value} onChange={onChange} />
    </div>
  );
};

export default DateInput;
