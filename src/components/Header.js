import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Odyssey Greek</h1>
    <NavLink to="/" activeClassName='is-active' exact={true}>Home </NavLink>
    <NavLink to="/alphabet" activeClassName='is-active'>Ancient Greek Alphabet</NavLink>
    <NavLink to="/flashcards" activeClassName='is-active'>flashcards</NavLink>
  </header>
)

export default Header