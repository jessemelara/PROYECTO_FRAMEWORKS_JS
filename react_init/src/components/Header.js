import React, { Component } from "react";
import logo from "../assets/images/react.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*Logo*/}
          <div id="logo">
            <NavLink to="/">
              <img src={logo} className="app-logo" alt="Logotipo" />
              <span id="brand">
                <strong>Master</strong> ReactJS
              </span>
            </NavLink>
          </div>
          {/*Menu*/}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/home">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/formulario">Formulario</NavLink>
              </li>
              <li>
                <NavLink to="/pagina1">Pagina 1</NavLink>
              </li>
              <li>
                <NavLink to="/pagina2">Pagina 2</NavLink>
              </li>
            </ul>
          </nav>

          {/*Limpiar flotados*/}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
