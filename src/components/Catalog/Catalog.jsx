import React from 'react';
import Container from '../Container/Container';
import Order from '../Order/Order';
import Product from '../Product/Product';
import _ from './Catalog.module.scss';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

const Catalog = () => {
  return (
    <section className={_.catalog}>
      <Container>
        <div className={_.catalog__container}>
          <Order />

          <div className={_.catalog__wrapper}>
            <h2 className={_.catalog__title}>Бургеры</h2>

            <div className={_.catalog__wrap_list}>
              <ul className={_.catalog__list}>
                {goodsList.map((item, i) => (
                  <li key={i} className={_.catalog__item}>
                    <Product item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
