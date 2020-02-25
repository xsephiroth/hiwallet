import React, { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import './NumericIME.scss';

const NumericIME = ({ initialValue = '', onChange, show, onExit }) => {
  const [value, setValue] = useState(initialValue);

  const handleNumClick = v => {
    if (v === '0' && (value === '') | '0.') return;
    if (v === '.' && value.indexOf('.') !== -1) return;

    let f = '';
    if (v === '.' && value === '') {
      f = '0.';
    } else {
      f += value + v;
    }

    setValue(f);
    onChange && onChange(f);
  };

  const handleDelClick = () => {
    const len = value.length;
    if (len > 0) {
      const f = value.substring(0, len - 1);
      setValue(f);
      onChange && onChange(f);
    }
  };

  return (
    <div className={classnames('numeric-ime', { show })}>
      <button className="num" onClick={() => handleNumClick('1')}>
        1
      </button>
      <button className="num" onClick={() => handleNumClick('2')}>
        2
      </button>
      <button className="num" onClick={() => handleNumClick('3')}>
        3
      </button>
      <button className="del" onClick={handleDelClick}>
        <FontAwesomeIcon icon={faBackspace} />
      </button>
      <button className="num" onClick={() => handleNumClick('4')}>
        4
      </button>
      <button className="num" onClick={() => handleNumClick('5')}>
        5
      </button>
      <button className="num" onClick={() => handleNumClick('6')}>
        6
      </button>
      <button className="enter" onClick={onExit}>
        确定
      </button>
      <button className="num" onClick={() => handleNumClick('7')}>
        7
      </button>
      <button className="num" onClick={() => handleNumClick('8')}>
        8
      </button>
      <button className="num" onClick={() => handleNumClick('9')}>
        9
      </button>
      <button className="zero" onClick={() => handleNumClick('0')}>
        0
      </button>
      <button className="dot" onClick={() => handleNumClick('.')}>
        .
      </button>
    </div>
  );
};

export default React.memo(NumericIME);
