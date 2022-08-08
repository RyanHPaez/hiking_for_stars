users.get('/', (req, res) => {
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