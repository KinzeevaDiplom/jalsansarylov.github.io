import React from "react";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <div>
      <div className="main-screen">
        <div className="main-screen__content">
          <div className="container">
            <div className="main-screen__content__row">
              <div className="main-screen__left">
                <p className="subtitle">путишевствуй с нами</p>
                <h1>В НЕБЕ КАК ДОМА !</h1>
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
                      <select
                        name="humans"
                        className="test-0-fnp"
                        id="passenger"
                      >
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

                  <NavLink to="/search" className="btn form1__btn test-0-fbs">
                    поиск
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>

        <a href="#2" className="scroll-down">
          <img src="img/Arrow-Down.png" alt="arrow" />
        </a>
      </div>
      <section className="hot-sale" id="2">
        <div className="title">
          <h2>Система баллов бронирования</h2>
          <p>Для тех кто часто летает это отличная возможность сэкономить</p>
        </div>

        <div className="container">
          <div className="hot-sale__content">
            <img
              src="img/hot-sale-bg.png"
              alt="инфографика"
              style={{ width: 100 + "%" }}
            />
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="container">
          <div className="trust__content">
            <div className="trust__item">
              <p>
                более
                <span>7000</span>
                довольных клиентов
              </p>
            </div>
            <div className="trust__item">
              <p>
                более
                <span>1000</span>
                успешных перелетов
              </p>
            </div>
            <div className="trust__item">
              <p>
                более
                <span>5000</span>
                положительных отзывов
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="discount" id="discount">
        <div className="title">
          <h2>Акции</h2>
          <p>
            Еще один отличный способ сэкономить. Следите за актуальными акциями
            и экономьте на перелетах больше
          </p>
        </div>
        <div className="discount__content">
          <div className="container">
            <div className="discount__row">
              <div className="discount__item">
                <img src="img/bg2.jpg" alt="" />
                <h3>Название</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit ea cumque velit sed minus error eveniet magnam autem
                  exercitationem minima pariatur quaerat consectetur dolores
                  dolorem, neque vitae nostrum illum labore?
                </p>
                <a href="#">more</a>
              </div>
              <div className="discount__item">
                <img src="img/bg2.jpg" alt="" />
                <h3>Название</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit ea cumque velit sed minus error eveniet magnam autem
                  exercitationem minima pariatur quaerat consectetur dolores
                  dolorem, neque vitae nostrum illum labore?
                </p>
                <a href="#">more</a>
              </div>
              <div className="discount__item">
                <img src="img/bg2.jpg" alt="" />
                <h3>Название</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit ea cumque velit sed minus error eveniet magnam autem
                  exercitationem minima pariatur quaerat consectetur dolores
                  dolorem, neque vitae nostrum illum labore?
                </p>
                <a href="#">more</a>
              </div>
            </div>
            <div className="subscrube__wrapper">
              <input id="subscrube" placeholder="mail" type="text" />
              <button className="subscrube-btn btn">подписаться</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
