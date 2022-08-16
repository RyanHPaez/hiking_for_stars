const React = require('react')
const Default = require('./layout/Default')

function Edit (bread) {
    return (
      <>
        <h2>Edit User</h2>
        <form action={`/users/${user._id}?_method=PUT`} method="POST">          
        <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={user.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
          />
          
          <input type="submit"/>
        </form>
      </>
    )
}

module.exports = Edit