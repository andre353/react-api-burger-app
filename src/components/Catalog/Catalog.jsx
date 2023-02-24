import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productRequestAsync } from '../../store/product/productSlice';
import Container from '../Container/Container';
import Order from '../Order/Order';
import Product from '../Cards/Cards';
import _ from './Catalog.module.scss';
import Cards from '../Cards/Cards';

const Catalog = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  // console.log("category:", category);

  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      // after categories have been loaded
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={_.catalog}>
      <Container>
        <div className={_.catalog__container}>
          <Order />
          <div className={_.catalog__wrapper}>
            <h2 className={_.catalog__title}>
              {category[activeCategory]?.rus}
            </h2>
            <div className={_.catalog__wrap_list}>
              <Cards />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
