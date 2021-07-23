import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Peliculas from "./Peliculas";

class Pagina2 extends Component {
  state = {
    peliculas: [
      {
        title: "SONIC THE HEDGEHOG",
        image:
          "https://www.onmsft.com/wp-content/uploads/2020/03/sonicmovie.jpg",
      },
      {
        title: "SPACE JAM: A NEW LEGACY",
        image:
          "https://clutchpoints.com/wp-content/uploads/2021/04/Space-Jam-2-LeBron-James-Lakers.jpg",
      },
      {
        title: "LUCA",
        image:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/84420A473809C3583109B94E0890232583163AC93DBF15AB80BD246A6D5CF24E/scale?width=1200&aspectRatio=1.78&format=jpeg",
      },
      {
        title: "AVATAR",
        image:
          "https://lh3.googleusercontent.com/proxy/Qj1ZTRoRvESwsWtlGy4rUbgjt6MIlXAJO96w9VTcQTTEdlZXDggIDOQLSn5cpFJljWgWb30rup9UalsS_EEMN2Nds5eH-bWjCzKkJKBYATuocz3ywQ",
      },
    ],
    name: "Jessé Melara",
    chosen: {},
  };

  chosenMovie = (pelicula) => {
    console.log("MARCADA FAVORITA");
    console.log(pelicula);

    this.setState({
      chosen: pelicula,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Slider title="Sección de Películas" size="slider-small" />
        <div className="center">
          <section id="content">
            <h1 className="subheader">Listado de Películas</h1>
            {this.state.chosen.title ? (
              <p
                style={{
                  background: "#1E6F5C",
                  color: "white",
                  padding: "10px",
                }}
              >
                <strong>
                  La película favorita de <em>{this.state.name}</em> es:{" "}
                </strong>
                <span>{this.state.chosen.title}</span>
              </p>
            ) : (
              <p
                style={{
                  background: "#DA0037",
                  color: "white",
                  padding: "10px",
                }}
              >
                <strong>
                  No has seleccionado ninguna película como favorita
                </strong>
              </p>
            )}

            {/**Componente pelicula*/}
            <div id="articles">
              {this.state.peliculas.map((pelicula, i) => {
                return (
                  <Peliculas
                    key={i}
                    pelicula={pelicula}
                    chosen={this.chosenMovie}
                  />
                );
              })}
            </div>
          </section>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Pagina2;
