import React, {useContext, useState} from "react";
import { UserDataContext } from "../context/userDataContext";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

function UpdateUser () {

    const navigate = useNavigate();
    const location = useLocation();
    // const { from } = location.state
    const {logUserData, setLogUserData } = useContext(UserDataContext)

    const handleChange = (event) => {
    
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      axios
        .put(`http://localhost:3005/secapp/edit/${logUserData._id}`)
        .then ((response) => console.log(response.data));
      window.alert('User has been updated')
      navigate('/user', {logUserData})
    };
      
    



 console.log('inside UpdateUser page')
// action={`/users/${logUserData._id}?_method=PUT`} method="POST"
    return (
      <div className="container">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>          
        <label htmlFor="user_name">New Username:</label>
          <input
            type="text"
            name="name"
            id="username"
            // value=
            placeholder= {logUserData.user_name}
            onChange={(e) => setLogUserData.user_name(e.target.value)}
          />
          <br/>
        <label htmlFor="password">New Password:</label>
          <input
            type="password"
            name="name"
            id="password"

          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="name"
            id="confirmPassword"
          />
          <br/>
          <p>First name: {logUserData.first_name} </p>
        <label htmlFor="first_name">Update First name:</label>
          <input
            type="text"
            name="name"
            id="firstname"
            // value=
            placeholder={logUserData.first_name}
            onChange={(e) => setLogUserData.first_name(e.target.value)}
          />
          <label htmlFor="last_name">Last name:</label>
          <input
            type="text"
            name="name"
            id="lastname"
            // value=
            placeholder={logUserData.last_name}
            onChange={(e) => setLogUserData.last_name(e.target.value)}
          />
          <br/>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="name"
            id="email"
            // value=
            placeholder={logUserData.email}
            onChange={(e) => setLogUserData.email(e.target.value)}
          />
          <br/>
          

          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            id="image"
            // value=
            placeholder={logUserData.thumbnail}
            onChange={(e) => setLogUserData.thumbnail(e.target.value)}
          />
          
          <input type="submit" />
        </form>
      </div>
    )
}

export default UpdateUser;