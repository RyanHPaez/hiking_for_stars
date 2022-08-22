import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 text-center my-4">
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

            <div className="col-sm-12 text-center">
              <h1 className="font-weight-light">
                Search your favorite hiking spot!
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <img
                className="img-fluid "
                src="https://olyortho.com/wp-content/uploads/2020/09/AdobeStock_124565984-1-scaled.jpeg"
                alt="hills"
              />
              <div className="col-md-12  my-4 text-center">
                <h5>Repository link</h5>
                <a href={"https://github.com/RyanHPaez/hiking_for_stars"}>
                  <h4>Check it out!</h4>
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
