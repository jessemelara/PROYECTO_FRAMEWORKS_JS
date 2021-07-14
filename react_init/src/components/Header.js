import React, { Component } from "react";
import logo from "../assets/images/react.svg";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*Logo*/}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Master</strong> ReactJS
            </span>
          </div>
          {/*Menu*/}
          <nav id="menu">
            <ul>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="formulario.html">Formulario</a>
              </li>
              <li>
                <a href="pagina1.html">Pagina 1</a>
              </li>
              <li>
                <a href="pagina2.html">Pagina 2</a>
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
