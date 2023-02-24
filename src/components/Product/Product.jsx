import React from 'react';
import { useDispatch } from 'react-redux';
import { API_URI } from '../../consts';
import { addProduct } from '../../store/order/orderSlice';
import _ from './Product.module.scss';

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const card = item.category ? (
    <article className={_.product}>
      <img
        src={`${API_URI}${item.image}`}
        alt={item.title}
        className={_.product__image}
      />

      <p className={_.product__price}>
        {item.price}
        <span className={_.currency}>₽</span>
      </p>

      <h3 className={_.product__title}>
        <button className={_.product__detail}>{item.title}</button>
      </h3>

      <p className={_.product__weight}>{item.weight}г</p>

      <button
        className={_.product__add}
        type='button'
        onClick={() => {
          dispatch(addProduct({id: item.id}))
        }}
      >Добавить</button>
    </article>
  ) : (
    'Товар закончился'
  );
  return card;
};

export default Product;
