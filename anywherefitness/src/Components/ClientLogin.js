import React, { useState } from 'react';

const initialValues = {
    client_name: '',
    password: ''
};

const ClientLogin = props => {
    const {} = props;
    const [values, setValues] = useState(initialValues)

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
                    <label>Client Name:&nbsp;&nbsp;</label>
                    <input
                        onChange={onChange}
                        type="text"
                        id="username-id"
                        name="client_name"
                    />&nbsp;&nbsp;
                    <label>Password:&nbsp;&nbsp;</label>
                    <input
                        onChange={onChange}
                        type="text"
                        id="password-id"
                        name="password"
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ClientLogin;
















































