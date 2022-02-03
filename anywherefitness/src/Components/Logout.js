import { useEffect } from 'react'

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }, [])

    return (<div></div>);
};

export default Logout;















































