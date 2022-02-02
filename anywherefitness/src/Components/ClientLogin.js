import React, { useState } from 'react';
import axios from "axios";

const initialValues = {
    client_name: '',
    password: ''
};

const ClientLogin = props => {
    const {} = props;
    const [values, setValues] = useState(initialValues);

    const clientLogin = credentials => {
        axios.post(`https://anywhere-fitness-07-backend.herokuapp.com/api/auth/clients/login`, credentials)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('token', token);
                window.location.href = '/'
            })
            .catch(err => {
                console.error(err);
            });
    };

    const onSubmit = evt => {
        evt.preventDefault();
        clientLogin(values)
    };

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setValues({
            ...values,
            [name]: value
        });
    };

    return (
        <div>
            <div>
                <h1>Client Login</h1>
            </div>
            <form>
                <div>
                    <label onSubmit={onSubmit}>Client Name:&nbsp;&nbsp;</label>
                    <input
                        onChange={onChange}
                        type="text"
                        name="client_name"
                        value={values.client_name}
                    />&nbsp;&nbsp;
                    <label>Password:&nbsp;&nbsp;</label>
                    <input
                        onChange={onChange}
                        type="text"
                        value={values.password}
                        name="password"
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ClientLogin;
















































