const mongoose = require ('mongoose')

// schema
const userSchema = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
  favoriteTrails: { type: [{ type: String }] },
  previouslyVisited: { type: [{ type: String }] },
  expLevel: { type: String },
  email: {type: String},
  image: { type: String, default: 'http://placehold.it/500x500.png'}
});

// model and export 
module.exports = mongoose.model('User', userSchema)