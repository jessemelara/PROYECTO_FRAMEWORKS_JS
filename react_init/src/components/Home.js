import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

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
            <Articles home="true" />
          </section>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
