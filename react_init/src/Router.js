import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Error from "./components/Error";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        {/*Configurar rutas y paginas*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/formulario" component={Formulario} />
          <Route path="/pagina1/:nombre?/:apellidos?" component={Pagina1} />
          <Route path="/pagina2" component={Pagina2} />

          <Route component={Error} />
        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;