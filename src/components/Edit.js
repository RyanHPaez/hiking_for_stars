import React, {useState, useEffect} from "react";

function Edit() {
    return (
        <div className="container">
          <div className="profile-header">
              <div className="profile-img">
                  <img src="https://image.freepik.com/free-icon/profile-user-silhouette_318-40557.jpg" width="200"/>
          </div>
          <div className="profile-nav-info">
              <h3 className="user-username"> Username </h3>
              <div className="user-first-name">Name</div>
              <div className="user-favorite-trail">Favorite trail</div>
          </div>
          
          <div className="user-options">
              <a href={`./UpdateUser`}>
                  <button>
                      <i className="fas fa-edit"> Edit</i>
                  </button>
              </a>
                  <button>
                      <i className="fas fa-trash"> Delete User</i>
                   </button>
          </div>
          
          <div className='user-main'>
              <div className='left-side-bar'>
                  <div className="profile-side">
                      <div className="user-bio">
                          <p>
                              Bio goes in here, lorem ipsum dolor sit amet, consectetur adipiscing elit. Repregenderit atque dolor quiidem.
                          </p>
                      </div>
                  </div>
              </div>
                  
          </div>
          
        </div>
      </div>
      )
}

export default Edit;
