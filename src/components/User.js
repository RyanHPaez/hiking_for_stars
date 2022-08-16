
import React, {useState, useEffect} from "react";
import axios from 'axios'
import {UserDataContext } from "../context/userDataContext";
import { NavLink } from "react-router-dom";




function User(props){
    
    // useEffect(() => {}, []);
    
    // const userData = useContext(UserDataContext)
    
    // const displayUser = userData.map((User) => {
    
    return (
      <div className="container">
        <div className="profile-header">
            <div className="profile-img">
                <img src="https://image.freepik.com/free-icon/profile-user-silhouette_318-40557.jpg" width="200"/>
        </div>
        <div className="profile-nav-info">
            <h3 className="user-username"> Username </h3>
            <div className="user-first-name">
                <p>Name</p></div>
            <div className="user-favorite-trail">
                <span>
                Favorite trail
                </span>
                </div>
        </div>
        
        <div className="user-options-edit">
            <a href={`./UpdateUser`}>
                <button>
                    <i className="fas fa-edit"> 
                    Edit</i>
                </button>
            </a>
        </div>
        <div className= "user-options-delete">
        <button>
                    <i className="fas fa-trash"> 
                    Delete User</i>
                 </button>
                 </div>
        <div className='user-main'>
            <div className='left-side-bar'>
                <div className="profile-side">
                    <div className="user-bio">
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>
             
            <div className='right-sidebar'>
                <div class='nav'>
                    {/* <ul>
                        <li onclick="favorite-trails-tab" className='user-favorite-trails-tab'>
                        </li>
                    </ul> */}
                </div>
            </div> 
             
        </div>
        
      </div>
    </div>
    )
    // })

}


export default User;



