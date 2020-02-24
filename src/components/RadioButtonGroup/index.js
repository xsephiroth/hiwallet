import React from 'react';
import classnames from 'classnames';
import './RadioButtonGroup.scss';

const RadioButtonGroup = ({ data, value, onChange }) => {
  const name = Math.random();

  return (
    <div className="radio-group">
      {data?.map(r => (
        <label
          key={r.value}
          className={classnames('radio-btn', { checked: r.value === value })}
        >
          <input type="radio" name={name} value={r.value} onChange={onChange} />
          {r.text}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
