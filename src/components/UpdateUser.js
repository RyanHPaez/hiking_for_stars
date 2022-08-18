import {useContext} from "react";
import { UserDataContext } from "../context/userDataContext";
import { useNavigate, useLocation } from 'react-router-dom';
const React = require('react');




function UpdateUser () {

    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state
    const {logUserData, setLogUserData } = useContext(UserDataContext)
    return (
      <>
        <h2>Edit Profile</h2>
        <form action={`/users/${logUserData._id}?_method=PUT`} method="POST">          
        <label htmlFor="name">First name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={logUserData.first_name}
          />
          <label htmlFor="name">Last name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={logUserData.last_name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
          />
          
          <input type="submit"/>
        </form>
      </>
    )
}

export default UpdateUser;