import React from "react";
import { NavLink } from "react-router-dom";

const search = () => {
  return (
    <div>
      <section className="update-search">
        <div className="container">
          <div className="main-screen__content__row">
            <div className="main-screen__left">
              <div className="title">
                <h2>Пойск рейса</h2>
                <p>Введите параметры и найдите удобный для себя рейс.</p>
              </div>
            </div>
            <div className="main-screen__right">
              <form action="" className="form1">
                <h2>ПОЙСК ПОДХОДЯЩЕГО РЕЙСА</h2>
                <div className="form1-row1">
                  <input
                    className="test-0-fd"
                    placeholder="откуда"
                    id="starting-point"
                    type="text"
                  />
                  <input
                    className="test-0-fa"
                    placeholder="куда"
                    type="text"
                    id="ending-point"
                  />
                </div>
                <div className="form1-row2">
                  <div className="form1__item">
                    <label for="starting-date">дата вылета</label>
                    <input
                      className="test-0-fdt"
                      id="starting-date"
                      type="date"
                    />
                  </div>
                  <div className="form1__item">
                    <label for="ending-date">дата прилета</label>
                    <input
                      className="test-0-fat"
                      id="ending-date"
                      type="date"
                    />
                  </div>
                  <div className="form1__item">
                    <label for="passenger">число пассажиров</label>
                    <select name="humans" className="test-0-fnp" id="passenger">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                      <option value="">8</option>
                    </select>
                  </div>
                </div>

                <NavLink to="search" className="btn form1__btn test-0-fbs">
                  обновить
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="rase__content">
        <div className="title">
          <h2>Рейс</h2>
          <p>Выберете рейс для полета до пункта назначения</p>
        </div>

        <div className="container">
          <div className="rase__row">
            <div className="rase__item">
              <img src="img/bg2.jpg" alt="" />
              <h3>Название</h3>
              <p className="test-4-fn">Номер рейса</p>
              <p className="test-4-at">Воздушное судно</p>
              <p className="test-4-dd">Дата вылета</p>
              <p className="test-4-dt">Время вылета</p>
              <p className="test-4-ft">Время в пути</p>

              <NavLink to="/broaning">выбрать</NavLink>
            </div>
            <div className="rase__item">
              <img src="img/bg2.jpg" alt="" />
              <h3>Название</h3>
              <p className="test-4-fn">Номер рейса</p>
              <p className="test-4-at">Воздушное судно</p>
              <p className="test-4-dd">Дата вылета</p>
              <p className="test-4-dt">Время вылета</p>
              <p className="test-4-ft">Время в пути</p>

              <NavLink to="/broaning">выбрать</NavLink>
            </div>
            <div className="rase__item">
              <img src="img/bg2.jpg" alt="" />
              <h3>Название</h3>
              <p className="test-4-fn">Номер рейса</p>
              <p className="test-4-at">Воздушное судно</p>
              <p className="test-4-dd">Дата вылета</p>
              <p className="test-4-dt">Время вылета</p>
              <p className="test-4-ft">Время в пути</p>

              <NavLink to="/broaning">выбрать</NavLink>
            </div>
          </div>
          <div className="rase__row">
            <div className="rase__item">
              <img src="img/bg2.jpg" alt="" />
              <h3>Название</h3>
              <p className="test-4-fn">Номер рейса</p>
              <p className="test-4-at">Воздушное судно</p>
              <p className="test-4-dd">Дата вылета</p>
              <p className="test-4-dt">Время вылета</p>
              <p className="test-4-ft">Время в пути</p>

              <NavLink to="/broaning">выбрать</NavLink>
            </div>
            <div className="rase__item">
              <img src="img/bg2.jpg" alt="" />
              <h3>Название</h3>
              <p className="test-4-fn">Номер рейса</p>
              <p className="test-4-at">Воздушное судно</p>
              <p className="test-4-dd">Дата вылета</p>
              <p className="test-4-dt">Время вылета</p>
              <p className="test-4-ft">Время в пути</p>

              <NavLink to="/broaning">выбрать</NavLink>
            </div>
            <div className="rase__item">
              <img src="img/bg2.jpg" alt="" />
              <h3>Название</h3>
              <p className="test-4-fn">Номер рейса</p>
              <p className="test-4-at">Воздушное судно</p>
              <p className="test-4-dd">Дата вылета</p>
              <p className="test-4-dt">Время вылета</p>
              <p className="test-4-ft">Время в пути</p>

              <NavLink to="/broaning">выбрать</NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default search;
