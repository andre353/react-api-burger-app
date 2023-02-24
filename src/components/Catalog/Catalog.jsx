import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productRequestAsync } from '../../store/product/productSlice';
import Container from '../Container/Container';
import Cart from '../Cart/Cart';
import _ from './Catalog.module.scss';
import Cards from '../Cards/Cards';

const Catalog = () => {
  const { categories, activeCategory } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length) {
      // after categories have been loaded
      dispatch(productRequestAsync());
      // dispatch(productRequestAsync(categories[activeCategory].title));
    }
  }, [categories, activeCategory]);

  return (
    <section className={_.catalog}>
      <Container>
        <div className={_.catalog__container}>
          <Cart />
          <div className={_.catalog__wrapper}>
            <h2 className={_.catalog__title}>
              {categories[activeCategory]?.rus}
            </h2>
            <Cards />            
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
