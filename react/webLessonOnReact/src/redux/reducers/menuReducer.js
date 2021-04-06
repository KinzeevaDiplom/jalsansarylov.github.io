import data from "../../content/theme1.json";

let initialState = {
  themes: data,
  colorTheme: "white-theme",
  hideShowMenu: "",
  newTextSearch: "",
  fontSize: 16,
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
      state.fontSize = action.size;
      return state;

    default:
      return state;
  }
};

export default menuReducer;
