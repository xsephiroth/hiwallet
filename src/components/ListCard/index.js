import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ListCard.scss';

const ListCardItem = ({ icon, title, subtext, income, expenditure }) => {
  const toFixed = v => (v % 1 === 0 ? v : v.toFixed(2));

  return (
    <div className="item">
      <div className="item__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="item__content">
        <h4 className="item__content__title">{title}</h4>
        <p className="item__content__subtext">{subtext}</p>
      </div>
      <div className={classnames({ income, expenditure })}>
        {income ? toFixed(income) : toFixed(expenditure)}
      </div>
    </div>
  );
};

const ListCard = ({ start, end, children }) => {
  return (
    <div className="list-card">
      <ul className="container list-card__header">
        <li className="list-card__header__start">{start}</li>
        <li className="list-card__header__end">{end}</li>
      </ul>
      {children}
    </div>
  );
};

export { ListCard, ListCardItem };
