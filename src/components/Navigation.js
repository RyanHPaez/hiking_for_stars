import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar align-items navbar-expand navbar-dark bg-dark">
        <div className="col-md-12 text-center">
          <div className="container ">
            <h1 className="NavName font-weight-light">Hiking for Stars</h1>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item-home">
                  <NavLink className="nav-link" to="/Home">
                    <i className="fas fa-home" style={{ fontSize: "18px" }}></i>
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/page2">
                    <i
                      className="fas fa-hiking"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Music">
                    <i
                      className="fas fa-music"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/User">
                    <i
                      className="fas fa-user-alt"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Map">
                    <i
                      class="fas fa-map-marked-alt"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </NavLink>
                </li>
                <li className="nav-item-login">
                  <NavLink className="nav-link" to="/Login">
                    <i>Login</i>
                  </NavLink>
                </li>
                <li className="nav-item-SignUp">
                  <NavLink className="nav-link" to="/SignUp">
                    <i>SignUp</i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
