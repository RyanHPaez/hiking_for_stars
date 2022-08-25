import { PromiseProvider } from "mongoose";
import React, { useContext, useEffect, useState } from "react";
import { PlaceDataContext } from "../context/placeDataContext";
import TrailDetails from "./TrailDetails";
import { NavLink } from "react-router-dom";

function Page2(props) {
  const [userFavorite, setUserFavorite] = useState([]);
  const [hoverPopup, setHoverPopup] = useState(false);
  const [userView, setUserView] = useState(false);

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
  const ViewTrail = (trail) => {
    setUserView(trail);
    window.alert(`Want to see ${trail.name} to View!?`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let newFave = {};
    newFave = userFavorite;
  };

  const displayDetail = (item, i) => {
    return (
      <div className="Page2">
        <form>
          {/* <h2 key={i}>{item.title}</h2> */}
          <img key={i} src={item.thumbnail}></img>
        </form>
      </div>
    );
  };

  const display = placeData.map((item, i) => {
    return (
      <div className="TrailName">
        <div className="container">
          <div className="row ">
            <div className="col">
              <h3 className="font-weight-light"></h3>
              <form onSubmit={handleClick}>
                {/* TrailName */}
                <h3 className="font-weight-light my-3" key={i}>
                  {item.name}
                </h3>
                {/* <NavLink className="nav-link" to="/ViewTrail"              
                onClick={() => {ViewTrail(item)}}                
              ><i class='fas fa-info-circle'></i>
              </NavLink>   */}
                {/* TrailImage */}
                <img
                  src={item.thumbnail}
                  onMouseOut={() => {
                    setHoverPopup(true);
                    displayDetail(userFavorite);
                  }}
                ></img>
                {/* Rating word */}
                <h6 class="my-3 font-weight-light">
                  <b>Rating: </b>
                  {item.rating}
                  <b />
                </h6>
                {/* AddToFavoriteButton */}
                <label
                  className="font-weight-light"
                  onClick={() => {
                    favoritedTrail(item);
                  }}
                >
                  <i class="far fa-heart"></i>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Page2">
      <div className="container">
        <div className="col-sm-12  my-5">
          <h1 className="font-weight-light text-center">
            Favorite Hiking Spots
          </h1>
          <form className="text-center">
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
              <div className="col-md-12 text-center">
                <h3> {display}</h3>
              </div>
            </div>
          </div>

          <div className="Page2 col-sm-12 my-4 text-center">
            <p>“Not all those who wander are lost.” </p>
            <p>- J.R.R. Tolkien</p>
          </div>
          <div>
            <TrailDetails
              trigger={hoverPopup}
              setTrigger={setHoverPopup}
              src={userFavorite.thumbnail}
            >
              <form>
                <h3 className="font-weight-light text-center trailName">
                  {userFavorite.name}
                </h3>
                <div className="Page2">
                  <img
                    className="detailViewImg my-3"
                    src={userFavorite.thumbnail}
                  ></img>
                </div>
                <div className="detailDescription text-center ">
                  <span className="description ">
                    {userFavorite.description}
                    {userView.description}
                  </span>
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
              </form>
            </TrailDetails>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
