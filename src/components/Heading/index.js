import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Heading.scss';

const Icon = ({ icon, onClick }) => {
  return (
    <div className="icon" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

const Heading = ({ start, end, title }) => {
  return (
    <div className="heading">
      <div className="start">{start}</div>
      <div className="title">{title}</div>
      <div className="end">{end}</div>
    </div>
  );
};

Heading.Icon = Icon;

export default Heading;
