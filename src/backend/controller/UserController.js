const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

router.get('/users', async (req, res) => {
  
  console.log('route hit')
  
  
  
  
  // User.find()
    //     .then(foundUsers => {
    //         console.log(foundUsers)
    //     })
    // res.render('index',
    //   {
    //     users: User,
    //     title: 'Index Page'
    //   }
    // )
})

module.exports = router;