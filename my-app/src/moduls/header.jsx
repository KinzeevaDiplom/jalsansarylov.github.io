import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-top__wrapper">
        <div className="container">
          <div className="header-top">
            <a href="/home" className="logo test-logo">
              <img src="img/logo.png" alt="" className="logo" />
            </a>
            <nav className="menu">
              <ul>
                <li>
                  <NavLink to="/home" className="test-nav">
                    Главная
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search" className="test-nav">
                    Бронирование
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/broaning" className="test-nav">
                    Регистрация на рейс
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/registration" className="test-nav">
                    Личный кабинет
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
