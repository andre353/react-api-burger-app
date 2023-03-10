import React, { useEffect, useState } from 'react';
import _ from './Cart.module.scss';
import CartGoods from '../CartGoods/CartGoods';
import { useDispatch, useSelector } from 'react-redux';
import { cartRequestAsync } from '../../store/cart/cartSlice';
import { openModal } from '../../store/modalDelivery/modalDeliverySlice';
import cn from 'classnames';

const Cart = () => {
  const { totalPrice, totalCount, cartList, cartGoods } = useSelector(
    (state) => state.cart,
  );
  const dispatch = useDispatch();

  const [isCartOpen, setIsCartOpen] = useState(false);
  // console.log('isCartOpen', isCartOpen);

  useEffect(() => {
    dispatch(cartRequestAsync()); // функтор=функциональный объект
  }, [cartList.length]);

  return (
    <div className={cn(_.order, isCartOpen ? _.order_open : '')}>
      <section className={_.order__wrapper}>
        <div className={_.order__header}
          tabIndex='0'
          role='button'
          onClick={() => {
            setIsCartOpen((isCartOpen) => !isCartOpen)
          }}
        >
          <h2 className={_.order__title}>Корзина</h2>

          <span className={_.order__count}>{totalCount}</span>
        </div>

        <div className={_.order__wrap_list}>
          <CartGoods cartGoods={cartGoods} />

          <div className={_.order__total}>
            <p>Итого</p>
            <p>
              <span className={_.order__amount}>{totalPrice}</span>
              <span className={_.currency}>&nbsp;₽</span>
            </p>
          </div>

          <button
            className={_.order__submit}
            disabled={cartGoods.length === 0}
            onClick={() => {
              dispatch(openModal())
            }}
          >
            Оформить заказ
          </button>

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
