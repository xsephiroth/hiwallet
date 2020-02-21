import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMap, faChartBar } from '@fortawesome/free-regular-svg-icons';
import './NavigationTabs.scss';

const NavigationTabs = () => {
  const history = useHistory();
  const {
    location: { pathname }
  } = history;

  return (
    <div className="navigation-tabs">
      <div className="tabs-wrapper">
        <div
          className={classnames('tab', { active: pathname === '/' })}
          onClick={useCallback(() => history.replace('/'), [history])}
        >
          <FontAwesomeIcon icon={faMap} size="2x" />
          账单
        </div>

        <div
          className={classnames('tab add', { active: pathname === '/add' })}
          onClick={useCallback(() => history.replace('/add'), [history])}
        >
          <FontAwesomeIcon icon={faPlusCircle} size="3x" />
          记一笔
        </div>

        <div
          className={classnames('tab', { active: pathname === '/wallet' })}
          onClick={useCallback(() => history.replace('/wallet'), [history])}
        >
          <FontAwesomeIcon icon={faChartBar} size="2x" />
          统计
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
