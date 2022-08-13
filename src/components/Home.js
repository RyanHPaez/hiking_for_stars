<<<<<<< Updated upstream
import React from "react";

function Home() {
  return (
    <div className="Home">
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
=======
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
>>>>>>> Stashed changes
        </div>
        <h5>Repository link</h5>
        <a href={"https://github.com/RyanHPaez/hiking_for_stars"}>
          <h4>Check it out!</h4>
        </a>
      </div>
  );
}
   
export default Home;