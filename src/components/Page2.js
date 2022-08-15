import { PromiseProvider } from 'mongoose';
import React, {useContext, useEffect, useState} from 'react'
import { PlaceDataContext } from '../context/placeDataContext';
import Page2 from './Page2original';
import TrailDetails from './TrailDetails';



function Page2(props) {
  const [userFavorite, setUserFavorite ] = useState([])
  const [hoverPopup, setHoverPopup] = useState(false);
  
  useEffect( () => {}, []);

  const placeData = useContext(PlaceDataContext)
 
  const welcomeMessage = !props.user[0].user_name
    ? "Please log in or sign up"
    : props.user[0].user_name;

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
        <img key={i} src={item.gameImage}></img>
        <p key={i}>${item.price}</p>
       
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
          <form onSubmit={handleClick}>
            <h2 key={i}>{item.name}</h2>
            <img src={item.thumbnail} onMouseOver={() => {setHoverPopup(true); displayDetail(userFavorite)}}
            onMouseOut={() => {setHoverPopup(false)}}></img>
            <p><b>Rating: </b>{item.rating}<b/></p>
            <p>
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
      <div className="Page2">
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
          <TrailDetails trigger = {hoverPopup} setTrigger={setHoverPopup} src={userFavorite.thumbnail}>
              <h3 className='trailName'>{userFavorite.name}</h3>
              <img className='detailViewImg' src={userFavorite.thumbnail} ></img>
              <div className='detailDescription'>
                
                <span className='description'>{userFavorite.description}</span>
                <br/>
                Rating: {userFavorite.rating}<br/>
                Difficulty: {userFavorite.difficulty}<br/>
                Address: {userFavorite.address}<br/>
                City: {userFavorite.city}<br/>

              </div>
          </TrailDetails>
        </div>
      </div>
  );
}
   
export default Page2;