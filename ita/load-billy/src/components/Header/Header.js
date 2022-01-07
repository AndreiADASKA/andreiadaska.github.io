import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container _container">
        <nav className="header__nav">
          <div className="header__logo">
            <a href="#logop" className="header__logo-link">
              LOAD BILLY
            </a>
          </div>
          <ul className="header__list">
            <li>
              <a href="#главная">Главная</a>
            </li>
            <li>
              <a href="#главная">Главная</a>
            </li>
            <li>
              <a href="#главная">Главная</a>
            </li>
            <li>
              <a href="#главная">Главная</a>
            </li>
            <li>
              <a href="#главная">Главная</a>
            </li>
          </ul>
          <form action="#" className="header__form">
            <input
              type="text"
              name=""
              id=""
              className="header__form-input"
              placeholder="Поиск..."
            />
            <a className="header__login" href="#Войти">
              Войти
            </a>
          </form>
        </nav>
      </div>
    </header>
  );
}
