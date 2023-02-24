import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URI } from '../../consts';
import { addProduct } from '../../store/order/orderSlice';

import _ from './Cards.module.scss';

const Cards = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const cards = products.length ? (
    <ul className={_.product__list}>
      {products.map((item) => (
        <li key={item.id}>
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
                dispatch(addProduct({ id: item.id }));
              }}
            >
              Добавить
            </button>
          </article>
        </li>
      ))}
    </ul>
  ) : (
    <h3>Приносим извинения, товар закончился.</h3>    
  );
  return cards;
};

export default Cards;
