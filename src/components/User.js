
import React, {useState, useEffect, useParams, useContext } from "react";
import axios from 'axios'
import {UserDataContext } from "../context/userDataContext";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Edit } from "./";


function User(props){

    const navigate = useNavigate(); 

    const {logUserData, setLogUserData } = useContext(UserDataContext)

    const userId = logUserData._id;
   
    
    useEffect(() => {}, []);

    
        return(
            
          
          <div className="container">
            <div className="row align-items-center">
              <div className="img col-sm-12 shadow-lg p-1 mb-1">
                
                <img className="profileUser" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'alt=''/> 
                
                <div className="col-sm-12">
                  
                  <h4 className="profileName font-weight-light text-center">{logUserData.first_name}</h4>
                  <div className="text-center"></div>
                </div>
              </div>
              <div className="col-sm-12 my-4">
                <h1 className="font-weight-light text-center">About Me</h1>
                <p className="text-center">
                <span className="profileBio">info</span>
                </p>
                <div className="profileInfo">
                                <h4>Welcome,  {logUserData.user_name} !</h4>
                                <span className="profileBio">Favorite Trails:{logUserData.favoriteTrails}</span>
                                <span className="profileBio">Previously Visited: {logUserData.favoriteTrails}</span>
                                                               
                               
                            </div>
                <p>- I am a hiker</p>
                <div className="user-options">
                <Link to="/UpdateUser" value={{userId}}>
                <button >
                    <i class="fas fa-edit"> Edit</i>
                </button>
                </Link>
                <Link to="/DeleteUser" value={{userId}}>
                <button>
                    <i class="fas fa-trash"> Delete User</i>
                </button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        
          
        )
    }
    

export default User;



