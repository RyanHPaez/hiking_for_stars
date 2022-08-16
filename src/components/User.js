
import React, {useState, useEffect} from "react";
import axios from 'axios'



function User(props){

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
            <a href={`/users/edit`}>
                        <button>
                            <i class="fas fa-edit"> Edit</i>
                        </button>
                        </a>
                        <button>
                            <i class="fas fa-trash"> Delete User</i>
                        </button>
            <p>- I am a hiker</p>
          </div>
        </div>
      </div>
    </div>
}


export default User;



