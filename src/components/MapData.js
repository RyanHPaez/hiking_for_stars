import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

// import 
// require('dotenv').config({path: '../.env'})
// const API_KEY = process.env.API_KEY;
//map function for the search bar 

function MapData(props){
	// let searchData = {}
		const [searchData, setSearchData] = useState([]);
	const options = {
		method: 'GET',
		terms:{
			type:String,
			require:true,

		},
		id:{
			type:String,
			require:false,

		},
		url:{
			type:String,
			require:false,

		},
		name:{
			type:String,
			require:false,

		},	
		city:{
			type:String,
			require:true,

		},	
		region:{
			type:String,
			require:true,

		},	
		country:{
			type:String,
			require:false,

		},
		difficulty:{
			type:String,
			require:true,

		},
		thumbnail:{
			type:String,
			require:false,

		},
		headers: {
			'X-RapidAPI-Key': '1fc73e876cmshbbb7a9c22b1c966p17aa01jsn612c4925dd8f',
			'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
		}
	};

	fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&page=2&radius=50', options)
		.then((response) => response.json())
		.then((response) => setSearchData(response.data))
		.catch(err => console.error(err));

    const display  = searchData.map((item, index) => {
         return (
			<div>


				 <div className='trailName' key={index}><p>{item.name}</p></div>
				 <img src={item.thumbnail} alt='Trail' weight="400" height="400"></img>
				 <div className='trailCity'><p>{item.city}</p></div>
				 <div className='trailDifficulty'><p>{item.difficulty}</p></div>
				 <div className='trailDescription'><p>{item.description}</p></div>
				 <div className='trailDirections'><p>{item.directions}</p></div>


			 </div>
		


        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

	 export default MapData; 