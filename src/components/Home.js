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
      <div>
        <div>
          <h5>Trails: {display}</h5>
        </div>
        <div>
          <TrailDetails trigger = {hoverPopup} setTrigger={setHoverPopup}>
              <h3 className='trailName'>{favoritedTrail.name}</h3>
              <img className='detailViewImg' src={favoritedTrail.thumbnail} ></img>
              <div className='detailDescription'>
                
                <span className='description'>{favoritedTrail.description}</span>
                <br/>
                Rating: {favoritedTrail.rating}<br/>
                Difficulty: {favoritedTrail.difficulty}<br/>
                Address: {favoritedTrail.address}<br/>
                City: {favoritedTrail.city}<br/>

              </div>
          </TrailDetails>
        </div>
      </div>
  );
}
   
export default Home;