import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider title="Formulario" size="slider-small" />
        <div className="center">
          <section id="content">
            <h1 className="subheader">Formulario</h1>
          </section>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Formulario;
