import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider title="Blog" size="slider-small" />
        <div className="center">
          <section id="content">
            <h1 className="subheader">Blog</h1>
          </section>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
