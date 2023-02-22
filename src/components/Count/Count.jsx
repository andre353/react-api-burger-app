import React, { useState } from 'react';
import _ from './Count.module.scss';

const Count = ({count}) => {
  const [counter, setCount] = useState(count)

  const addCount = () => {
    setCount(counter => counter + 1);
  }

  const removeCount = () => {
    if (counter > 1) {
      setCount(counter => counter - 1);
    }
  }

  return (
    <div className={_.count}>
      <button className={_.count__minus} onClick={removeCount} disabled={count === 1}>-</button>
      <p className={_.count__amount}>{counter}</p>
      <button className={_.count__plus} onClick={addCount}>+</button>
    </div>
  );
};

export default Count;
