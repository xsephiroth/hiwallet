import React from 'react';
import './MoneyInput.scss';

const MoneyInput = ({ value, onClick }) => {
  return (
    <div className="money-input" onClick={onClick}>
      <span className="dollar-sign">￥</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default React.memo(MoneyInput);
