import React from 'react';
import Container from '../Container/Container';
import Order from '../Order/Order';
import _ from './Catalog.module.scss';

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
                <li className={_.catalog__item}>
                  <article className={_.product}>
                    <img
                      src='../../assets/img/photo-5.jpg'
                      alt='Мясная бомба'
                      className={_.product__image}
                    />

                    <p className={_.product__price}>
                      689<span className={_.currency}>₽</span>
                    </p>

                    <h3 className={_.product__title}>
                      <button className={_.product__detail}>Мясная бомба</button>
                    </h3>

                    <p className={_.product__weight}>520г</p>

                    <button className={_.product__add} type='button'>
                      Добавить
                    </button>
                  </article>
                </li>

                <li className={_.catalog__item}>
                  <article className={_.product}>
                    <img
                      src='../../assets/img/photo-1.jpg'
                      alt='Супер сырный'
                      className={_.product__image}
                    />

                    <p className={_.product__price}>
                      550<span className={_.currency}>₽</span>
                    </p>

                    <h3 className={_.product__title}>
                      <button className={_.product__detail}>Супер сырный</button>
                    </h3>

                    <p className={_.product__weight}>512г</p>

                    <button className={_.product__add} type='button'>
                      Добавить
                    </button>
                  </article>
                </li>

                <li className={_.catalog__item}>
                  <article className={_.product}>
                    <img
                      src='../../assets/img/photo-3.jpg'
                      alt='Сытный'
                      className={_.product__image}
                    />

                    <p className={_.product__price}>
                      639<span className={_.currency}>₽</span>
                    </p>

                    <h3 className={_.product__title}>
                      <button className={_.product__detail}>Сытный</button>
                    </h3>

                    <p className={_.product__weight}>580г</p>

                    <button className={_.product__add} type='button'>
                      Добавить
                    </button>
                  </article>
                </li>

                <li className={_.catalog__item}>
                  <article className={_.product}>
                    <img
                      src='../../assets/img/photo.jpg'
                      alt='Тяжелый удар'
                      className={_.product__image}
                    />

                    <p className={_.product__price}>
                      480<span className={_.currency}>₽</span>
                    </p>

                    <h3 className={_.product__title}>
                      <button className={_.product__detail}>Тяжелый удар</button>
                    </h3>

                    <p className={_.product__weight}>470г</p>

                    <button className={_.product__add} type='button'>
                      Добавить
                    </button>
                  </article>
                </li>

                <li className={_.catalog__item}>
                  <article className={_.product}>
                    <img
                      src='../../assets/img/photo-2.jpg'
                      alt='Вечная классика'
                      className={_.product__image}
                    />

                    <p className={_.product__price}>
                      450<span className={_.currency}>₽</span>
                    </p>

                    <h3 className={_.product__title}>
                      <button className={_.product__detail}>
                        Вечная классика
                      </button>
                    </h3>

                    <p className={_.product__weight}>450г</p>

                    <button className={_.product__add} type='button'>
                      Добавить
                    </button>
                  </article>
                </li>

                <li className={_.catalog__item}>
                  <article className={_.product}>
                    <img
                      src='../../assets/img/photo-4.jpg'
                      alt='Итальянский'
                      className={_.product__image}
                    />

                    <p className={_.product__price}>
                      560<span className={_.currency}>₽</span>
                    </p>

                    <h3 className={_.product__title}>
                      <button className={_.product__detail}>Итальянский</button>
                    </h3>

                    <p className={_.product__weight}>510г</p>

                    <button className={_.product__add} type='button'>
                      Добавить
                    </button>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
