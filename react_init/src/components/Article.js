import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";
import Swal from "sweetalert2";

import defaultImage from "../assets/images/default-image.svg";
import Sidebar from "./Sidebar";
import Global from "../Global";

export default class Article extends Component {
  url = Global.url;

  state = {
    article: false,
    status: null,
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    let id = this.props.match.params.id;

    axios
      .get(this.url + "article/" + id)
      .then((res) => {
        console.log(res.data);

        this.setState({
          article: res.data.article,
          status: "success",
        });
      })
      .catch((err) => {
        this.setState({
          article: false,
          status: "success",
        });
      });
  };

  deleteArticle = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-secondary",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estás seguro que quieres eliminar este artículo?",
        text: "¡Esta acción es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, ¡elimínalo!",
        cancelButtonText: "No, ¡cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(this.url + "article/" + id).then((res) => {
            this.setState({
              article: res.data.article,
              status: "deleted",
            });
            swalWithBootstrapButtons.fire(
              "¡Artículo eliminado!",
              "Este artículo fue eliminado exitosamente",
              "success"
            );
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Acción cancelada",
            "Tranquilo, ¡el artículo está a salvo!",
            "error"
          );
          this.setState({
            status: "cancelled",
          });
          return <Redirect to={"/blog/article/" + id} />;
        }
      });
  };

  render() {
    let article = this.state.article;
    let status = this.state.status;

    if (this.state.status === "deleted") {
      return <Redirect to={"/blog"} />;
    }

    return (
      <div className="center">
        <section id="content">
          {article && (
            <div id="articles">
              <article className="article-item article-detail">
                <h1 className="subheader">{article.title}</h1>
                <span className="date">
                  Actualizado:{" "}
                  <Moment locale="es" fromNow>
                    {article.date}
                  </Moment>
                </span>
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
                <p>{article.content}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  illo, vitae quod possimus, facilis voluptates voluptatum aut
                  non qui iste quia temporibus dolore accusamus odio libero
                  magni fugiat. Hic, a.
                </p>
                <p>
                  Suscipit architecto, velit explicabo nihil asperiores
                  accusantium repellendus cumque maiores! Suscipit a error,
                  sapiente voluptas sit asperiores repellendus aspernatur,
                  autem, temporibus minima nemo maxime fugiat rerum fuga.
                  Voluptatibus, laudantium beatae! Velit cumque culpa dolorem
                  possimus explicabo a reprehenderit, assumenda quo eaque
                  repudiandae, eos omnis autem suscipit, totam tempora!
                </p>
                <p>
                  Dolorum reprehenderit quo dolores maxime architecto
                  exercitationem sequi voluptatem inventore nulla quis? Adipisci
                  quod placeat molestias excepturi quaerat corrupti nulla
                  reprehenderit possimus sit, quasi repudiandae delectus iste
                  quidem vero quisquam, laudantium officia nemo! Consequuntur
                  fugit aut cumque quod saepe debitis, perspiciatis quam!
                </p>
                <p>
                  Aliquam nulla illum fugiat repellendus non blanditiis ipsa
                  necessitatibus aut voluptatum aperiam libero, quis accusamus.
                  Quas rem, dolores, minima doloremque nobis blanditiis quam
                  sequi laudantium iste iure, consequuntur cum?
                </p>

                <div className="clearfix"></div>
              </article>
              <div className="buttons">
                <Link
                  to={"/blog/edit/" + article._id}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => {
                    this.deleteArticle(article._id);
                  }}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
              <div className="clearfix"></div>
            </div>
          )}

          {!article && status === "success" && (
            <div id="article">
              <h2 className="subheader">El artículo no existe</h2>
              <p>Intente de nuevo más tarde</p>
            </div>
          )}

          {status === null && (
            <div id="article">
              <h2 className="subheader">Preparando artículo...</h2>
              <p>Espere mientras carga el contenido</p>
            </div>
          )}
        </section>
        <Sidebar />
      </div>
    );
  }
}
