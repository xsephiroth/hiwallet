import React, { useMemo } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CategoryButton.scss';

const CategoryButton = ({ icon, choice = false, children, onClick }) => {
  const Icon = useMemo(() => <FontAwesomeIcon icon={icon} />, [icon]);
  return (
    <button className="category-button" onClick={onClick}>
      <label className={classnames({ choice })}>{Icon}</label>
      <span>{children}</span>
    </button>
  );
};

export default React.memo(CategoryButton);
