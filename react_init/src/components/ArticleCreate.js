import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
      },
    });
    // console.log(this.state);
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                name="content"
                ref={this.contentRef}
                onChange={this.changeState}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="image">Imagen</label>
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