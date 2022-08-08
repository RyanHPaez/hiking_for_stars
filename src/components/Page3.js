import React from "react";

function Page3() {
  return (
    <div className="page3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 shadow-lg p-1 mb-1">
            <img
              className="rounded-circle my-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2L9Cs5Ckge8P0041ykigrZY9nzuI5pzw01g&usqp=CAU"
              alt="us"
            />

            <div className="col-sm-12">
              <h1 className="font-weight-light">New Label Here</h1>

              <p>any of us:</p>

              <a href={"https://www.linkedin.com/in/ryan-paez/"}>
                Click here to go to my LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
