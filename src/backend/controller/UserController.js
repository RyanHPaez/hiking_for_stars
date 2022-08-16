const express = require('express');
const { ReturnDocument } = require('mongodb');
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
  
  
  //show user
  router.get('/:id', (req, res) => {
    // if(req.body.userName)
    // try { 
    //   const user= await User.findById(req.params.id)
    //   const {password, updatedAt, ...other} = user._doc
    //   res.status(200).json(other)
    // }catch (err) {
    //   res.status(500).json(err)
    // }
  })


//  //update user route
//   router.get('/:id/edit', async (req,res)=>{
//     console.log('hit update route')
//     res.send('Edit User' + req.params.id)
//     // try{
//     //     res.render('inside update users route')
//     // }catch(err){
//     //     res.send(err)
//     // }
//   })
  
  // // update user route 
  // router.put('/:id', async (req, res) =>{
  //   if(req.body.userId === req.params.id || req.user.isAdmin){
  //     try{
  //       const user= await User.findByIdAndUpdate(req.params.id, {})
  //     res.status(200).json("acc was updated")
  //     }catch 
      
  //   else {
  //     return res.status(403).json('you can only update your account')
  //   }
  // })
  
  //delete user 
  router.delete('/:id', async (req,res)=>
    res.send('Delete User' + req.params.id)
    // {
    // console.log('User: ', req.body.username)
    // const user = req.body.user_name
    // User.deleteOne({username: user}, function(err, obj) {
    //     if (err) throw err;
    //    res.status(200).send("1 document deleted");
    //   })
    );
  

module.exports = router;