import React from "react";
import { Route } from "react-router";
import MenuStep from "./menuStep";
import MenuTheme from "./MenuTheme";

const Menu = (props) => {
  const {
    isSettingWindow,
    themes,
    fontSetting,
    hideShowMenu,
    newTextSearch,
  } = props.state;

  let themesArr = Object.keys(themes);

  let drowThemes = themesArr.map((theme, index) => {
    let steps = Object.keys(themes[theme]);
    let icon = "";
    steps.forEach((step) => {
      if (step === "icon") {
        icon = themes[theme][step];
      }
    });
    return (
      <MenuTheme
        icon={icon}
        dispatch={props.dispatch}
        title={themesArr[index]}
        key={index}
      />
    );
  });

  let drowSteps = themesArr.map((theme, index) => {
    return (
      <Route
        path={"/" + theme}
        key={index}
        render={() => (
          <MenuStep
            theme={themes[themesArr[index]]}
            search={newTextSearch}
            themeName={theme}
          />
        )}
      />
    );
  });

  let fontOptionDrow = () => {
    let res = [];
    let arr = fontSetting.fonts;

    arr.forEach((font, index) => {
      let stylefontFamaly = {
        fontFamily: font,
      };

      res.push(
        <option key={index} style={stylefontFamaly}>
          {font}
        </option>
      );
    });

    return res;
  };

  let clickBtnHide = () => {
    props.dispatch({ type: "HIDE_SHOW_MENU" });
  };

  let clickThemeSwither = () => {
    props.dispatch({ type: "SWITH_COLOR_THEME" });
  };

  let inputSearch = (event) => {
    let text = event.target.value;
    props.dispatch({ type: "UPDATE_TEXT_SEARCH", newText: text });
  };

  let toggleFontSetting = () => {
    props.dispatch({ type: "TOGGLE_DISPLAY_SETTING" });
  };

  let handleChangeSize = (event) => {
    props.dispatch({ type: "RESIZE_FONT", size: event.target.value });
  };
  let handleChangeLineHeight = (event) => {
    props.dispatch({ type: "LINE_HEIGHT_FONT", size: event.target.value });
  };
  let handleChangeLetterSpacing = (event) => {
    props.dispatch({ type: "LETTER_SPACING_FONT", size: event.target.value });
  };

  let settingReset = () => {
    props.dispatch({ type: "SETTING_RESET" });
  };

  let fontSelect = (event) => {
    props.dispatch({ type: "FONT_SELECT", font: event.target.value });
  };

  return (
    <div className="menu">
      <div className="theme">
        <ul className="theme__content">{drowThemes}</ul>
      </div>
      <div className={"step " + hideShowMenu}>
        <div className="step__wraper">
          <div className="step__top">
            <input
              title="пойск по главам"
              value={newTextSearch}
              onChange={inputSearch}
              placeholder="Поиск главы"
              type="text"
              className="search "
            ></input>
            <div
              className={
                "settings-font " +
                (isSettingWindow ? "settings-font__active" : "")
              }
            >
              <button
                title="настройть шрифт"
                onClick={toggleFontSetting}
                className="settings-font-btn"
              >
                Настройка шрифта
              </button>
              <div className="settings-font__wrapper">
                <select
                  value={fontSetting.fontFamily}
                  className="select-font"
                  title="выберите шрифт"
                  onChange={fontSelect}
                >
                  {fontOptionDrow()}
                </select>

                <div className="size-rugulator">
                  <p>Размер шрифта</p>
                  <input
                    title={fontSetting.size}
                    onChange={handleChangeSize}
                    id="range_size"
                    type="range"
                    value={fontSetting.size}
                    min="16"
                    max="22"
                    step="1"
                    className="size-rugulator__sider"
                    // oninput="resizeText()"
                  ></input>
                </div>
                <div className="size-rugulator">
                  <p>межсимвольный интервал</p>
                  <input
                    title={fontSetting.letterSpacing}
                    onChange={handleChangeLetterSpacing}
                    id="range_size"
                    type="range"
                    value={fontSetting.letterSpacing}
                    min="0"
                    max="5"
                    step="1"
                    className="size-rugulator__sider"
                    // oninput="resizeText()"
                  ></input>
                </div>
                <div className="size-rugulator">
                  <p>межсточный интервал</p>{" "}
                  <input
                    title={fontSetting.lineHeight}
                    onChange={handleChangeLineHeight}
                    id="range_size"
                    type="range"
                    value={fontSetting.lineHeight}
                    min="30"
                    max="60"
                    step="1"
                    className="size-rugulator__sider"
                    // oninput="resizeText()"
                  ></input>
                </div>
                <button
                  title="выставит значение по умолчанию"
                  onClick={settingReset}
                  className="settings-standart"
                >
                  по умолчанию
                </button>
              </div>
            </div>

            <div className="menu__panel">
              <button
                title="меняет цветовую тему"
                onClick={clickThemeSwither}
                className={"switch "}
              ></button>
              <button
                title="скрывает/расскрывает меню"
                onClick={clickBtnHide}
                className="btn__hide  btn-menu"
              >
                <svg
                  width="27"
                  height="8"
                  viewBox="0 0 27 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976313 4.7308 0.65973 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM27 3.5L1 3.5L1 4.5L27 4.5L27 3.5Z"
                    fill="#B9BBBE"
                  />
                </svg>
              </button>
            </div>
          </div>

          {drowSteps}
        </div>
        <div className="arrow-scroll arrow-scroll--hide">
          <a href="#0" className="prev">
            <svg
              width="8"
              height="38"
              viewBox="0 0 8 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35356 0.646446C4.15829 0.451183 3.84171 0.451183 3.64645 0.646446L0.464468 3.82843C0.269205 4.02369 0.269205 4.34027 0.464468 4.53553C0.65973 4.7308 0.976312 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53554 4.53553C7.7308 4.34027 7.7308 4.02369 7.53554 3.82843L4.35356 0.646446ZM4.5 38L4.5 1L3.5 1L3.5 38L4.5 38Z"
                fill="#202225"
              />
            </svg>
          </a>
          <a href="#1" className="next">
            <svg
              width="8"
              height="38"
              viewBox="0 0 8 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64644 37.3536C3.84171 37.5488 4.15829 37.5488 4.35355 37.3536L7.53553 34.1716C7.73079 33.9763 7.73079 33.6597 7.53553 33.4645C7.34027 33.2692 7.02369 33.2692 6.82843 33.4645L4 36.2929L1.17157 33.4645C0.976309 33.2692 0.659727 33.2692 0.464465 33.4645C0.269202 33.6597 0.269202 33.9763 0.464465 34.1716L3.64644 37.3536ZM3.5 -2.18557e-08L3.5 37L4.5 37L4.5 2.18557e-08L3.5 -2.18557e-08Z"
                fill="#202225"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Menu;