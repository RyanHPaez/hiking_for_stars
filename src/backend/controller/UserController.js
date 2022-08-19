const { default: userEvent } = require('@testing-library/user-event');
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
    const foundeUser = await User.findById('6293baa909f515f3d55c9c5b')
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

 //update user route
  router.put('/edit/:id', async (req,res)=>{
    console.log('hit update route through edit/id')
    // res.send('Edit User' + req.params.id)
    const id = req.params.id
    User.findByIdAndUpdate(id)
    .then(result => {
      res.json({ redirect: '/User '})
    })
    // try{
    //     res.render('inside update users route')
    // }catch(err){
    //     res.send(err)
    // }
  })
  
  //delete user 
  router.delete('/delete/:id', async (req,res)=>{
  
    const id = req.params.id

    User.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/Home '})
    })

  });
  

module.exports = router;