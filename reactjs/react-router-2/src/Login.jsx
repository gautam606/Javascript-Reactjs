import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();

    const login=()=>{
        localStorage.setItem("isLoggedIn","true")
        navigate("/dashboard")
    }
  return (
    <div>
    <h5>Login Page</h5>
    <button onClick={login}>Login</button>
    </div>
  )
}

export default Login