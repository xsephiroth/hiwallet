import React from 'react';
import classnames from 'classnames';
import './RadioButton.scss';

const RadioButtonGroup = ({ children }) => {
  return <div className="radio-group">{children}</div>;
};

const RadioButton = ({ children, name, value, checked, onChange }) => {
  return (
    <label className={classnames('radio-btn', { checked })}>
      <input type="radio" name={name} value={value} onChange={onChange} />
      {children}
    </label>
  );
};

export { RadioButton, RadioButtonGroup };
