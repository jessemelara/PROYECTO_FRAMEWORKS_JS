import React, { Component } from "react";

export default class Article extends Component {
  render() {
    return (
      <div>
        <h2 className="subheader">
          Página individual del artículo: {this.props.article}
        </h2>
      </div>
    );
  }
}
