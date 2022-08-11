import React from "react";
import Page2 from "./Page2";
import SearchBar from "./SearchBar";
import APIconfig from "./APIconfig";
//map function for the search bar 
function Map(props){

    const display = props.data.map((terms, index) => {
        return (
            <POST terms={terms} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}
//get the api for the trails data 
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
		'X-RapidAPI-Key': API_Key,
		'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
	}
};

fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&page=2&radius=30', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
//the method to get the search function working 
	// // const searchTerm = {
	// 	// method: 'POST',
	// 	terms:{
	// 		type:String,
	// 		require:true,

		
	// 	id:{
	// 		type:String,
	// 		require:false,
			
	// 	},
	// 	url:{
	// 		type:String,
	// 		require:false,

	// 	},
	// 	name:{
	// 		type:String,
	// 		require:false,

	// 	},	
	// 	city:{
	// 		type:String,
	// 		require:true,

	// 	},	
	// 	region:{
	// 		type:String,
	// 		require:true,

	// 	},	
	// 	country:{
	// 		type:String,
	// 		require:false,

	// 	},
	// 	difficulty:{
	// 		type:String,
	// 		require:true,

	// 	},thumbnail:{
	// 		type:String,
	// 		require:false,

	// 	}},
		
		// headers: {
		// 	'X-RapidAPI-Key': API_Key,
		// 	'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
		// }
	
	
	// fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&page=2&radius=30', options)
	// 	.then(response => response.json())
	// 	.then(response => console.log(response))
	// 	.catch(err => console.error(err));
	

    export default Map;
