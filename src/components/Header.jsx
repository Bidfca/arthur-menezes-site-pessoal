import './header.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <p className="name">Arthur Menezes Corrêa</p>
      <hr className="lineHorizontal" />
      <nav className="headerNavegate">
        <Link to="/homePage">
        <button
          className="buttonNavegate"
          type="button"
        >
          Home Page
        </button>
        </Link>
        <Link to="/about">
        <button
          className="buttonNavegate"
          type="button"
        >
          Sobre
        </button>
        </Link>
        <Link to="/contact">
        <button
          className="buttonNavegate"
          type="button"
        >
          Contato
        </button>
        </Link>
        <Link to="/curriculo">
        <button
          className="buttonNavegate"
          type="button"
        >
          Curriculo
        </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
