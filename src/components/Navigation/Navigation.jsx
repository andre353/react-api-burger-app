import React from 'react';
import _ from './Navigation.module.scss';
import cn from 'classnames';
import Container from '../Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';

const Navigation = () => {
  const {category, activeCategory} = useSelector((state) => state.category)
  const dispatch = useDispatch()
  return (
    <nav className={_.navigation}>
      <Container>
        <div className={_.navigation__container}>
          <ul className={_.navigation__list}>
            {
              category.map((item, i) => (
                <li className={_.navigation__item} key={i}>
                  <button 
                    className={cn(
                      _.navigation__button,
                      activeCategory === i ? _.navigation__button_active : ''
                    )}
                    style={{backgroundImage: `url(${item.image})`}}
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
