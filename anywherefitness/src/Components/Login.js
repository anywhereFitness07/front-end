import React, {useState} from "react";

function Login()  {
const [cred, setCred] = useState({
    client_name: '',
    password: ''
})


const handleChange = (e) => {
setCred({
    ...cred,
    [e.target.name]: e.target.value
    })
    console.log(e.target.value)
}

return (
    <div>
        <h1>Login Page</h1>
    <form>
    <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} type="text" id="id" name="username"/>
    </div>
    <div>
        <label htmlFor="password">Password:</label>
        <input onChange={handleChange} type="text" id="id" name="password"/>
    </div>
    </form>
    </div>
)
}

export default Login