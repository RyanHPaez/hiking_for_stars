require('dotenv').config({path: '../.env'});
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const uri = process.env.MONGO_URI
const methodOverride = require ('method-override')



async function connect(){
  try{
    mongoose.set('bufferCommands', false);
    mongoose.connect('mongodb+srv://newUser1:newPass01@cluster0.mupyl.mongodb.net/Hiking_for_stars', 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
      () => { console.log('connected to mongoDB') })
  }catch(err){
    console.log(err)
  }
}
connect();
//connect to mongoose
// mongoose.connect('mongodb+srv://newUser1:8570Abr@h@m09@cluster0.mupyl.mongodb.net/?retryWrites=true&w=majority', 
// {useNewUrlParser: true, useUnifiedTopology: true}, 
//   () => { console.log('connected to mongo:') })



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
//to check put and delete
app.use(methodOverride('_method'))
app.use(cors({
  origin: '*'
}));

const placeController = require('../backend/controller/PlaceController');
app.use('/app', placeController)

const userController = require ('../backend/controller/UserController');
app.use('/secapp', userController)


app.listen(3005, () => console.log("Server is running on PORT 3005"));