// import React, {useState, useEffect} from "react";
// import {useParams, useNavigate} from 'react-router-dom';


function User(){
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
                        <h4 className="profileName">name</h4>
                        <span className="profileBio">info</span>
                    </div>
               </div>
           </div> 
       </div>
       </>
    )
}

export default User;