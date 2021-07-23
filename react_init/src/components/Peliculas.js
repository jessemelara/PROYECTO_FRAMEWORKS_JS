import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Peliculas extends Component {
  theChosen = () => {
    this.props.chosen(this.props.pelicula);
  };

  render() {
    const { title, image } = this.props.pelicula;

    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          <img src={image} alt={title} />
        </div>
        <h2>{title}</h2>
        <span className="date">Hace 5 minutos</span>
        <NavLink to="/pagina2">Leer más</NavLink>
        <button onClick={this.theChosen}>Marcar como favorita</button>

        <div className="clearfix"></div>
      </article>
    );
  }
}
