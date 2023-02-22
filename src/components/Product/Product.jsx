import React from 'react'
import _ from './Product.module.scss'

const Product = ({item}) => {
  return (
    <article className={_.product}>
      <img
        src='../../assets/img/photo-5.jpg'
        alt={item.title}
        className={_.product__image}
      />

      <p className={_.product__price}>
        689<span className={_.currency}>₽</span>
      </p>

      <h3 className={_.product__title}>
        <button className={_.product__detail}>{item.title}</button>
      </h3>

      <p className={_.product__weight}>520г</p>

      <button className={_.product__add} type='button'>
        Добавить
      </button>
    </article>
  )
}

export default Product
