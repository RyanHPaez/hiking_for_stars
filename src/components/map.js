import React, { useState } from "react";
// require('dotenv').config({path: '../.env'})
// const API_KEY = process.env.API_KEY;
//map function for the search bar 

function Map(props){
	const [searchData, setSearchData] = useState([]);
	const options = {
		method: 'GET',
		terms:{
			type:String,
			require:true,
	
		
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
	
		},thumbnail:{
			type:String,
			require:false,
	
		}},
		headers: {
			'X-RapidAPI-Key': '1fc73e876cmshbbb7a9c22b1c966p17aa01jsn612c4925dd8f',
			'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
		}
	};
	
	fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&page=2&radius=30', options)
		.then(response => response.json())
		.then(response => setSearchData(response))
		.catch(err => console.error(err));
    const display = searchData.data.map((terms, index) => {
         return (
			<div><p>get map</p></div>
            // <GET terms={terms} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

	 export default Map;