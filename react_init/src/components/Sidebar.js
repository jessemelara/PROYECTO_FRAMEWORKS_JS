import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Sidebar extends Component {
  searchRef = React.createRef();
  state = {
    search: "",
    redirect: false,
  };

  searchingText = (e) => {
    e.preventDefault();

    this.setState({
      search: this.searchRef.current.value,
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/searching/" + this.state.search} />;
    }

    return (
      <React.Fragment>
        <aside id="sidebar">
          <div id="nav-blog" className="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <Link to={"/blog/create"} className="btn btn-success">
              Crear artículo
            </Link>
          </div>

          <div id="search" className="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el artículo que buscas</p>
            <input
              type="text"
              name="search"
              ref={this.searchRef}
              onKeyPress={this.searchingText}
            />
            <input
              className="btn"
              type="submit"
              value="Buscar"
              onClick={this.searchingText}
            />
          </div>
        </aside>

        <div className="clearfix"></div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
