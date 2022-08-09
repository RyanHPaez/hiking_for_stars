const express = require('express');
const router = express.Router();
const User = require('.//models/userSchema');

router.get('/', async (req, res) => {
    User.find()
        .then(foundUsers => {
            console.log(foundUsers)
        })
    res.render('index',
      {
        users: User,
        title: 'Index Page'
      }
    )
})

module.exports = router;