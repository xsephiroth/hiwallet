import React from 'react';
import './DateInput.scss';

const DateInput = ({ value, onChange }) => {
  return (
    <div className="datepicker">
      <input className="picker" type="date" value={value} onChange={onChange} />
      <span>{value}</span>
    </div>
  );
};

export default DateInput;
