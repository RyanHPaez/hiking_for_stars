const express = require("express");
const router = express.Router();
const Place = require("../models/PlacesSchema");

router.get("/places", async (req, res) => {
  try {
    const foundPlaces = await Place.find()
    res.status(200).json(foundPlaces);
    // console.log(foundPlaces)
    // return foundPlaces
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
