import React from 'react';
import classnames from 'classnames';
import './Button.scss';

const Button = ({
  children,
  primary,
  secondary,
  block,
  className,
  ...restProps
}) => {
  return (
    <button
      className={classnames('btn', { primary, secondary, block }, className)}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
