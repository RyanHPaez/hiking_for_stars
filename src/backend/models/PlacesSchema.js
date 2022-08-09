const mongoose = require ('mongoose')

// schema
const placeSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  rating: {type: String},
  image: { type: String, default: 'http://placehold.it/500x500.png'}
});

// model and export 
module.exports = mongoose.model('Place', placeSchema)