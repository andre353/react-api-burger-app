import React from 'react'
import { API_URI } from '../../consts'
import _ from './Product.module.scss'

const Product = ({item}) => {
  const Good = item.category ? (
    <article className={_.product}>
      <img
        src={`${API_URI}${item.image}`}
        alt={item.title}
        className={_.product__image}
      />

      <p className={_.product__price}>
        {item.price}<span className={_.currency}>₽</span>
      </p>

      <h3 className={_.product__title}>
        <button className={_.product__detail}>{item.title}</button>
      </h3>

      <p className={_.product__weight}>{item.weight}г</p>

      <button className={_.product__add} type='button'>
        Добавить
      </button>
    </article>
  ) : 'Товар закончился'
  return Good
}

export default Product
