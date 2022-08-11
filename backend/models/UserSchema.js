const mongoose = require ('mongoose')

// schema
const userSchema = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
  email: {type: String},
  image: { type: String, default: 'http://placehold.it/500x500.png'}
});

// model and export 
module.exports = mongoose.model('User', userSchema)