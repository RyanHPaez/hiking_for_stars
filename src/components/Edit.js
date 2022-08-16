import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"

function EditUserForm() {

	const history = useHistory()

    const { userId } = useParams()

    const [user, setUser] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/users/${userId}`)
			const resData = await response.json()
			setUser(resData)
		}
		fetchData()
	}, [ userId ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/users/${user.userId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		history.push(`/users/${user.userId}`)
	}

	return (
		<main>
			<h1>Edit User Profile</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Username</label>
					<input
						required
						value={user.name}
						onChange={e => setuser({ ...user, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="founded">First Name</label>
					<input
						required
						value={user.first_name}
						onChange={e => setuser({ ...user, first_name: e.target.value })}
						className="form-control"
						id="first_name"
						name="first_name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">Last Name</label>
					<input
						value={user.last_name}
						onChange={e => setuser({ ...user, last_name: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="pic">User Picture</label>
					<input
						value={user.pic}
						onChange={e => setuser({ ...user, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Save" />
			</form>
		</main>
	)
}

export default EdituserForm
