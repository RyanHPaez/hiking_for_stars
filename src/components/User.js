
// import React, {useState, useEffect} from "react";
// import {useParams, useNavigate} from 'react-router-dom';

import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom';



function User(){
    return(
        <>
      <div className="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="img col-sm-12 shadow-lg p-1 mb-1">
            <a href={"https://www.linkedin.com/in/ryan-paez/"}>
              
                
                <img className="profileUser rounded-circle my-3" src='assets/cat.jpg'
                alt=''/> 
            </a>
            <div className="col-sm-12">
              
              <h4 className="profileName font-weight-light text-center">name</h4>
              <div className="text-center"></div>
            </div>
          </div>
          <div className="col-sm-12 my-4">
            <h1 className="font-weight-light text-center">About Me</h1>
            <p className="text-center">
            <span className="profileBio">info</span>
            </p>
            <p>- I am a hiker</p>
          </div>
        </div>
      </div>
    </div>
       </>
    )
}

export default User;
{/* <img className="profileCoverImg" src='assets/forest.jpg'
               alt=''/>
                    

                    </div>
                    <div className="profileInfo">
                        
                         */}