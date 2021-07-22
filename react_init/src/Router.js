import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./components/Blog";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {/*Configurar rutas y paginas*/}
        <Switch>
          <Route path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
