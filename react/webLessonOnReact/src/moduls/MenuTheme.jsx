import React from "react";
import { NavLink } from "react-router-dom";

const MenuTheme = (props) => {
  return (
    <div className="theme__item">
      <NavLink onClick={() => window.scrollTo(0, 0)} to={"/" + props.title}>
        {props.title}
      </NavLink>
    </div>
  );
};

export default MenuTheme;
