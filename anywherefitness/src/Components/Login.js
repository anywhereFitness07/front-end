import React, { useState } from "react";
import axios from "axios";
import ClientLogin from "./ClientLogin";
import InstructorLogin from "./InstructorLogin";


function Login()  {
    const [cred, setCred] = useState({});
    const [clientToggle, setClient] = useState(false);
    const [instructorToggle, setInstructor] = useState(false);

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


    const onSubmit = evt => {
        evt.preventDefault();

    }

    const clientOnClick = () => {
        setClient(!clientToggle);
        setInstructor(false);
        console.log('clientOnClick: ', clientToggle);

    }
    const instOnClick = () => {
        setInstructor(!instructorToggle);
        setClient(false);
        console.log('instOnClick: ', instructorToggle);

    }

    return (
        <div>
            <div>
                <h2 onClick={clientOnClick}>Client Login</h2>
                {
                    clientToggle && <ClientLogin />
                }
            </div>
            <div>
                <h2 onClick={instOnClick}>Instructor Login</h2>
                {
                    instructorToggle && <InstructorLogin />
                }
            </div>
        </div>
    )
}

export default Login;