import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class MenuPlantilla extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salario">
                Modificar salarios
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
