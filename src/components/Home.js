import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row align-items-start my-4">
          <div className="col-sm-12">
            <form>
              <input
                // ref={term}
                type="text"
                placeholder="Where to?"
                // onChange={(e)=>setInput(e.target.value)}
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="row align-items-center">
              <div className="col-sm-12">
                <h1 className="font-weight-light">
                  Search your favorite hiking spot!
                </h1>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <img
                  className="img-fluid "
                  src="https://olyortho.com/wp-content/uploads/2020/09/AdobeStock_124565984-1-scaled.jpeg"
                  alt="hills"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5>Repository link</h5>
      <a href={"https://github.com/RyanHPaez/hiking_for_stars"}>
        <h4>Check it out!</h4>
      </a>
    </div>
  );
}

export default Home;
