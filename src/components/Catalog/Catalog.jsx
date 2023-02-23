import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productRequestAsync } from '../../store/product/productSlice';
import Container from '../Container/Container';
import Order from '../Order/Order';
import Product from '../Product/Product';
import _ from './Catalog.module.scss';

const Catalog = () => {
  const {products} = useSelector(state => state.product)
  const {category, activeCategory} = useSelector(state => state.category)
  // console.log("category:", category);

  const dispatch = useDispatch()

  useEffect(() => {
    if (category.length) { // after categories have been loaded
      dispatch(productRequestAsync(category[activeCategory].title))
    }
  }, [category, activeCategory])

  
  return (
    <section className={_.catalog}>
      <Container>
        <div className={_.catalog__container}>
          <Order />

          <div className={_.catalog__wrapper}>
            <h2 className={_.catalog__title}>{category[activeCategory]?.rus}</h2>

            <div className={_.catalog__wrap_list}>
              <ul className={_.catalog__list}>
                {products.length ? products.map((item) => 
                    <li key={item.id} className={_.catalog__item}>
                      <Product item={item} />
                    </li>
                ) : 'Извините, товар закончился.'}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
