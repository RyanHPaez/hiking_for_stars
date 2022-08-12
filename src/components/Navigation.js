import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          <i>Hike with the stars</i>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item-home">              
                <NavLink className="nav-link" to="/">
                <i class='fas fa-home' ></i>                  
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page2">
                <i class='fas fa-hiking'></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Music">
                <i class='fas fa-music'></i>
                </NavLink>
              </li>
              <li className="nav-item-login">
                <NavLink className="nav-link" to="/Login">
                <i>Login</i>
                </NavLink>
              </li>          
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;