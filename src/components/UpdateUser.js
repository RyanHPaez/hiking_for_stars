import {useContext} from "react";
import { UserDataContext } from "../context/userDataContext";
import { useNavigate, useLocation } from 'react-router-dom';
const React = require('react');




function UpdateUser () {

    const navigate = useNavigate();
    const location = useLocation();
    // const { from } = location.state
    const {logUserData, setLogUserData } = useContext(UserDataContext)
 console.log('inside UpdateUser page')
// action={`/users/${logUserData._id}?_method=PUT`} method="POST"
    return (
      <div className="container">
        <h2>Edit Profile</h2>
        <form>          
        <label htmlFor="name">First name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={logUserData.first_name}
          />
          <label htmlFor="name">Last name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={logUserData.last_name}
          />
          <br/>
          <label htmlFor="name">Email:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={logUserData.email}
          />
          <br/>

          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            id="image"
          />
          
          <input type="submit"/>
        </form>
      </div>
    )
}

export default UpdateUser;