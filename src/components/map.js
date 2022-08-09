
import React from "react";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fc73e876cmshbbb7a9c22b1c966p17aa01jsn612c4925dd8f',
		'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
	}
};

fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&page=2&radius=30', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    export default Map;