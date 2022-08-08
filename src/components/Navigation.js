import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          Hike with the stars
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page2">
                page 2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page3">
                page 3
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Page4">
                Login
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