import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation navbar-expand navbar-dark bg-dark col-sm-8">
      <nav className="navbar navbar-expand navbar-dark bg-dark  col-sm-9">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          <h1 className="NavName font-weight-light">Hiking for Stars</h1>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item-home">              
                <NavLink className="nav-link" to="/">
                <i className='fas fa-home' style={{'fontSize':'18px'}}></i>                 
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page2">
                <i className='fas fa-hiking' style={{'fontSize':'18px'}}></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Music">
                <i className='fas fa-music' style={{'fontSize':'18px'}}></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/User">
                <i className='fas fa-user-alt' style={{'fontSize':'18px'}}></i>
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
      </nav>
    </div>
  );
}

export default Navigation;