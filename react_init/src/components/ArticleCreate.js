import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";

export default class ArticleCreate extends Component {
  url = Global.url;

  titleRef = React.createRef();
  contentRef = React.createRef();

  state = {
    article: [],
    status: null,
    selectedFile: null,
  };

  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      messages: {
        alpha_space: "Este campo solo permite letras y espacios.",
        alpha_num_space: "Este campo solo permite letras, números y espacios.",
        required: "Este campo es requerido.",
      },
    });
  }

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
      },
    });
  };

  fileUpload = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
    // console.log(this.state.selectedFile);
  };

  saveArticle = (e) => {
    e.preventDefault();

    // Rellenar state con formulario
    this.changeState();
    if (this.validator.allValid()) {
      // Hacer una peticion HTTP por POST para guardar el articulo
      axios.post(this.url + "save", this.state.article).then((res) => {
        console.log(res.data);

        if (res.data.article) {
          this.setState({
            article: res.data.article,
            status: "waiting",
          });

          //Subir imagen
          if (this.state.selectedFile !== null) {
            //Sacar el id del articulo guardado
            let articleId = this.state.article._id;

            //Crear form data y agregar el fichero
            const formData = new FormData();
            formData.append(
              "file0",
              this.state.selectedFile,
              this.state.selectedFile.name
            );

            //Peticion AJAX
            axios
              .post(this.url + "upload-image/" + articleId, formData)
              .then((res) => {
                console.log(res.data);
                if (res.data.article.image) {
                  this.setState({
                    article: res.data.article,
                    status: "success",
                  });
                } else {
                  this.setState({
                    article: res.data.article,
                    status: "success",
                  });
                }
              })
              .catch((err) => {
                if (err.response) {
                  console.log(err.response.data);
                  console.log(err.response.status);
                } else if (err.request) {
                  console.log(err.request);
                } else {
                  console.log("Error", err.message);
                }
                console.log(err.config);
              });
          } else {
            this.setState({
              status: "success",
            });
          }
        } else {
          this.setState({
            status: "error",
          });
        }
      });
    } else {
      this.setState({
        status: "error",
      });
      this.validator.showMessages();
    }
  };

  render() {
    if (this.state.status === "success") {
      console.log(this.state);
      return <Redirect to={"/blog/article/" + this.state.article._id} />;
    }

    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Crear Artículo</h1>
          <form className="mid-form" onSubmit={this.saveArticle}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                name="title"
                ref={this.titleRef}
                onChange={this.changeState}
                onBlur={() => this.validator.showMessageFor("alpha_space")}
              />

              {/*** Validación de campo ***/}
              {this.validator.message(
                "title",
                this.state.article.title,
                "required|alpha_space",
                { className: "text-danger" }
              )}
            </div>

            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                name="content"
                ref={this.contentRef}
                onChange={this.changeState}
                onBlur={() => this.validator.showMessageFor("alpha_num_space")}
              ></textarea>

              {/*** Validación de campo ***/}
              {this.validator.message(
                "content",
                this.state.article.content,
                "required|alpha_num_space",
                { className: "text-danger" }
              )}
            </div>

            <div className="form-group">
              <label htmlFor="image">Imagen</label>
              <br />
              <input type="file" name="image" onChange={this.fileUpload} />
            </div>
            <div className="clearfix"></div>
            <input type="submit" value="Enviar" className="btn btn-accept" />
          </form>
        </section>

        <Sidebar />
      </div>
    );
  }
}
