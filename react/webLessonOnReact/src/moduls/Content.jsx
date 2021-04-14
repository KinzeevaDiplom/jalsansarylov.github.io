import React from "react";
import { Redirect, Route } from "react-router-dom";
import ContentItem from "./ContentItem";

const Content = (props) => {
  const { pathImg, isShowBigImg, themes } = props.state;
  const { size, lineHeight, letterSpacing, fontFamily } = props.fontSetting;

  // стили для текста в content
  let styleFont = {
    fontFamily: fontFamily + " ,sans-serif",
    fontSize: size + "px",
    lineHeight: lineHeight + "px",
    letterSpacing: letterSpacing + "px",
  };

  // получаем массив с именами тем
  let themesArr = Object.keys(themes);

  // отрисовка элементов окна "темы"
  let drowThemeContent = themesArr.map((theme, index) => {
    return (
      <Route
        path={"/" + theme}
        key={index}
        render={() => (
          <ContentItem
            theme={themes[theme]}
            themeName={theme}
            dispatch={props.dispatch}
            stateTest={props.state.stateTest}
          />
        )}
      />
    );
  });

  // выключение режима увеличенной картинки
  let imgIncreaseDisable = () => {
    props.dispatch({ type: "IMG_INCREASE_DISABLE" });
  };

  return (
    <div className="content" style={styleFont}>
      <div
        onClick={imgIncreaseDisable}
        className={
          "img-increase " + (isShowBigImg ? "img-increase__active" : "")
        }
      >
        <img src={pathImg} alt="" />
      </div>

      <div className="content__text">
        {drowThemeContent}
        <Redirect from="/" to={themesArr[0]} />
      </div>
    </div>
  );
};

export default Content;
