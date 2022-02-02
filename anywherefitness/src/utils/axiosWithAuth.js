import React from 'react';
import axios from "axios";


const AxiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://anywhere-fitness-07-backend.herokuapp.com'
    })
};

export default AxiosWithAuth;
















































