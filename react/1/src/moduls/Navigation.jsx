import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-menu">
      <NavLink to="/home" className="nav__link">
        home
      </NavLink>

      <NavLink to="/comments" className="nav__link">
        comments
      </NavLink>
    </nav>
  );
};

export default Navigation;
