import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <nav>
      <div className="nav_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>A propos</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
