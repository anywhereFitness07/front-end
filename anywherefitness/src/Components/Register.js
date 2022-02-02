import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialState = {
    username: "",
    password: "",
    role: ""
};

function Register() {
    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(values.role === 'Client' ) {
            axios.post('https://anywhere-fitness-07-backend.herokuapp.com/api/auth/clients/register',
                {client_name: values.username, password: values.password})
            .then(() => {
                navigate('/');
            })
                .catch(err => {
                    console.error(err);
                })
        } else if (values.role === 'Instructor') {
            axios.post('https://anywhere-fitness-07-backend.herokuapp.com/api/auth/instructors/register',
                { instructor_name: values.username, password: values.password })
            .then(() => {
                navigate('/');
            })
                .catch(err => {
                    console.error(err);
                })
        } else {
            return alert("error")
        }
    }
    




    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='form-title'>Register</h1>
                <div className='form-inputs'>
                    <label>Name:&nbsp;&nbsp;</label>
                    <input
                        id='client_name'
                        name='client_name'
                        type='text'
                        value={values.username}
                        onChange={handleChange}
                    />
                    <br/>
                    <label>Password:&nbsp;&nbsp;</label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    <br/>
                    <label>Role:&nbsp;&nbsp;</label>
                    <select onChange={handleChange} name='role'>
                        <option>---Select One---</option>
                        <option value='Client'>Client</option>
                        <option value='Instructor'>Instructor</option>
                    </select>
                </div>
                <button type='submit'>Register</button>
                <br/>
                <span>
                    Already have an account? <Link to="/login">Log in</Link>
                </span>
            </form>
        </div>
    )
}

export default Register