import { PromiseProvider } from 'mongoose';
import React, {useContext, useEffect, useState} from 'react'
import { PlaceDataContext } from '../context/placeDataContext';
import TrailDetails from './TrailDetails';



function Page2(props) {
  const [userFavorite, setUserFavorite ] = useState([])
  const [hoverPopup, setHoverPopup] = useState(false);
  
  useEffect( () => {}, []);

  const placeData = useContext(PlaceDataContext)
 

  // const welcomeMessage = !props.user[0].user_name
  //   ? "Please log in or sign up"
  //   : props.user[0].user_name;

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
      <div className='col-md-3 my-2' 
      
      style={{
        background: "black",
        width: '280px',
        height: "200px",
        margin: "20px",
        padding: '25px 50px 75px 50px',
        textAlign: "center",
        display: "inline-table",
        color: "white",
        backgroundColor: "black",
        borderRadius: "20px",
        position: 'inherit',
        border: '1px solid',
        gridTemplateRows: 'auto',
        gridArea: '10 / 10 / 20 / 20'
      }}
      >
          <form onSubmit={handleClick}>
            <h4 
            style={{background: "black",
            width: '250px',
            height: "200px",
            margin: "20px",
            padding: '50px 50px 0px 50px',
            textAlign: "center",
            display: "inline-table",
            color: "white",        backgroundColor: "black",
            borderRadius: "20px",
            position: 'inherit',
            // borderTop:'200px',
            // borderLeft:'200px',
            // borderRight:'200px',
            // borderBottom:'200px',
            gridTemplateRows: 'auto',
            gridArea: '10 / 10 / 20 / 20'}}
            
             key={i}>{item.name}
             
             </h4>
             
             
             <div className='column-md-3'>
          <img style={{ width: 'auto', height: '100px'}} 
            className='img-fluid'
           src={item.thumbnail} onMouseOver={() => { setHoverPopup(true); displayDetail(userFavorite) }}
            onMouseOut={() => { setHoverPopup(false) }}></img>
            </div>
            
            
            <p style={{
            paddingTop:'50px'
          }}>
            <b>Rating: </b>{item.rating}<b /></p>
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
    <div className="page2 col-md-12">
      <div className="container col-md-12">
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

          <div className='col-md-12 '>
            <h5> {display}</h5>
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
  </div>
  </div>
);
}

export default Page2;