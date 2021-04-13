import React from "react";
import { Redirect, Route } from "react-router-dom";
import ContentItem from "./ContentItem";

const Content = (props) => {
  const { pathImg, isShowBigImg } = props.state;
  let themes = Object.keys(props.state.themes);

  let imgIncreaseDisable = () => {
    props.dispatch({ type: "IMG_INCREASE_DISABLE" });
  };

  let styleFont = {
    fontSize: props.fontSetting.size + "px",
    lineHeight: props.fontSetting.lineHeight + "px",
    letterSpacing: props.fontSetting.letterSpacing + "px",
  };

  let drowThemeContent = themes.map((theme) => {
    return (
      <Route
        path={"/" + theme}
        key={props.state.themes[theme].id}
        render={() => (
          <ContentItem
            theme={props.state.themes[theme]}
            themeName={theme}
            dispatch={props.dispatch}
            stateTest={props.state.stateTest}
          />
        )}
      />
    );
  });

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
        <Redirect from="/" to={themes[0]} />
      </div>
    </div>
  );
};

export default Content;
