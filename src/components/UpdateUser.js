import React, { useContext, useState } from "react";
import { UserDataContext } from "../context/userDataContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // const { from } = location.state
  const { logUserData, setLogUserData } = useContext(UserDataContext);

  const handleChange = (event) => {};

 
  const handleSubmit = (event) =>{
      event.preventDefault();
      const user_id = logUserData._id

      const updateUser ={
        user_name: userName,
        first_name: firstName.toLowerCase(),
        last_name: lastName.toLowerCase(),
        email: email.toLowerCase(),
        password: password,
        thumbnail: thumbnail
      };

      // setLogUserData(updateUser)
    axios
      .post(`http://localhost:3005/secapp/edit/${user_id}`, logUserData)
      .then((response) => console.log(response.data));
    window.alert("User has been updated");
    navigate("/user", { logUserData });
  };

  console.log("inside UpdateUser page");
  console.log(logUserData)
  // action={`/users/${logUserData._id}?_method=PUT`} method="POST"
  return (
    <div className="updateUser">
      <form onSubmit={handleSubmit} className="container">
        <div className="row align-items-center">
          <div className="updateUser col-sm-12 shadow-lg p-1 mb-1  my-4">
            <div className="col-sm-12 shadow-lg p-3 mb-1 text-center">
            <img
                className="profileUser rounded-circle my-3"                
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                alt="us"
              />
              <h1 className="font-weight-light text-center">Edit </h1>

              <div className="userName">
                <label htmlFor="user_name">New Username </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="username"
                  // value=
                  placeholder={logUserData.user_name}
                  onChange={(e) => {
                    if (e.target.value > 0) {
                      setUserName(e.target.value);
                    } else {
                      setUserName(logUserData.user_name);
                    }
                  }}
                />
              </div>
              <div className="newPassWord my-2">
                <label htmlFor="password">New Password</label>
                <input 
                type="password" 
                className="form-control"
                name="name" 
                id="password" />
              </div>
              <div className="confirmPassword my-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                type="password" 
                className="form-control"
                name="name" 
                id="confirmPassword" />
              </div>

              {/* <div className="col-md-12 my-2 text-center"> */}
              {/* <p>First name: {logUserData.first_name} </p> */}
              <div className="updateName">
                <label htmlFor="first_name">Update First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="firstname"
                  // value=
                  placeholder={logUserData.first_name}
                  onChange={(e) => {
                    if (e.target.value > 0) {
                      setFirstName(e.target.value);
                    } else {
                      setFirstName(logUserData.first_name);
                    }
                  }}
                />
              </div>
              <div className="LastName my-2">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="lastname"
                  // value=
                  placeholder={logUserData.last_name}
                  onChange={(e) => {
                    if (e.target.value > 0) {
                      setLastName(e.target.value);
                    } else {
                      setLastName(logUserData.last_name);
                    }
                  }}
                />
              </div>
              <div className="email my-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="email"
                  // value=
                  placeholder={logUserData.email}
                  onChange={(e) => {
                    if (e.target.value > 0) {
                      setEmail(e.target.value);
                    } else {
                      setEmail(logUserData.email);
                    }
                  }}
                />
              </div>
            
            <div className="userImage">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                id="image"
                // value=
                placeholder={logUserData.thumbnail}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setThumbnail(e.target.value);
                  } else {
                    setThumbnail(logUserData.thumbnail);
                  }
                }}
              />
            </div>
            </div>
            <div className="col-md-12 my-2 text-center">
            <input type="submit" />
          </div>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
