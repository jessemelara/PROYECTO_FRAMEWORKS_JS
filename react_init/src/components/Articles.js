import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";
import Global from "../Global";
import defaultImage from "../assets/images/default-image.svg";

export default class Articles extends Component {
  url = Global.url;

  state = {
    articles: [],
    status: null,
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    axios.get(this.url + "articles").then((res) => {
      console.log(res.data);

      this.setState({
        articles: res.data.articles,
        status: "success",
      });

      console.log(this.state);
    });
  };

  render() {
    if (this.state.articles.length >= 1) {
      let showArticles = this.state.articles.map((article) => {
        return (
          <article className="article-item">
            <div className="image-wrap">
              {article.image !== null ? (
                <img
                  src={this.url + "get-image/" + article.image}
                  alt={article.title}
                />
              ) : (
                <img src={defaultImage} alt={article.title} />
              )}
            </div>
            <h2 className="subheader" key={article._id}>
              {article.title}
            </h2>
            <span className="date">
              Actualizado:{" "}
              <Moment locale="es" fromNow>
                {article.date}
              </Moment>
            </span>

            <div className="clearfix"></div>
          </article>
        );
      });

      return <div id="articles">{showArticles}</div>;
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h2 className="subheader">No hay artículos para mostrar</h2>
          <p>Todavía no se ha creado ningún contenido para esta sección</p>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h2 className="subheader">Preparando artículos...</h2>
          <p>Espere mientras carga el contenido</p>
        </div>
      );
    }
  }
}
