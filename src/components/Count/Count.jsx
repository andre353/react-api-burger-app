import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../store/cart/cartSlice';
import _ from './Count.module.scss';

const Count = ({count, id}) => {
  const dispatch = useDispatch()

  const addCount = () => {
    dispatch(addProduct({id}));
  };
  
  const removeCount = () => {
    dispatch(removeProduct({id}));
  }

  return (
    <div className={_.count}>
      {/* <button className={_.count__minus} onClick={removeCount} disabled={count === 1}>-</button> */}
      <button className={_.count__minus} onClick={removeCount}>-</button>
      <p className={_.count__amount}>{count}</p>
      <button className={_.count__plus} onClick={addCount}>+</button>
    </div>
  );
};

export default Count;
