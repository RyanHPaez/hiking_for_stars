require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const uri = process.env.MONGODB_URI;

const methodOverride = require("method-override");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//to check put and delete
app.use(methodOverride("_method"));
app.use(
  cors({
    origin: "*",
  })
);

const placeController = require("./src/backend/controller/PlaceController");
app.use("/app", placeController);

const userController = require("./src/backend/controller/UserController");
app.use("/secapp", userController);

app.listen(process.env.SERVERPORT || 3005, () => console.log("Server is running on PORT 3005"));

async function connect() {
  try {
    mongoose.set("bufferCommands", false);
    await mongoose.connect(
      "mongodb+srv://newUser1:newPass01@cluster0.mupyl.mongodb.net/Hiking_for_stars",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("connected to mongoDB");
      }
    );
  } catch (err) {
    console.log(err);
  }
}
connect();
