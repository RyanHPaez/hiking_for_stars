import React, {useContext, useEffect, useState} from 'react'
import { PlaceDataContext } from '../context/placeDataContext';
import TrailDetails from './TrailDetails';



function Home() {
  const [userFavorite, setUserFavorite ] = useState([])
  const [hoverPopup, setHoverPopup] = useState(false);
  
  useEffect( () => {}, []);

  const placeData = useContext(PlaceDataContext)
 
  //favorited trail
  const favoritedTrail = (trail) => {
      setUserFavorite(trail)
      window.alert(`Added ${trail.name} to your favorites!`)
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newFave = {};
    newFave = userFavorite;
  }

  const displayDetail = ((item, i) =>{
    return (
      <div
      style={{
        background: "black",
        width: "280px",
        height: "200px",
        margin: "20px",
        textAlign: "center",
        display: "inline-table",
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        position: "relative",
      }}
    >
      <form>
        <h2 key={i}>{item.title}</h2>
        <img src={item.gameImage}></img>
        <p>${item.price}</p>
       
      </form>
    </div>
    )
  })


  const display = placeData.map((item, i) => {

    return(
      <div
      style={{
        background: "black",
        width: "280px",
        height: "200px",
        margin: "20px",
        textAlign: "center",
        display: "inline-table",
        color: "white",
        backgroundColor: "black",
        borderRadius: "20px",
        position: "relative",
      }}
      >
          <form >
            <h2 key={i}>{item.name}</h2>
            <img src={item.thumbnail} onMouseOver={() => {setHoverPopup(true); displayDetail(item)}}
            onMouseOut={() => {setHoverPopup(false)}}></img>
            <p><b>Rating: </b>{item.rating}<b/>
            <button onClick={() => {
              favoritedTrail(item);
            }}>
              Add to Favorites
            </button>
            </p>
          </form>
      </div>
    )
  })

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
          <h5>Trails: {display}</h5>
        </div>
        <div className="col-sm-12 my-4">
              <h1 className="font-weight-light">About:</h1>
              <p>more Text or paragraph here!</p>
              <p>- Team Hangout</p>
        </div> 
        <div>
          <TrailDetails trigger = {hoverPopup} setTrigger={setHoverPopup} src={placeData.thumbnail}>
              <h3 className='trailName'>{placeData.name}</h3>
              <img className='detailViewImg' src={placeData.thumbnail} ></img>
              <div className='detailDescription'>
                
                <span className='description'>{placeData.description}</span>
                <br/>
                Rating: {placeData.rating}<br/>
                Difficulty: {placeData.difficulty}<br/>
                Address: {placeData.address}<br/>
                City: {placeData.city}<br/>

              </div>
          </TrailDetails>
        </div>
      </div>
  );
}
   
export default Home;