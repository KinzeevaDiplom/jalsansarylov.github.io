import React from "react";
import { NavLink } from "react-router-dom";

const broaning = () => {
  return (
    <div>
      <section className="update-search">
        <div className="container">
          <div className="main-screen__content__row">
            <div className="main-screen__left">
              <div className="title">
                <h2>Бронирование</h2>
                <p>Введите данные о себе, чтобы забронировать рейс.</p>
              </div>
            </div>
            <div className="main-screen__right">
              <form action="" className="form1">
                <h2>Бронирование рейса</h2>
                <div className="form1-row1">
                  <input
                    className="test-0-fd"
                    placeholder="имя"
                    id="starting-point"
                    type="text"
                  />
                  <input
                    className="test-0-fa"
                    placeholder="фамилия"
                    type="text"
                    id="ending-point"
                  />
                </div>
                <div className="form1-row2">
                  <div className="form1__item">
                    <label for="starting-date">дата рождения</label>
                    <input
                      className="test-0-fdt"
                      id="starting-date"
                      type="date"
                    />
                  </div>
                  <div className="form1__item">
                    <label for="starting-date">номер документа</label>
                    <input
                      className="test-0-fa"
                      placeholder="Номер документа"
                      type="text"
                      id="ending-point"
                    />
                  </div>
                </div>

                <NavLink to="/final" className="btn form1__btn test-0-fbs">
                  оформить
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="rase__content">
        <div className="title">
          <h2>информация о рейсе</h2>
        </div>

        <div className="container">
          <div className="rase__item on-broaning">
            <img src="img/bg2.jpg" alt="" />
            <h3>Название</h3>
            <p className="test-4-fn">Номер рейса</p>
            <p className="test-4-at">Воздушное судно</p>
            <p className="test-4-dd">Дата вылета</p>
            <p className="test-4-dt">Время вылета</p>
            <p className="test-4-ft">Время в пути</p>
            <p className="test-4-ft">стоймость</p>
          </div>
          <div className="btn-next">
            <NavLink to="/final" className="btn">
              далее
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default broaning;
