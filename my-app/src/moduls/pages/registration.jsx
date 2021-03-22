import React from "react";
import { NavLink } from "react-router-dom";

const registration = () => {
  return (
    <div className="window-reg__wrapper">
      <div className="window-reg">
        <div className="main-screen__right">
          <form action="" className="form1">
            <h2>Регистрация</h2>
            <div className="form1-row1">
              <input
                className="test-0-fd"
                placeholder="придумайте логин"
                id="starting-point"
                type="text"
              />
              <input
                className="test-0-fa"
                placeholder="введите mail"
                type="text"
                id="ending-point"
              />
            </div>
            <div className="form1-row2">
              <div className="form1__item">
                <label for="ending-point">придумайте пароль</label>
                <input
                  className="test-0-fa"
                  type="password"
                  id="ending-point"
                />
              </div>
              <div className="form1__item">
                <label for="ending-point">подтвердите пароль</label>
                <input
                  className="test-0-fa"
                  type="password"
                  id="ending-poin2"
                />
              </div>
            </div>

            <NavLink to="/search" className="btn form1__btn test-0-fbs">
              Зарегестрироваться
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default registration;
