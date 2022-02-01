import './header.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="">
      <p className="name">Arthur Menezes Correa</p>
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
          constato
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
    </div>
  );
}

export default Header;
