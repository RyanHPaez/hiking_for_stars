import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login ({setWelcomeUser}) {

    let navigate = userNavigate();
    const [userData, setUserData] = useData([]);
    const [userName, setUserName] = useState("");

    useEffect( () => {
        axios
            .get(`http://localhost:3005/signup/users`)
            .then((response) => setUserData(response.data));
    }, []);

    
}