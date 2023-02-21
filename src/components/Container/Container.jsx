import React from 'react';
import _ from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={_.container}>{children}</div>;
};

export default Container;
