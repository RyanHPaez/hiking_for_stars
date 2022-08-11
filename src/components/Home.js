import React,{useEffect, useState, useContext} from "react";
import { PlaceDataContext } from "../context/placeDataContext";


function Home() {

  // useEffect(() => {}, []);
  // const placeData = useContext(PlaceDataContext);


  return (

    <div className="home">
      <div className="container">
   
      <div className="col-sm-12  my-5">
            <h1 className="font-weight-light ">Hi!</h1>
            <form>
              <input
                // ref={term}
                type="text"
                placeholder="Where to?"
                // onChange={(e)=>setInput(e.target.value)}
              />
              <button>Search</button>
            </form>
            <p>Are we ready to put text here?</p>
          </div>
        <div className="row align-items-center my-5">          
          <div className="col-md-3 my-2">
            <button>
            <img
              className="img-fluid "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hills"
            />
            </button>
          </div>
          <div className="col-md-3 my-2">
          <button>
            <img
              className="img-fluid "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hills"
            />
            </button>
          </div>
          <div className="col-md-3 my-2">
          <button>
            <img
              className="img-fluid "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hills"
            />
            </button>
          </div>
          <div className="col-md-3 my-2">
          <button>
            <img
              className="img-fluid "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hills"
            />
            </button>
          </div>
          <div className="col-md-3 my-2">
          <button>
            <img
              className="img-fluid "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hills"
            />
            </button>
          </div>
          <div className="col-md-3 my-2">
          <button>
            <img
              className="img-fluid "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hills"
            />
            </button>
          </div>
          <div className="col-md-3 my-2">
          <button>
            <img
              className="img-fluid "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hills"
            />
            </button>
          </div>
          <div className="col-md-3 my-2">
          <button>
            <img
              className="img-fluid "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
              alt="hills"
            />
            </button>
          </div>
          
          <div className="col-sm-12 my-4">
            <h1 className="font-weight-light">About:</h1>
            <p>more Text or paragraph here!</p>
            <p>- Team Hangout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
