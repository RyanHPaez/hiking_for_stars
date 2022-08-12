import React from "react";

function Page2() {
  return (
    <div className="page2">
      <div className="container">
        <div className="row align-items-start my-4">
          <div className="row">
            <div className="col-{breakpoint}-auto">
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
              <div className="row align-items-center">
                <div className="col-{breakpoint}-auto">
                  <h1 className="font-weight-light">
                    Search your favorite hiking spot!
                  </h1>
                  <p>paragraph can go here!</p>
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-md-12">
                  <img
                    className="img-fluid "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
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
    </div>
  );
}

export default Page2;
