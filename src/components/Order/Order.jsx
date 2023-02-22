import React from 'react'
import _ from './Order.module.scss'
import cn from 'classnames'

const Order = () => {
  return (
    <div className={cn(_.catalog__order, _.order)}>
      <section className={_.order__wrapper}>
        <div className={_.order__header} tabIndex="0" role="button">
          <h2 className={_.order__title}>Корзина</h2>

          <span className={_.order__count}>4</span>
        </div>

        <div className={_.order__wrap_list}>
          <ul className={_.order__list}>
            <li className={_.order__item}>
              <img className={_.order__image} src="img/burger_1.jpg" alt="Супер сырный" />

              <div className={cn(_.order__goods, _.goods)}>
                <h3 className={_.goods__title}>Супер сырный</h3>

                <p className={_.goods__weight}>512г</p>

                <p className={_.goods__price}>1279
                  <span className={_.currency}>₽</span>
                </p>
              </div>

              <div className={_.count}>
                <button className={_.count__minus}>-</button>
                <p className={_.count__amount}>1</p>
                <button className={_.count__plus}>+</button>
              </div>
            </li>

            <li className={_.order__item}>
              <img className={_.order__image} src="img/free_1.jpg" alt="Картошка фри" />

              <div className={cn(_.order__goods, _.goods)}>
                <h3 className={_.goods__title}>Картошка фри</h3>

                <p className={_.goods__weight}>180г</p>

                <p className={_.goods__price}>245
                  <span className={_.currency}>₽</span>
                </p>
              </div>

              <div className={_.count}>
                <button className={_.count__minus}>-</button>
                <p className={_.count__amount}>2</p>
                <button className={_.count__plus}>+</button>
              </div>
            </li>

            <li className={_.order__item}>
              <img className={_.order__image} src="img/hot-dog_1.jpg" alt="Жгучий хот-дог" />

              <div className={cn(_.order__goods, _.goods)}>
                <h3 className={_.goods__title}>Жгучий хот-дог</h3>

                <p className={_.goods__weight}>245г</p>

                <p className={_.goods__price}>239
                  <span className={_.currency}>₽</span>
                </p>
              </div>

              <div className={_.count}>
                <button className={_.count__minus}>-</button>
                <p className={_.count__amount}>1</p>
                <button className={_.count__plus}>+</button>
              </div>
            </li>
          </ul>

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
