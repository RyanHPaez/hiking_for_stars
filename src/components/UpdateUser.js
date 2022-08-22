import React, {useContext, useState} from "react";
import { UserDataContext } from "../context/userDataContext";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

function UpdateUser () {

  const [ userName, setUserName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ thumbnail, setThumbnail ] = useState("");

  
    const navigate = useNavigate();
    const location = useLocation();
    // const { from } = location.state
    const {logUserData, setLogUserData } = useContext(UserDataContext)

    const handleChange = (event) => {
    
    }

    const handleSubmit = (event) =>{
      event.preventDefault();

      const updateUser ={
        user_name: userName,
        first_name: firstName.toLowerCase(),
        last_name: lastName.toLowerCase(),
        email: email.toLowerCase(),
        password: password,
        thumbnail: thumbnail
      };

      axios
        .post(`http://localhost:3005/secapp/edit/${logUserData._id}`, {updateUser})
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
            onChange={(e) =>
              {
                if(e.target.value > 0){
                setUserName(e.target.value)
                }
                else{
                  setUserName(logUserData.user_name)
                }
              }
            }
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
            onChange={(e) =>
              {
                if(e.target.value > 0){
                setFirstName(e.target.value)
                }
                else{
                setFirstName(logUserData.first_name)
                }
              }
            }
          />
          <label htmlFor="last_name">Last name:</label>
          <input
            type="text"
            name="name"
            id="lastname"
            // value=
            placeholder={logUserData.last_name}
            onChange={(e) =>
              {
                if(e.target.value > 0){
                setLastName(e.target.value)
                }
                else{
                setLastName(logUserData.last_name)
                }
              }
            }
          />
          <br/>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="name"
            id="email"
            // value=
            placeholder={logUserData.email}
              onChange={(e) =>
                {
                  if(e.target.value > 0){
                  setEmail(e.target.value)
                  }
                  else{
                  setEmail(logUserData.email)
                  }
                }
              }
          />
          <br/>
          

          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            id="image"
            // value=
            placeholder={logUserData.thumbnail}
            onChange={(e) =>
              {
                if(e.target.value > 0){
                setThumbnail(e.target.value)
                }
                else{
                setThumbnail(logUserData.thumbnail)
                }
              }
            }
          />
          
          <input type="submit" />
        </form>
      </div>
    )
}

export default UpdateUser;