import {useContext, useEffect} from 'react'
import { PlaceDataContext } from '../context/placeDataContext';
const axios = require('axios'); 


function Home() {

  useEffect( () => {}, []);

  const placeData = useContext(PlaceDataContext)
 

  return (
    <div className="home">
      <div className="container">
        <div className="col-sm-12  my-5">
          <h1 className="font-weight-light ">Let's go HIKING!</h1>
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
          <p>Are we ready to put text here?</p>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-md-3 my-2">
            <button>
              <img
                className="img-fluid "
                src={placeData[0].thumbnail}
                alt="hills"
              />
            </button>
            <p>{placeData[0].name}</p>
          </div>
          <div className="col-md-3 my-2">
            <button>
              <img
                className="img-fluid "
                src={placeData[1].thumbnail}
                alt="hills"
              />
            </button>
            <p>{placeData[1].name}</p>
          </div>
          <div className="col-md-3 my-2">
            <button>
              <img
                className="img-fluid "
                src={placeData[2].thumbnail}
                alt="hills"
              />
            </button>
            <p>{placeData[2].name}</p>
          </div>
          <div className="col-md-3 my-2">
            <button>
              <img
                className="img-fluid "
                src={placeData[3].thumbnail}
                alt="hills"
              />
            </button>
            <p>{placeData[3].name}</p>
          </div>
          <div className="col-md-3 my-2">
            <button>
              <img
                className="img-fluid "
                src={placeData[4].thumbnail}
                alt="hills"
              />
            </button>
            <p>{placeData[4].name}</p>
          </div>
          <div className="col-md-3 my-2">
            <button>
              <img
                className="img-fluid "
                src={placeData[5].thumbnail}
                alt="hills"
              />
            </button>
            <p>{placeData[5].name}</p>
          </div>
          <div className="col-md-3 my-2">
            <button>
              <img
                className="img-fluid "
                src={placeData[6].thumbnail}
                alt="hills"
              />
            </button>
            <p>{placeData[6].name}</p>
          </div>
          <div className="col-md-3 my-2">
            <button>
              <img
                className="img-fluid "
                src={placeData[7].thumbnail}
                alt="hills"
              />
            </button>
            <p>{placeData[7].name}</p>
          </div>

          <div className="col-sm-12 my-4">
            <h1 className="font-weight-light">About:</h1>
            <p>more Text or paragraph here!</p>
            <p>- Team Hangout</p>
          </div> 
        </div>
        {/* {displayPlaces} */}
      </div>
    </div>
  );
}

export default Home;