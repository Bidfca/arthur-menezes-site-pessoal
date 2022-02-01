import './header.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="">
      <p className="name">Arthur Menezes Correa</p>
      <nav className="headerNavegate">
        <button
          className="buttonNavegate"
          type="button"
        >
          <Link to="/homePage">Home Page</Link>
        </button>
        <button
          className="buttonNavegate"
          type="button"
        >
          <Link to="/about">Sobre</Link>
        </button>
        <button
          className="buttonNavegate"
          type="button"
        >
          <Link to="/contact">constato</Link>
        </button>
        <button
          className="buttonNavegate"
          type="button"
        >
          <Link to="/curriculo">Curriculo</Link>
        </button>
      </nav>
    </div>
  );
}

export default Header;
