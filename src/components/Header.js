import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = () => (
  <header className="header">
    <h1 className="header-title">Odyssey Greek</h1>
    <NavLink className="header-links" to="/" exact={true}>
      Home
    </NavLink>
    <NavLink className="header-links" to="/alphabet">
      Ancient Greek Alphabet
    </NavLink>
    <NavLink className="header-links" to="/flashcards">
      Flashcards
    </NavLink>
  </header>
);

export default Header;
