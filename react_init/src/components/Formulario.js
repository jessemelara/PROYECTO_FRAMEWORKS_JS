import React, { Component } from "react";
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

  submitForm = (e) => {
    e.preventDefault();

    let gender = "";
    if (this.generoMRef.current.checked) {
      gender = this.generoMRef.current.value;
    } else if (this.generoFRef.current.checked) {
      gender = this.generoFRef.current.value;
    } else {
      gender = this.generoORef.current.value;
    }

    let user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidoRef.current.value,
      bio: this.bioRef.current.value,
      genero: gender,
    };

    console.log(user);
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
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" name="apellido" ref={this.apellidoRef} />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>
              <div className="form-group radio-buttons">
                <input
                  type="radio"
                  name="genero"
                  value="Hombre"
                  ref={this.generoMRef}
                />{" "}
                Hombre
                <br />
                <input
                  type="radio"
                  name="genero"
                  value="Mujer"
                  ref={this.generoFRef}
                />{" "}
                Mujer
                <br />
                <input
                  type="radio"
                  name="genero"
                  value="No especificar"
                  ref={this.generoORef}
                />{" "}
                No especificar
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
