import React from "react";

function Page2() {
  return (
    <div className="grid-container">
      <div className="container">
        <div className="row align-items-center my-4">
          <div className="grid-item pl-4 my-5">
          <form>
            <input
              // ref={term}
              type="text"
              placeholder="Where to?"
              // onChange={(e)=>setInput(e.target.value)}
            />
            <button>
              <i class="fas fa-search"></i>
            </button>
          </form>
            <div className="grid-item ">
              <h3 className="font-weight-light">
                Search your favorite hiking spot!
              </h3>
              <p>paragraph can go here!</p>
            </div>
          </div>
          <div className="imgpage2">
            <img
              className="p grid-item ml-5 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hill"
            />
          </div>
        </div>
        <div className= "grid-item">
        <h5>Repository link</h5>
        <a href={"https://github.com/RyanHPaez/hiking_for_stars"}>
          <h4>Check it out!</h4>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Page2;
