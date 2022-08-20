import React, { useContext, useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import { UserDataContext } from "../context/userDataContext";

function DeleteUser (props){
    console.log ('delete user page')

    const navigate = useNavigate();

    const {logUserData, setLogUserData } = useContext(UserDataContext)

    const userId = logUserData._id;
    const handleEditClick = (e) => {

        e.preventDefault()
        navigate('/Home', {logUserData})  
    }

    useEffect( () => {
        const res =
        axios
          .delete(`http://localhost:3005/secapp/delete/${logUserData._id}`)
          .then ((response) => console.log(response.data));
      }, []);

    return(

    <div>
        <div className="userdeleted">
            <h2>User, {logUserData.user_name}, has been deleted</h2>
        </div>
    </div>
    )
}


export default DeleteUser