import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './List.scss';

const ListItem = ({ icon, title, subtext, income, expenditure }) => {
  const toFixed = v => (v % 1 === 0 ? v : v.toFixed(2));

  return (
    <div className="item">
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="subtext">{subtext}</p>
      </div>
      <div className={classnames({ income, expenditure })}>
        {income ? toFixed(income) : toFixed(expenditure)}
      </div>
    </div>
  );
};

const List = ({ hideTabs = false, data = [] }) => {
  return (
    <div className={classnames('list', { full: hideTabs })}>
      {data && data.map(item => <ListItem key={item.id} {...item} />)}
    </div>
  );
};

export default List;
