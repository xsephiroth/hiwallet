import React from 'react';
import classnames from 'classnames';
import './Layout.scss';
import NavigationTabs from '../NavigationTabs';

const Layout = ({ children, hideTabs = false, ...restProps }) => {
  return (
    <div className={classnames('layout', { full: hideTabs })} {...restProps}>
      {children}
      {!hideTabs && <NavigationTabs />}
    </div>
  );
};

export default Layout;
