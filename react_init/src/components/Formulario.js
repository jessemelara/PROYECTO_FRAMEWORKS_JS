import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  nombreRef = React.createRef();
  apellidoRef = React.createRef();
  bioRef = React.createRef();
  generoMRef = React.createRef();
  generoFRef = React.createRef();
  generoORef = React.createRef();

  state = {
    user: {},
  };

  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      messages: {
        regex: "Este campo solo admite letras, acentos y espacios.",
        required: "Este campo es requerido.",
      },
    });
  }

  changeState = () => {
    let gender = "";
    if (this.generoMRef.current.checked) {
      gender = this.generoMRef.current.value;
    } else if (this.generoFRef.current.checked) {
      gender = this.generoFRef.current.value;
    } else if (this.generoORef.current.checked) {
      gender = this.generoORef.current.value;
    }
    this.setState({
      user: {
        nombre: this.nombreRef.current.value,
        apellidos: this.apellidoRef.current.value,
        bio: this.bioRef.current.value,
        genero: gender,
      },
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    if (this.validator.allValid()) {
      let gender = "";
      if (this.generoMRef.current.checked) {
        gender = this.generoMRef.current.value;
      } else if (this.generoFRef.current.checked) {
        gender = this.generoFRef.current.value;
      } else if (this.generoORef.current.checked) {
        gender = this.generoORef.current.value;
      }

      let user = {
        nombre: this.nombreRef.current.value,
        apellidos: this.apellidoRef.current.value,
        bio: this.bioRef.current.value,
        genero: gender,
      };

      console.log(user);
    } else {
      this.validator.showMessages();
    }
  };

  render() {
    return (
      <React.Fragment>
        <Slider title="Formulario" size="slider-small" />
        <div className="center">
          <section id="content">
            <h1 className="subheader">Formulario</h1>
            <form className="mid-form" onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  ref={this.nombreRef}
                  onChange={this.changeState}
                  onBlur={() => this.validator.showMessageFor("regex")}
                />

                {/*** Validación de campo ***/}
                {this.validator.message(
                  "nombre",
                  this.state.user.nombre,
                  "required|regex:^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$",
                  { className: "text-danger" }
                )}
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  ref={this.apellidoRef}
                  onChange={this.changeState}
                  onBlur={() => this.validator.showMessageFor("regex")}
                />

                {/*** Validación de campo ***/}
                {this.validator.message(
                  "apellido",
                  this.state.user.apellidos,
                  "required|regex:^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$",
                  { className: "text-danger" }
                )}
              </div>
              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea
                  name="bio"
                  ref={this.bioRef}
                  onChange={this.changeState}
                  onBlur={() => this.validator.showMessageFor("required")}
                ></textarea>

                {/*** Validación de campo ***/}
                {this.validator.message(
                  "bio",
                  this.state.user.bio,
                  "required",
                  { className: "text-danger" }
                )}
              </div>
              <div className="form-group radio-buttons">
                <input
                  type="radio"
                  name="genero"
                  value="Hombre"
                  ref={this.generoMRef}
                  onChange={this.changeState}
                  onBlur={() => this.validator.showMessageFor("required")}
                />{" "}
                Hombre
                <br />
                <input
                  type="radio"
                  name="genero"
                  value="Mujer"
                  ref={this.generoFRef}
                  onChange={this.changeState}
                  onBlur={() => this.validator.showMessageFor("required")}
                />{" "}
                Mujer
                <br />
                <input
                  type="radio"
                  name="genero"
                  value="No especificar"
                  ref={this.generoORef}
                  onChange={this.changeState}
                  onBlur={() => this.validator.showMessageFor("required")}
                />{" "}
                No especificar
                {/*** Validación de campo ***/}
                {this.validator.message(
                  "genero",
                  this.state.user.genero,
                  "required",
                  { className: "text-danger" }
                )}
              </div>
              <div className="clearfix"></div>
              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </section>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Formulario;
