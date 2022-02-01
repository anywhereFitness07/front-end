import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login()  {

const [cred, setCred] = useState({
    client_name: '',
    password: ''
})
const push = useNavigate();

const send = () => {
    push('/register')
}

const handleChange = (e) => {
setCred({
    ...cred,
    [e.target.name]: e.target.value
    })
    console.log(cred)
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is", e)
    axios.post('https://anywhere-fitness-07-backend.herokuapp.com/api/auth/clients/register', cred)
    .then(resp => {
        console.log(resp.data)
        localStorage.setItem('token', resp.data.token)
    })
    .catch(err => {
        console.log(err)
    })
}



return (
    <div>
        <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="client_name">Username: </label>
        <input onChange={handleChange} type="text" id="id" name="client_name"/>
    </div>
    <div>
        <label htmlFor="password">Password: </label>
        <input onChange={handleChange} type="password" id="id" name="password"/>
    </div>
    <button>login</button>
    </form>
    <h3>Dont have an account?</h3>
<button onClick={send}>Register now!</button>
    </div>
)
}

export default Login