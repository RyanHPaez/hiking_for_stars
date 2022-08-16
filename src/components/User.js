
import React, {useState, useEffect} from "react";
import axios from 'axios'



function User(props){
    
    // const [userData, setUserData]
    
    // useEffect( () => {
    //     axios
    //         .get(`http://localhost:3005/secapp/users`)
    //         .then((response) => setUserData(response.data));
    // }, []);
    
    const user = props.users
    
    return(
        <>
       <div className="profile">
           <div className="profileRight">
               <div className="profileRightTop">
                    <div className="profileCover">

               <img className="profileCoverImg" src='assets/forest.jpg'
               alt=''/>
                    <img className="profileUser" src='assets/cat.jpg'
                    alt=''/> 
                
                
                
                    </div>
                    <div className="profileInfo">
                        <h4> {user.first_name} </h4>
                        <span className="profileBio">info</span>
                        
                        <a href={`/users/${user.id}/edit`}>
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
       </>
    )
}


export default User;
