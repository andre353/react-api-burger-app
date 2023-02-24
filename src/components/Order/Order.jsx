import React from 'react'
import _ from './Order.module.scss'
import OrderGoods from '../OrderGoods/OrderGoods';

const OrderList = [
  "Супер сырный", "Картошка фри", "Жгучий хот-дог"
];

const Order = () => {
  return (
    <div className={_.order}>
      <section className={_.order__wrapper}>
        <div className={_.order__header} tabIndex="0" role="button">
          <h2 className={_.order__title}>Корзина</h2>

          <span className={_.order__count}>4</span>
        </div>

        <div className={_.order__wrap_list}>
          <OrderGoods orderList={OrderList}/>

          <div className={_.order__total}>
            <p>Итого</p>
            <p>
              <span className={_.order__amount}>1279</span>
              <span className={_.currency}>₽</span>
            </p>
          </div>

          <button className={_.order__submit}>Оформить заказ</button>

          <div className={_.order__apeal}>
            <p className={_.order__text}>Бесплатная доставка</p>
            <button className={_.order__close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order
