const React = require('react')


function Edit () {
    return (
      
        <><h2>Edit a bread</h2><form action={`/breads/${bread._id}?_method=PUT`} method="POST">          <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                required
                defaultValue={bread.name} />
            <label htmlFor="image">Image</label>
            <input
                type="text"
                name="image"
                id="image"
                defaultValue={bread.image} />
            <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker" defaultValue={bread.baker}>
                {bakers.map((baker) => {
                    return (
                        <option value={baker._id} key={baker._id}>{baker.name}</option>
                    )
                })}
            </select>
            <label htmlFor="hasGluten">Has Gluten?</label>
            <input
                type="checkbox"
                name="hasGluten"
                id="hasGluten"
                defaultChecked={bread.hasGluten} />
            <br />
            <input type="submit" />
        </form></>
          )
        }
        
        module.exports = Edit