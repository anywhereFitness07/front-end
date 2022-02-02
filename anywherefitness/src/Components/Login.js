import React, { useState } from "react";
import ClientLogin from "./ClientLogin";
import InstructorLogin from "./InstructorLogin";


function Login()  {
    const [clientToggle, setClient] = useState(false);
    const [instructorToggle, setInstructor] = useState(false);

    const clientOnClick = () => {
        setClient(!clientToggle);
        setInstructor(false);
    };

    const instOnClick = () => {
        setInstructor(!instructorToggle);
        setClient(false);
    };

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