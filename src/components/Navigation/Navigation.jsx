import React, { useEffect } from 'react';
import _ from './Navigation.module.scss';
import cn from 'classnames';
import Container from '../Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice';
import { API_URI } from '../../consts';

const Navigation = () => {
  const {categories, activeCategory} = useSelector((state) => state.category)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(categoryRequestAsync())
  }, [])

  return (
    <nav className={_.navigation}>
      <Container>
        <div className={_.navigation__container}>
          <ul className={_.navigation__list}>
            {
              categories.map((item, i) => (
                <li className={_.navigation__item} key={item.title}>
                  <button 
                    className={cn(
                      _.navigation__button,
                      activeCategory === i ? _.navigation__button_active : ''
                    )}
                    style={{backgroundImage: `url(${API_URI}${item.image})`}}
                    onClick={() => {
                      dispatch(changeCategory({indexCategory: i}))
                    }}
                  >
                    {item.rus}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
