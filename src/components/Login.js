function Login() {
  return (
    <div className="login">
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
