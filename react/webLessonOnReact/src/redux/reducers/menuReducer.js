import data from "../../content/theme1.json";

let initialState = {
  themes: data,
  colorTheme: "white-theme",
  hideShowMenu: "",
  newTextSearch: "",
  isSettingWindow: false,
  fontSetting: {
    size: 16,
    lineHeight: 30,
    letterSpacing: 0,
  },

  preloaderActive: false,
};

let menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_SHOW_MENU":
      if (state.hideShowMenu === "") state.hideShowMenu = "step--hide";
      else state.hideShowMenu = "";
      return state;

    case "SWITH_COLOR_THEME":
      if (state.colorTheme === "white-theme") state.colorTheme = "dark-theme";
      else state.colorTheme = "white-theme";
      return state;

    case "UPDATE_TEXT_SEARCH":
      state.newTextSearch = action.newText;
      return state;

    case "RESIZE_FONT":
      state.fontSetting.size = action.size;
      return state;

    case "LINE_HEIGHT_FONT":
      state.fontSetting.lineHeight = action.size;
      return state;

    case "LETTER_SPACING_FONT":
      state.fontSetting.letterSpacing = action.size;
      return state;

    case "TOGGLE_DISPLAY_SETTING":
      state.isSettingWindow = !state.isSettingWindow;
      return state;

    default:
      return state;
  }
};

export default menuReducer;
