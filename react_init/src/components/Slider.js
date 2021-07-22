import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Slider extends Component {
  render() {
    return (
      <div id="slider" className="slider-big">
        <h1>Bienvenido al Master en ReactJS</h1>
        <NavLink to="/blog" className="btn-white">
          Ir al blog
        </NavLink>
      </div>
    );
  }
}

export default Slider;
