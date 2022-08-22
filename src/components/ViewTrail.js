import { PromiseProvider } from "mongoose";
import React, { useContext, useEffect, useState } from "react";
import { PlaceDataContext } from "../context/placeDataContext";
import TrailDetails from "./TrailDetails";

function ViewTrail() {
  const [UserView, setUserView] = useState([]);
  const [hoverPopup, setHoverPopup] = useState(true);
  // const [UserView, setUserView] = useState(false);
  const ViewTrail = (trail) => {
    setUserView(trail);
    window.alert(`Want to see ${trail.name} to View!`);
  };

  <div>
  <TrailDetails
    trigger={hoverPopup}
    setTrigger={setHoverPopup}
    src={UserView.thumbnail}
  >
    <form>
      <h3 className="font-weight-light text-center trailName">
        {UserView.name}
      </h3>
      <div className="Page2">
      <img
        className="detailViewImg my-3"
        src={UserView.thumbnail}                  
      ></img>
      </div>
      <div className="detailDescription text-center ">
        <span className="description ">
          {UserView.description}
          {UserView.description}
        </span>
        <br />
        Rating: {UserView.rating}
        <br />
        Difficulty: {UserView.difficulty}
        <br />
        Address: {UserView.address}
        <br />
        City: {UserView.city}
        <br />
      </div>
    </form>
  </TrailDetails>
</div>
}

export default ViewTrail;
