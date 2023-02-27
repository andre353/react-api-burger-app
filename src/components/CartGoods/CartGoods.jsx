import React from 'react';
import { API_URI } from '../../consts';
import Count from '../Count/Count';
import _ from './CartGoods.module.scss';

const CartGoods = ({cartGoods}) => {
  return (
    <ul className={_.order__list}>
      {cartGoods.map(({title, price, id, image, count, weight}) =>
        <li className={_.goods__item} key={id}>
          <img
            className={_.goods__image}
            src={`${API_URI}${image}`}
            alt={title}
          />

          <div className={_.goods}>
            <h3 className={_.goods__title}>{title}</h3>

            <p className={_.goods__weight}>{weight}г</p>

            <p className={_.goods__price}>
              {price}
              <span className={_.currency}>&nbsp;₽</span>
            </p>
          </div>

          <Count count={count} id={id}/>
        </li>
      )}
    </ul>  
  );
};

export default CartGoods;
