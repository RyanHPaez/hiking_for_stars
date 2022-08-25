//This component is to test the displayed searched results from the user using props and useContext
import React, { useEffect } from "react";
import { useContext } from "react";
import { PlaceDataContext } from "../context/placeDataContext";

function Places() {
  useEffect(() => {}, []);

  const placeData = useContext(PlaceDataContext);
  //This sets the state variable to the game that was clicked
  console.log("placeData", placeData);

  const display = placeData.map((item, i) => {
    return (
      <div>
        <h2 key={i}> {item.name}</h2>
        <img src={item.thumbnail}></img>
        <p>
          <b>Rating:</b> {item.rating}
        </p>
        <p>
          <b>About the Trail:</b>
          {item.description}
        </p>
      </div>
    );
  });

  return (
    <div
      style={{
        backgroundColor: "white",
        borderBottom: "50px solid lightblue",
        borderTop: "50px solid lightblue",
      }}
    >
      <div>
        {/* <a href='/cart'>Cart</a> */}
        <h5>Trails </h5>
        {display}
      </div>
    </div>
  );
}

export default Places;
