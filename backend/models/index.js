require('dotenv').config()
const req = require('express/lib/request')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Place = require('./PlacesSchema')
module.exports.User = require('./UserSchema.js')