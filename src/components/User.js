
import React, {useState, useParams, useContext} from "react";
import axios from 'axios'
import { UserDataContext } from "../context/userDataContext";


function User(props){

    const {logUserData, setLogUserData } = useContext(UserDataContext)
    console.log('this is the loguserdata', logUserData)
    // const { user } = useParams();
    // const user = props
    // const userData= useContext(UserDataContext)
    // console.log('user data inside user profile', userData)
    
    // useEffect( () => {
    //     axios
    //         .get(`http://localhost:3005/secapp/users`)
    //         .then((response) => setUserData(response.data));
    // }, []);
    
    // const user = props.users
    return(
        
            <div className="profile">
                <div className="profileRight">
                    <div className="profileRightTop">
                            <div className="profileCover">

                    <img className="profileCoverImg" src='assets/forest.jpg'
                    alt=''/>
                            <img className="profileUser" src={logUserData.thumbnail}
                            alt=''/> 
                        
                        
                        
                            </div>
                            <div className="profileInfo">
                                <h4>Welcome,  {logUserData.user_name} !</h4>
                                <span className="profileBio">{logUserData.first_name}</span>
                                
                                <a href={`/users/${logUserData.id}/edit`}>
                                <button>
                                    <i class="fas fa-edit"> Edit</i>
                                </button>
                                </a>
                                <button>
                                    <i class="fas fa-trash"> Delete User</i>
                                </button>
                            </div>
                            
                    </div>
                </div> 
            </div>
       
    )
}


export default User;
