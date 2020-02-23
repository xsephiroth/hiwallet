import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CategoryButton.scss';

const CategoryButton = ({ icon, choice = false, children, ...restProps }) => {
  return (
    <button className="category-button" {...restProps}>
      <label className={classnames({ choice })}>
        <FontAwesomeIcon icon={icon} />
      </label>
      <span>{children}</span>
    </button>
  );
};

export default CategoryButton;
