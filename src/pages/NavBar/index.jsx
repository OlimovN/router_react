import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <NavLink to="/" className="nav-item">
        Home sahifasiga o'tish
      </NavLink>
      <NavLink to="/about" className="nav-item">
        About sahifasiga o'tish
      </NavLink>
      <NavLink to="/contact" className="nav-item">
        Contact sahifasiga o'tish
      </NavLink>
      <NavLink to="/products" className="nav-item">
        Products sahifasiga o'tish
      </NavLink>
      <NavLink to="/products/1" className="nav-item">
        Product 1 sahifasiga o'tish
      </NavLink>
    </header>
  );
};

export default NavBar;
