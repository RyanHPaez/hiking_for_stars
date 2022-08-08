const mongoose = require ('mongoose')

const { Schema } = mongoose

// schema
const userSchema = new Schema({
  name: { type: String },
  password: { type: String },
  image: { type: String, default: 'http://placehold.it/500x500.png'}
})

// model and export 
const user = mongoose.model('User', userSchema)
module.exports = Bread