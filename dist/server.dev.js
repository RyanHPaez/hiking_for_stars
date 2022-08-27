"use strict";

require("dotenv").config({
  path: "../.env"
});

var express = require("express");

var app = express();

var mongoose = require('mongoose');

var cors = require('cors');

var uri = process.env.MONGODB_URI;
app.listen(3005, function () {
  return console.log("Server is running on PORT 3005");
});

var methodOverride = require('method-override'); //Middleware


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"]('public')); //to check put and delete

app.use(methodOverride('_method'));
app.use(cors({
  origin: '*'
}));

var placeController = require('./src/backend/controller/PlaceController');

app.use('/app', placeController);

var userController = require("./src/backend/controller/UserController");

app.use("/secapp", userController);

function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          mongoose.set("bufferCommands", false);
          _context.next = 4;
          return regeneratorRuntime.awrap(mongoose.connect("mongodb+srv://newUser1:newPass01@cluster0.mupyl.mongodb.net/Hiking_for_stars", {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }, function () {
            console.log("connected to mongoDB");
          }));

        case 4:
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

connect();