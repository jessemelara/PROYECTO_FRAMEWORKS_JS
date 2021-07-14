import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <aside id="sidebar">
          <div id="nav-blog" className="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <a href="prueba.html" className="btn btn-success">
              Crear artículo
            </a>
          </div>

          <div id="search" className="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el artículo que buscas</p>
            <input type="text" name="search" />
            <input className="btn" type="submit" value="Buscar" />
          </div>
        </aside>

        <div class="clearfix"></div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
