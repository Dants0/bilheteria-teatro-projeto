import React from 'react'
import Navbar from '../../components/Navbar'
import UserRegisterAndLogin from '../../components/UserRegisterAndLogin'



const Login = () => {
    return (
        <div className="container_login">
            <Navbar />
            <UserRegisterAndLogin />
        </div>
    )
}

export default Login