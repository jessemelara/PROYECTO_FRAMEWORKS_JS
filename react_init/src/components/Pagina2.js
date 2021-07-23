import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Pagina2 extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider title="Sección de Películas" size="slider-small" />
        <div className="center">
          <section id="content">
            <h1 className="subheader">Listado de Películas</h1>
          </section>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Pagina2;
