import React from 'react';
import Classes from "./Classes";

export const ClassesPrivateRoute = () => {
    const token = localStorage.getItem('token')

    return token ? <Classes/> : window.location.href = '/login'
};















































