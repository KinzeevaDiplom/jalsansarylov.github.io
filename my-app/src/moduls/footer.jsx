import React from "react";
import { NavLink } from "react-router-dom";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p>8 (800) 100-10-10</p>
          <NavLink to="/home">KhakFly</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default footer;
