import React from 'react';
import style from './Container.module.scss';
import cn from 'classnames';

const Container = ({ className, children }) => {
  return <div className={cn(style.container, className)}>{children}</div>;
};

export default Container;
