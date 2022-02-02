import React, { useState, useEffect } from 'react';
import axios from "axios";


const initialValues = {
    instructor_name: '',
    password: ''
};

const InstructorLogin = props => {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        axios.get(`https://anywhere-fitness-07-backend.herokuapp.com/api/auth/instructors`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err);
            })

    },[])

    const instructorLogin = credentials => {
        axios.post(`https://anywhere-fitness-07-backend.herokuapp.com/api/auth/instructors/login`, credentials)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('token', token);
                window.location.href = '/'
            })
            .catch(err => {
                console.error(err);
            });
    };

    const onChange = (evt) => {
      const name = evt.target.name;
      const value = evt.target.value;
      setValues({
          ...values,
          [name]: value
      });
        console.log(values)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        instructorLogin(values);
    };


    return (
        <div>
            <div>
                <h1>Instructor Login</h1>
            </div>
            <div className='form-container'>
                <form className='inst=login' onSubmit={onSubmit}>
                    <label>Instructor Name:&nbsp;</label>
                    <input
                        type="text"
                        name='instructor_name'
                        value={values.instructor_name}
                        onChange={onChange}
                    />
                    <br/>
                    <label>Password:&nbsp;</label>
                    <input
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <br/>
                    <br/>
                    <button>Submit</button>
                </form>

            </div>

        </div>
    );
};

export default InstructorLogin;
















































