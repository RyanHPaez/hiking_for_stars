require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')
// const cors = require('cors');
const uri = process.env.MONGO_URI



//connect to mongoose
mongoose.connect('mongodb+srv://newUser1:8570Abr@h@m09@cluster0.mupyl.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: on PORT 3005') })

  

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
// app.use(cors())

const placeController = require('./controller/PlaceController');
app.use('/app', placeController)

app.get('/', (req, res) =>{
  res.send('Hello World')
})
app.listen(3005, () => console.log("Server is running on PORT 3005"));