import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./components/Blog";
import Error from "./components/Error";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {/*Configurar rutas y paginas*/}
        <Switch>
          <Route path="/blog" component={Blog} />

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
