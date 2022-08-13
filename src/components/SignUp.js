import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Signup() {
    
    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    let navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();
        const newUser ={
            user_name: userName,
            first_name: firstName.toLowerCase(),
            last_name: lastName.toLowerCase(),
            email: email.toLowerCase(),
            password: password,
        };

        axios
            .post(`http://localhost:3005/secapp/newUser`, newUser)
            .then((res) => console.log(res.data))
            .then(() => navigate("/login"))
        }
  
    return (
      <div className="Signup">
        <div className="container">
          <div className="row align-items-center">
            <div className="Signup col-sm-12 shadow-lg p-1 mb-1  my-5">
              <div className="col-sm-12 shadow-lg p-3 mb-1  ">
                <h1 className="font-weight-light ">Signup</h1>

                <div className="UserName">
                  <label>UserName</label>
                  <input
                    type="UserName"
                    className="form-control"
                    placeholder="Enter UserName"
                    // value = {UserName}
                    //   onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="FirstName">
                  <label>FirstName</label>
                  <input
                    type="FirstName"
                    className="form-control"
                    placeholder="Enter FirstName"
                    // value = {FirstName}
                    //   onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="LastName">
                  <label>LastName</label>
                  <input
                    type="LastName"
                    className="form-control"
                    placeholder="Enter LastName"
                    // value = {LastName}
                    //   onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

  
                <div className="email">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    // value = {email}
                    //   onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    // value = {password}
                    //   onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid my-1">
                  <button type="submit" className="btn btn-primary">
                    Sign up
                  </button>
                  
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <img
                className="rounded-circle my-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2L9Cs5Ckge8P0041ykigrZY9nzuI5pzw01g&usqp=CAU"
                alt="us"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Signup;