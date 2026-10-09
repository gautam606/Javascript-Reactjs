import React, { useState } from 'react'

const Signup = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [message,setmessage]=useState("");
    const [issigned,setissignedup]=useState(false);

    const handlesignup=(event)=>{
        event.preventDefault();
        // console.log("Email",email);
        // console.log("Password",password);
                setmessage("signed up succesfully")
                setissignedup(true)
        
    }

    const getemail=(e)=>{
        setemail(e.target.value)
    }
    const getpassword=(e)=>{
        setpassword(e.target.value)
    }
  return (
    <div>
    {
        issigned?(
            <h3>succesfully signed in!!</h3>
        ):(
    <form onSubmit={handlesignup}>
    <h4>Signup</h4>
     <label>Email:</label>
     <input type='email' 
     value={email}
     onChange={getemail}
     />

     <br/>
     <label>Password:</label>
     <input type='password' 
     value={password}
     onChange={getpassword}
     />

     <br/>
     <button>click me</button>  
     <p>{message}</p> 
     </form>
     )}
    </div>
  )
}

export default Signup