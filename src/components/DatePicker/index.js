import React, { useState, useEffect, useRef, useMemo } from 'react';
import classnames from 'classnames';
import './DatePicker.scss';

const buildYears = (year, halfSize) => {
  const keys = [...Array(halfSize).keys()];
  const before = keys.map(k => `${parseInt(year) - k - 1}`).reverse();
  const after = keys.map(k => `${parseInt(year) + k}`);
  return [...before, ...after];
};

const buildMonths = () =>
  [...Array(12).keys()].map(m => `${m + 1}`.padStart(2, '0'));

const buildDates = (year, month) => {
  const date = new Date(parseInt(year), parseInt(month), 0);
  return [...Array(date.getDate()).keys()].map(d =>
    `${d + 1}`.padStart(2, '0')
  );
};

const Picker = ({ defaultValue, data, onChange }) => {
  const [selected, setSelected] = useState(defaultValue);
  const ref = useRef();
  useEffect(() => {
    const height = ref.current.scrollHeight ?? 0;
    if (height === 0) return;

    const matchIdx = data.findIndex(d => d === defaultValue);
    // No match index select last one
    if (matchIdx === -1) {
      setSelected(data[data.length - 1]);
      return;
    }

    const eachHeight = height / data.length;
    ref.current.scrollTop = matchIdx <= 2 ? 0 : (matchIdx - 1) * eachHeight;
  }, [ref, data, defaultValue]);

  const handleClick = e => {
    const v = e.target.innerText;
    setSelected(v);
    onChange(v);
  };

  return (
    <div className="picker">
      <div className="select" onClick={handleClick} ref={ref}>
        {data.map(d => (
          <span
            key={d}
            className={classnames('select-item', { active: selected === d })}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

const DatePicker = ({ today, onExit, onChange }) => {
  const [year, setYear] = useState(today.year);
  const [month, setMonth] = useState(today.month);
  const [date, setDate] = useState(today.date);

  const years = useMemo(() => buildYears(year, 5), [year]);
  const months = useMemo(() => buildMonths(), []);
  const dates = useMemo(() => buildDates(year, month), [year, month]);

  const handleDateUpdate = () =>
    onChange && onChange(`${year}-${month}-${date}`);

  return (
    <div className={classnames('date-time-picker')}>
      <div className="backdrop" onClick={onExit}></div>
      <div className="picker-wrapper">
        <div className="picker-body">
          <Picker
            className="year"
            defaultValue={year}
            data={years}
            onChange={y => setYear(y)}
          />
          <Picker
            defaultValue={month}
            data={months}
            onChange={m => setMonth(m)}
          />
          <Picker defaultValue={date} data={dates} onChange={d => setDate(d)} />
        </div>
        <div className="picker-footer">
          <button onClick={handleDateUpdate}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
