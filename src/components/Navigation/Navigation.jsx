import React from 'react';
import _ from './Navigation.module.scss';
import cn from 'classnames';
import Container from '../Container/Container';

const Navigation = () => {
  return (
    <nav className={_.navigation}>
      <Container>
        <div className={_.navigation__container}>
          <ul className={_.navigation__list}>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_burger, _.navigation__button_active)}>Бургеры</button>
            </li>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_snack)}>Закуски</button>
            </li>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_hotdog)}>Хот-доги</button>
            </li>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_combo)}>Комбо</button>
            </li>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_shawarma)}>Шаурма</button>
            </li>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_pizza)}>Пицца</button>
            </li>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_wok)}>Вок</button>
            </li>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_dessert)}>Десерты</button>
            </li>
            <li className={_.navigation__item}>
              <button className={cn(_.navigation__button, _.navigation__button_sauce)}>Соусы</button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
