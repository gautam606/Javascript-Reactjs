import React from 'react'
import { useState } from "react";
import './../styles/Login.css'

const Login = ({onSwitch,account}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [submittedData, setSubmittedData] = useState(null);
const handleLogin = (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (!email.trim() || !password) {
    setError("Please enter email and password");
    return;
  }

  if (!account) {
    setError("Please sign up first");
    return;
  }

  if (
    email.trim().toLowerCase() !== account.email.trim().toLowerCase() ||
    password !== account.password
  ) {
    setError("Invalid email or password");
    return;
  }

  setSuccess(`Welcome, ${account.name}!`);
};
  return (
    <div className='login-container'>
    <form className='login-form' onSubmit={handleLogin}>
    <h1>Welcome Back</h1>
    <p>Login to you account</p>
    <label htmlFor='email'>Email</label>
    <input type='email' 
    id='email' 
    placeholder='enter you email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />

    <label htmlFor='password'>password</label>
    <input type='password' id='password' placeholder='Enter your password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
     />

    <button type='submit'>Login</button>
    <p>
  Don't have an account?{" "}
  <button type="button" onClick={onSwitch}>
    Sign Up
  </button>
</p>
{error && <p className="error-message">{error}</p>}
{success && <p className="success-message">{success}</p>}

    </form>
    </div>
  )
}

export default Login