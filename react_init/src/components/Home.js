import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider
          title="Bienvenido al Master en ReactJS"
          size="slider-big"
          btn="true"
        />
        <div className="center">
          <section id="content">
            <h1 className="subheader">Últimos Artículos</h1>
          </section>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
