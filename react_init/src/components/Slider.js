import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Slider extends Component {
  render() {
    return (
      <div id="slider" className={this.props.size}>
        <h1>{this.props.title}</h1>
        {this.props.btn && (
          <NavLink to="/blog" className="btn-white">
            Ir al blog
          </NavLink>
        )}
      </div>
    );
  }
}

export default Slider;
