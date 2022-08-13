import React from "react";

function Page2() {

  
  return (
    <div className="page2">
      <div className="container">
        <div className="row align-items-center my-4">
          <div className="col-sm-6 pl-4 my-5">
            <h5>Repository link</h5>
            <a href={"https://github.com/RyanHPaez/hiking_for_stars"}>
              <h4>Check it out!</h4>
            </a>
            <div className="col-sm-10 my-5">
              <h1 className="font-weight-light">whatever we want!</h1>
              <p>paragraph can go here!:</p>
              <p>
                paragraph can go here!
              </p>
            </div>
          </div>
          <div className= 'col-sm-6 '>          
            <img
              className='p'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hill"
            />          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;