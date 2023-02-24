import React, { useEffect } from 'react';
import _ from './Cart.module.scss';
import CartGoods from '../CartGoods/CartGoods';
import { useDispatch, useSelector } from 'react-redux';
import { cartRequestAsync } from '../../store/cart/cartSlice';

const CartList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог'];

const Cart = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartRequestAsync());
  }, []);

  return (
    <div className={_.order}>
      <section className={_.order__wrapper}>
        <div className={_.order__header} tabIndex='0' role='button'>
          <h2 className={_.order__title}>Корзина</h2>

          <span className={_.order__count}>{totalCount}</span>
        </div>

        <div className={_.order__wrap_list}>
          <CartGoods cartList={CartList} />

          <div className={_.order__total}>
            <p>Итого</p>
            <p>
              <span className={_.order__amount}>{totalPrice}</span>
              <span className={_.currency}>&nbsp;₽</span>
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
  );
};

export default Cart;
