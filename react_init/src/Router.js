import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./components/Blog";
import Pagina1 from "./components/Pagina1";
import Error from "./components/Error";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {/*Configurar rutas y paginas*/}
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/pagina1/:nombre?/:apellidos?" component={Pagina1} />

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
