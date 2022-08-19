
import React, {useState, useParams, useContext} from "react";
import axios from 'axios'
import { UserDataContext } from "../context/userDataContext";
import { useNavigate, Link } from 'react-router-dom';



function User(props){

    const navigate = useNavigate(); 

    const {logUserData, setLogUserData } = useContext(UserDataContext)

    const userId = logUserData._id;
   
    return(
        
            <div className="profile">
                <div className="profileRight">
                    <div className="profileRightTop">
                            <div className="profileCover">

                    {/* <img className="profileCoverImg" src='https://via.placeholder.com/350x150'
                    alt=''/> */}
                            <img className="profileUser" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                            alt=''/> 
                        
                        
                        
                            </div>
                            <div className="profileInfo">
                                <h4>Welcome,  {logUserData.user_name} !</h4>
                                <span className="profileBio">Favorite Trails:{logUserData.favoriteTrails}</span>
                                <span className="profileBio">Previously Visited: {logUserData.favoriteTrails}</span>
                                                               
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
