const mongoose = require ('mongoose')

// schema
const userSchema = new mongoose.Schema({
  user_name: { 
      type: String,
      required: true, 
      unique: true
  },
  
  first_name:{
    type: String,
    required: true,
    unique: true
},

  last_name: {
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
  
  profile_id: {
    type: Number
  },
  
  registered_at: {
    type: Date
  },
  
  updatedAt: {
    type: Date
  },
  
  favoriteTrails: { type: [{ type: String }] },
  
  previouslyVisited: { type: [{ type: String }] },
  
  expLevel: { type: String },
  
  image: { type: String, default: 'http://placehold.it/500x500.png'}
}, {timestamps: true});

// model and export 
module.exports = mongoose.model('User', userSchema)