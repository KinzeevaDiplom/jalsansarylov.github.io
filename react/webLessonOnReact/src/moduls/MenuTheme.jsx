import React from "react";
import { NavLink } from "react-router-dom";

const MenuTheme = (props) => {
  return (
    <div className="theme__item">
      <NavLink to={"/" + props.title}>{props.title}</NavLink>
    </div>
  );
};

export default MenuTheme;
