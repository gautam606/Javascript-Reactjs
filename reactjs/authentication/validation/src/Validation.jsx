import React from 'react'
import { useState } from 'react'

const Validation = () => {
    const [email,setemail]=useState("");
    const [message,setmessage]=useState("")

    function handlevalid(event) {
  event.preventDefault();

//   if (email.trim() === "") {
//     setmessage("Email is required");
//   } else if (!email.includes("@")) {
//     setmessage("Please enter a valid email");
//   } else {
//     setmessage("Email validation successful!");
//   }
}
  return (
    <div>
      <form onSubmit={handlevalid}>
        <label>Email Signup:</label>

        <br/>
        <br/>
        <br/>

        <input 
        type='email'
        value={email}
        onChange={(event)=>setemail(event.target.value)}
        placeholder='Enter your email'
        />
        <br/>
        <br/>
        <br/>
        <button type='submit'>login</button>
        <br/>
        <br/>
        <br/>
        <br/>

        <p>{message}</p>
      </form>

      
    </div>
  )
}

export default Validation
