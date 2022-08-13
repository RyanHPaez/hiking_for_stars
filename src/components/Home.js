import React, {useContext, useEffect, useState} from 'react'
import { PlaceDataContext } from '../context/placeDataContext';
import TrailDetails from './TrailDetails';



function Home() {

  const [hoverPopup, setHoverPopup] = useState(false);
  
  useEffect( () => {}, []);

  const placeData = useContext(PlaceDataContext)
 
//favorited trail
const favoritedTrail = (trail) => {
    window.alert(`Added ${trail.name} to your favorites!`)
};

  //map through data and render images and information for page
  const display = placeData.map((item, i) => {

    return(
      <div
      style={{
        background:"tan",
        width: "200px",
      }}
      >
          <form >
            <h2 key={i}>{item.name}</h2>
            <img src={item.thumbnail} onMouseOver={() => {setHoverPopup(true)}}
            onMouseOut={() => {setHoverPopup(false)}}></img>
            <p><b>Rating: </b>{item.rating}<b/>
            <button onClick={() => {
              favoritedTrail(item);
            }}>
              Add to Favorites
            </button>
            </p>
            <p><b>About the trail: </b>{item.description}</p>
          </form>
      </div>
    )
  })

  return (

    
    <div className="home">
      <div className="container">
        <PlaceDataContext.Provider>
        <TrailDetails trigger={hoverPopup} setTrigger={setHoverPopup} src={placeData.thumbnail}>
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
                  onMouseOver={() => {setHoverPopup(true);}}
                  onMouseOut={() =>{setHoverPopup(false)}}
                ></img>
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
        </TrailDetails>
        </PlaceDataContext.Provider>
      </div>
      
    </div>
  );
}

export default Home;