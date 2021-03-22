import React from "react";

const final = () => {
  return (
    <div>
      <section className="sub-info">
        <div className="container">
          <div className="title">
            <h2>Информация о бронировании</h2>
            <p>Сдесь вы можете проверить введные данные и выбранный рейс</p>
          </div>
          <div className="sub-info__content">
            <ul>
              <h3>О пассажире</h3>
              <li>Имя</li>
              <li>Фамилия</li>
              <li>Дата рождения</li>
              <li>Номер документа</li>
            </ul>
            <ul>
              <h3>О бранировании</h3>
              <li>Код бронирования</li>
              <li>Стоимость бронирования</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rase__content on-final">
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
        </div>
      </section>

      <section className="place-on-airplane">
        <div className="container">
          <div className="title">
            <h2>Выбор посажирского места</h2>
            <p>найдите на представленной схеме нужное место и введите</p>
          </div>

          <div className="main-screen__content__row place-on-airplane__content">
            <div className="main-screen__left">
              <img src="img/place-on-airplane.png" alt="" />
            </div>
            <div className="main-screen__right">
              <form action="" className="form1">
                <h2>ПОЙСК ПОДХОДЯЩЕГО РЕЙСА</h2>
                <div className="form1-row1">
                  <input
                    className="test-0-fd"
                    placeholder="артикль"
                    id="starting-point"
                    type="text"
                  />
                  <input
                    className="test-0-fa"
                    placeholder="номер"
                    type="text"
                    id="ending-point"
                  />
                </div>

                <a href="#" className="btn final__btn form1__btn test-0-fbs">
                  подтвердить
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default final;
