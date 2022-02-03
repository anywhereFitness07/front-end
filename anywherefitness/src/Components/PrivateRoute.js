import React from 'react';
import Classes from "./Classes";
import Logout from "./Logout";

export const ClassesPrivateRoute = () => {
    const token = localStorage.getItem('token');
    return token ? <Classes/> : window.location.href = '/login';
};

export const LogoutPrivateRoute = () => {
    const token = localStorage.getItem('token');
    return token ? <Logout /> : window.location.href = '/login';
}













































