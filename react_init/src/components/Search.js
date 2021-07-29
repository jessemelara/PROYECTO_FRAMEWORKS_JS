import React, { Component } from "react";
import Slider from "./Slider";
import Articles from "./Articles";
import Sidebar from "./Sidebar";

export default class Search extends Component {
  render() {
    let searchText = this.props.match.params.search;
    return (
      <React.Fragment>
        <Slider title={"Búsqueda: " + searchText} size="slider-small" />
        <div className="center">
          <h2 className="subheader">Búsqueda</h2>
          <div id="content">
            <Articles search={searchText} />
          </div>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}
