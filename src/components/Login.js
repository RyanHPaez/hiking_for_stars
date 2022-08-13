import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login ({setWelcomeUser}) {

    let navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [userName, setUserName] = useState("");

    useEffect( () => {
        axios
            .get(`http://localhost:3005/secapp/users`)
            .then((response) => setUserData(response.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSumbit')
        const loggedInUser = userData.filter( user => {
            return user.user_name === userName
        })
        if(loggedInUser.length > 0){
            setWelcomeUser(loggedInUser)
            navigate('/')
        }
        else{
            alert('Username is invalid, please try again. *Case Sensitive*')
        }
    }

     return (
        <div className="login" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row align-items-center">
              <div className="login col-sm-12 shadow-lg p-1 mb-1  my-5">
                <div className="col-sm-12 shadow-lg p-3 mb-1  ">
                  <h1 className="font-weight-light ">Login</h1>
    
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
                      Sign in
                    </button>
                    <p className="forgot-password text-right">
                          {/* Forgot <a href="#">password?</a> */}
                          Forgot password?
                        </p>
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

export default Login;
