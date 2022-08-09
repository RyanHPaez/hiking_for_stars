const express = require('express');
const router = express.Router();
const Place = require('../models/PlacesSchema');

router.get('/', async (req, res) => {
    Place.find()
        .then(foundUsers => {
            console.log(foundUsers)
        })
    res.render('index',
      {
        places: Place,
        title: 'Index Page'
      }
    )
})

module.exports = router;