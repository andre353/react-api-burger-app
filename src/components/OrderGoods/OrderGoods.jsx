import React from 'react';
import Count from '../Count/Count';
import _ from './OrderGoods.module.scss';

const OrderGoods = ({orderList}) => {
  return (
    <ul className={_.order__list}>
      {orderList.map((item, i) =>
        <li className={_.goods__item} item={item} key={i}>
          <img
            className={_.goods__image}
            src='img/burger_1.jpg'
            alt={item}
          />

          <div className={_.goods}>
            <h3 className={_.goods__title}>{item}</h3>

            <p className={_.goods__weight}>512г</p>

            <p className={_.goods__price}>
              1279
              <span className={_.currency}>₽</span>
            </p>
          </div>

          <Count count={0} />
        </li>
      )}
    </ul>  
  );
};

export default OrderGoods;
