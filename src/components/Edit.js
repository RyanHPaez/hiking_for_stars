import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'


function Edit(data) {
    return (
        <div className="edit">
          <div className="container">
            <div className="row align-items-center">
              <div className="img col-sm-12 shadow-lg p-1 mb-1">
                  <h4>
                    Edit Profile
                  </h4>
                    
                
                <div className="col-sm-12">
                  
                  <h4 className="profileName font-weight-light text-center">Username</h4>
                  <input type="text"></input>
                  <div className="text-center"></div>
                </div>
              </div>
              <div className="col-sm-12 my-4">
                <h4 className="font-weight-light text-center">First Name</h4>
                <input type="text"></input>
                <p className="text-center">
                <div>
                <h4 className="font-weight-light text-center">Last Name</h4>
                <input type="text"></input>
                </div>
                </p>
                <div className="user-options">
                
                    <button>
                        <i className="fas fa-trash" style={{'fontSize':'16px'}}> Delete User</i>
                    </button>
          </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Edit;
