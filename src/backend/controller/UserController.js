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

// find user by id
router.get('/user', async (req, res) =>{
  
  try{
    const foundeUser = await User.findById('')
    console.log('users', foundeUser);
    res.status(200).json(foundeUser);
  }catch(err){
    res.status(500).json(err);
  }
})

  //create new user
  router.post('/newUser', async (req, res) => {
    console.log('req.body for user', req.body)
    try{
      User.create(req.body)
      res.status(200).json('Success')
    }catch(err){
      res.status(500).send({message:err})
    }
  })


//router.put update user route

module.exports = router;