import React from 'react';
import './InfoCard.scss';

const InfoCard = ({ children, bg, style, ...props }) => (
  <div
    className="info-card"
    style={{
      ...style,
      backgroundImage: `url(${bg})`
    }}
    {...props}
  >
    {children}
  </div>
);

export default InfoCard;
