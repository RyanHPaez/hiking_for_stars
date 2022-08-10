const express = require('express');
const router = express.Router();
const Place = require('../models/PlacesSchema');

router.get('/places', async (req, res) => {

    console.log('inside the places route')
    res.send('inside the places route')
    // try{
    //   const foundPlaces = await Place.find();
    //   res.status(200).json(foundPlaces)
    //   }catch(err){
    //     res.status(500).json(err)
    //   }
    // }
    // Place.find()
  
    //     .then(foundUsers => {
    //         console.log(foundUsers)
    //     })
    // res.render('index',
    //   {
    //     places: Place,
    //     title: 'Index Page'
    //   }
    // )
}
)

module.exports = router;