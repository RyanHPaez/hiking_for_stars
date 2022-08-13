const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

router.get('/users', async (req, res) => {
  
  console.log('route hit')
    try {
      const foundUsers = await User.find()
      res.status(200).json(foundUsers);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/newUser', async (req, res) => {
    console.log('req.body for user', req.body)
  })

module.exports = router;