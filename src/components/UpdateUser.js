const React = require('react')


function Edit () {
    return (
      
        <><h2>Edit User</h2>
        <form action={`/users/${users._id}?_method=PUT`} method="POST">          
        <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                required
                defaultValue={user.name} />
            <label htmlFor="image">Image</label>
            <input
                type="text"
                name="image"
                id="image"
                defaultValue={user.image} />
            <label htmlFor="user">User</label>
            <select name="user" id="user" defaultValue={bread.user}>
                {users.map((user) => {
                    return (
                        <option value={user._id} key={user._id}>{user.name}</option>
                    )
                })}
            </select>
        </form></>
          )
        }
        
        module.exports = Edit