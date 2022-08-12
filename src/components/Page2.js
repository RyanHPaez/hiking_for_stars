import React from "react";

function Page2() {
  return (
    <div className="page2">
      <div className="container">
        <div className="row align-items-center my-4">
          <div className="col-sm-6 pl-4 my-5">
            <div className="col-sm-8 my-5">
              <h1 className="font-weight-light">
                Search your favorite hiking spot!
              </h1>
              <p>paragraph can go here!:</p>
              <p>paragraph can go here!</p>
            </div>
          </div>
          <div className="col-sm-4 ml-5 ">
            <img
              className="p"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hill"
            />
          </div>
        </div>
        <h5>Repository link</h5>
        <a href={"https://github.com/RyanHPaez/hiking_for_stars"}>
          <h4>Check it out!</h4>
        </a>
      </div>
    </div>
  );
}

export default Page2;
