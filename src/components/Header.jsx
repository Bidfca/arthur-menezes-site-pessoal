import '../css/header.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <p className="name">Arthur Menezes Corrêa</p>
      <hr className="lineHorizontal" />
      <nav className="headerNavegate">
        <Link className="link-nav" to="/">
        <button
          className="button-63"
          type="button"
        >
          Home Page
        </button>
        </Link>
        <Link className="link-nav" to="/about">
        <button
          className="button-63"
          type="button"
        >
          Sobre
        </button>
        </Link>
        <Link className="link-nav" to="/contact">
        <button
          className="button-63"
          type="button"
        >
          Contato
        </button>
        </Link>
        <Link className="link-nav" to="/curriculo">
        <button
          className="button-63"
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
