import React from 'react';
import _ from './Count.module.scss';

const Count = ({count}) => {
  return (
    <div className={_.count}>
      <button className={_.count__minus}>-</button>
      <p className={_.count__amount}>{count}</p>
      <button className={_.count__plus}>+</button>
    </div>
  );
};

export default Count;
