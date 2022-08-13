const mongoose = require ('mongoose')

// schema
const userSchema = new mongoose.Schema({
  name: { 
      type: String,
      required: true, 
      unique: true
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: { 
      type: String,
      required: true,
  },
  favoriteTrails: { type: [{ type: String }] },
  previouslyVisited: { type: [{ type: String }] },
  expLevel: { type: String },
  image: { type: String, default: 'http://placehold.it/500x500.png'}
}, {timestamps: true});

// model and export 
module.exports = mongoose.model('User', userSchema)