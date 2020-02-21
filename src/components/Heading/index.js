import React from 'react';
import './Heading.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Heading = ({ start, onBackClick, end, title }) => {
  return (
    <div className="heading">
      <div className="start" onClick={onBackClick}>
        {onBackClick ? (
          <div className="back">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        ) : (
          start
        )}
      </div>
      <div className="title">{title}</div>
      <div className="end">{end}</div>
    </div>
  );
};

export default Heading;
