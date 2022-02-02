import React, {useState} from "react";

function Login()  {
    const [cred, setCred] = useState({});
    // localStorage.setItem('token', 'token')

    const handleChange = (e) => {
    setCred({
        ...cred,
        [e.target.name]: e.target.value
        })
        console.log(cred)
    };

    return (
        <div>
            <h1>Login Page</h1>
        <form>
            <div>
                <label
                    htmlFor="username">
                    Username:&nbsp;&nbsp;
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    id="username-id"
                    name="client_name"
                />
            </div>
            <div>
                <label
                    htmlFor="password">
                    Password:&nbsp;&nbsp;
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    id="password-id"
                    name="password"
                />
            </div>
        </form>
        </div>
    )
}

export default Login;