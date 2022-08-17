const express = require('express');
const { ReturnDocument } = require('mongodb');
const router = express.Router();
const User = require('../models/UserSchema');

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
  
  
  //show user
  router.get('/:id', (req, res) => {
    const foundPlaces =  User.find()
      .then(foundUser => {
        res.render('show', {
          user: foundUser
        })
      })
      .catch(err => {
        res.send(404)
      })
  })
  
  // update user route 
    router.put('/:id', async (req, res) =>{
      // res.send('Update User' + req.params.id)
      User.findByIdAndUpdate(req.params.id, User)
      .then(updatedUser => {
        res.redirect(`/user/${req.params.id}`)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    })
  
  
  // DELETE
  router.delete('/:id', (req, res) => {
    console.log(req)
    User.findByIdAndDelete(req.params.id
    .then(deletedUser => {
    res.status(303).redirect('/Home')
    }))
  })
   
  

module.exports = router;