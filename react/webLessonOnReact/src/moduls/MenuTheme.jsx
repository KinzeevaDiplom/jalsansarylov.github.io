import React from "react";
import { NavLink } from "react-router-dom";

const MenuTheme = (props) => {
  const { icon } = props;
  let drowIcon = () => {
    if (icon !== "") {
      return (
        <div className="theme-icon">
          <img src={icon} alt="иконка" />
        </div>
      );
    } else {
      return (
        <div className="theme-icon">
          <p>{props.title[0]}</p>
        </div>
      );
    }
  };

  return (
    <NavLink
      className="theme__item"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      to={"/" + props.title}
    >
      {drowIcon()}

      <span className="theme__name">
        <p>{props.title}</p>
      </span>
    </NavLink>
  );
};

export default MenuTheme;
