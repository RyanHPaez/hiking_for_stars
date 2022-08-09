const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.statis('public'))
app.use(cors())

const userController = require('./controller/UserController');
app.use('/app', userController)

app.listen(3001, () => console.log("Server is running on PORT 3001"));