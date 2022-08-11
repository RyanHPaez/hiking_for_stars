const mongoose = require ('mongoose')

// schema
const PlaceSchema = new mongoose.Schema({
  name: { type: String, require: true },
  address: { type: String, require: true},
  city:{ type: String, require: true },
  rating: {type: Number},
  description: {type: String, require: true},
  difficulty: {type: String, require: true},
  thumbnail: { type: String, default: 'http://placehold.it/500x500.png'}
}, {timestamps: true});

// model and export 
module.exports = mongoose.model('Place', PlaceSchema)