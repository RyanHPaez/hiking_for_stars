const express = require('express');
const router = express.Router();
const Place = require('../models/PlacesSchema');

router.get('/places', async (req, res) => {

    console.log('inside the places route')
    res.send('inside theplaces')
    try{
      const foundPlaces = await Place.find();
      res.status(200).json(foundPlaces)
      }catch(err){
        res.status(500).json(err)
      }
    }
)

module.exports = router;