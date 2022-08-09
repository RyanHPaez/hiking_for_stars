
import React from "react";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_Key,
		'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
	}
};

fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&page=2&radius=30', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	const options= {
		method: 'POST',
		terms:"",
		id: "", 
		url:"",
		name:"",
		city:"",
		region: "",
		country: "",
		difficulty: "",
		thumbnail: "",
		
		headers: {
			'X-RapidAPI-Key': API_Key,
			'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
		}
	};
	
	fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&page=2&radius=30', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
	
	
    export default Map;