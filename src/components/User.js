import React, { useState, useEffect, useParams, useContext } from "react";
import axios from "axios";
import { UserDataContext } from "../context/userDataContext";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Edit } from "./";

function User(props) {
  const { logUserData } = useContext(UserDataContext);

  const userId = logUserData._id;

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="row">
        <div className="img col-sm-12 shadow-lg p-1 mb-1 text-center my-3">
          <img
            className="profileUser rounded-circle my-3 "
            src={logUserData.thumbnail}
            alt=""
          />

          <div className="col-sm-12 text-center">
            <h4 className="profileName font-weight-light">
              {logUserData.first_name}
            </h4>
            <div className="text-center"></div>
          </div>
        </div>
        <div className="col-sm-12 my-4 text-center">
          <h1 className="font-weight-light ">About Me</h1>
          <p className="text-center">
            <span className="profileBio">info</span>
          </p>
          <div className="profileInfo ">
            <h4>Welcome, {logUserData.user_name} !</h4>
            <span className="profileBio ">
              Favorite Trails:{logUserData.favoriteTrails}
            </span>
          </div>
          <div className="profileInfo ">
            <span className="profileBio ">
              Previously Visited: {logUserData.favoriteTrails}
            </span>
          </div>
          <p>- I am a hiker</p>
          <div className="user-options">
            <Link to="/UpdateUser" value={{ userId }}>
              <button>
                <i class="fas fa-edit"> Edit</i>
              </button>
            </Link>
            <Link to="/DeleteUser" value={{ userId }}>
              <button>
                <i class="fas fa-trash"> Delete User</i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
