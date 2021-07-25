import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    let home = this.props.home;
    let search = this.props.search;

    if (home) {
      this.lastArticle();
    } else if (search && search !== null && search !== undefined) {
      this.searchArticle(search);
    } else {
      this.getArticle();
    }
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

  lastArticle = () => {
    axios.get(this.url + "articles/last").then((res) => {
      console.log(res.data);

      this.setState({
        articles: res.data.articles,
        status: "success",
      });

      console.log(this.state);
    });
  };

  searchArticle = (searchText) => {
    axios
      .get(this.url + "search/" + searchText)
      .then((res) => {
        console.log(res.data);

        if (res.data.articles) {
          this.setState({
            articles: res.data.articles,
            status: "success",
          });
        }
        console.log(this.state);
      })
      .catch((err) => {
        this.setState({
          articles: [],
          status: "success",
        });
      });
  };

  render() {
    if (this.state.articles.length >= 1) {
      let showArticles = this.state.articles.map((article) => {
        return (
          <article className="article-item" key={article._id}>
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
            <h2 className="subheader">{article.title}</h2>
            <span className="date">
              Actualizado:{" "}
              <Moment locale="es" fromNow>
                {article.date}
              </Moment>
            </span>
            <Link to={"/blog/article/" + article._id}>Leer más</Link>

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
