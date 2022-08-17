import { PromiseProvider } from "mongoose";
import React, { useContext, useEffect, useState } from "react";
import { PlaceDataContext } from "../context/placeDataContext";
import TrailDetails from "./TrailDetails";

function Page2(props) {
  const [userFavorite, setUserFavorite] = useState([]);
  const [hoverPopup, setHoverPopup] = useState(false);

  useEffect(() => {}, []);

  const placeData = useContext(PlaceDataContext);

  // const welcomeMessage = !props.user[0].user_name
  //   ? "Please log in or sign up"
  //   : props.user[0].user_name;

  //favorited trail
  const favoritedTrail = (trail) => {
    setUserFavorite(trail);
    window.alert(`Added ${trail.name} to your favorites!`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newFave = {};
    newFave = userFavorite;
  };

  const display = placeData.map((item, i) => {
    return (
      <div
        className="col-md-3 my-2"
        style={{
          textAlign: "center",
          display: "inline-table",
        }}
      >
        <form onSubmit={handleClick}>
          <h4
            style={{
              width: "auto",
              height: "50px",
              marginBottom: "40px",
              marginTop:'30px',
              padding:'5px',
              textAlign:'center',
            }}
            className="font-weight-light "
            key={i}
          >
            {item.name}
          </h4>

          <div className="column-md-3">
            <img
              style={{ width: "auto", height: "200px" }}
              className="img-fluid"
              src={item.thumbnail}
              onMouseOver={() => {
                setHoverPopup(true);
                // displayDetail(userFavorite);
              }}
              onMouseOut={() => {
                setHoverPopup(false);
              }}
            ></img>
          </div>

          <p>
            <b>Rating: </b>
            {item.rating}
            <b />
          </p>
          <p>
            <button
              onClick={() => {
                favoritedTrail(item);
              }}
            >
              Add to Favorites
            </button>
          </p>
        </form>
      </div>
    );
  });

  return (
    <div className="Page2">
      <div className="container">
        <div className="col-sm-12  my-5">
          <h1 className="font-weight-light ">Favorite Hiking Spots</h1>
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

          <div className="container">
            <div className="row">
              <div className="col-12 img-fluid">
                <h5> {display}</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 my-4">
            <h1 className="font-weight-light">About:</h1>
            <p>more Text or paragraph here!</p>
            <p>- Team Hangout</p>
          </div>
          <div>
            <TrailDetails
              trigger={hoverPopup}
              setTrigger={setHoverPopup}
              src={userFavorite.thumbnail}
            >
              <h3 className="font-weight-light trailName">
                {userFavorite.name}
              </h3>
              <img className="detailViewImg" src={userFavorite.thumbnail}></img>
              <div className="detailDescription">
                <span className="description">{userFavorite.description}</span>
                <br />
                Rating: {userFavorite.rating}
                <br />
                Difficulty: {userFavorite.difficulty}
                <br />
                Address: {userFavorite.address}
                <br />
                City: {userFavorite.city}
                <br />
              </div>
            </TrailDetails>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;