const express = require("express");
const app = express();
const mongoose = require('mongoose')
// const cors = require('cors');

require("dotenv").config();

//connect to mongoose
mongoose.connect('mongodb+srv://newUser1:8570Abr@h@m09@cluster0.mupyl.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
// app.use(cors())

const placeController = require('./controller/PlaceController');
app.use('/app', placeController)

app.listen(3001, () => console.log("Server is running on PORT 3001"));