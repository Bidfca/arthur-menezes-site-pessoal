import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="py-8 flex justify-between px-28 backdrop-blur-xl">
    <p className="text-2xl text-white">
      <span className="font-bold">Arthur</span> Menezes
    </p>
    <nav className="flex gap-3 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-[#1b1959] to-[#151229] text-white rounded-md py-1 px-3.5 font-bold"
            : "text-white py-1 px-3.5"
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-[#1b1959] to-[#151229] text-white rounded-md py-1 px-3.5 font-bold"
            : "text-white py-1 px-3.5"
        }
      >
        Sobre
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-[#1b1959] to-[#151229] text-white rounded-md py-1 px-3.5 font-bold"
            : "text-white py-1 px-3.5"
        }
      >
        Projetos
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-[#1b1959] to-[#151229] text-white rounded-md py-1 px-3.5 font-bold"
            : "text-white py-1 px-3.5"
        }
      >
        Contato
      </NavLink>
      <NavLink
        to="/curriculum"
        className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-r from-[#1b1959] to-[#151229] text-white rounded-md py-1 px-3.5 font-bold"
            : "text-white py-1 px-3.5"
        }
      >
        Curriculo
      </NavLink>
      <button className="border border-primary text-primary py-2 px-7 rounded-xl font-bold hover:bg-primary hover:text-white transition duration-300 ease-in-out">
        Entre em contato
      </button>
    </nav>
  </header>
);

export default Header;
