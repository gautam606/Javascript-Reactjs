
import { useState } from "react";
import "./../styles/Signup.css";

function Signup({onSwitch,onSignup}) {
    const [name,setname]=useState("");
    const[email,setemail]=useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handlechangename=(e)=>{
        setname(e.target.value)
    }
    const handlechangemail=(e)=>{
        setemail(e.target.value)
    }
    const handlechangepass=(e)=>{
        setPassword(e.target.value)
    }
    const handlechangeconfirmpass=(e)=>{
        setConfirmPassword(e.target.value)
    }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Name:", name);
//         console.log("Email:", email);
//         console.log("Password:", pass);
//         console.log("Confirm Password:", confirmPassword);
// };


const handleSubmit = (e) => {
  e.preventDefault();

  if (name.trim() === "" || email.trim() === "") {
    setError("Name and email are required");
    console.log("name and email is required");
    
    return;
}

if (password.trim() === "" || confirmPassword.trim() === "") {
    setError("Password fields are required");
    console.log("password and confirmed need to filled");
    return;
}

if (password !== confirmPassword) {
    setError("Passwords do not match");
    console.log("password doesnt match");
  return;
}
  setError("");
  onSignup({
  name,
  email,
  password,
});

setSuccess("Account created successfully!");
  setSuccess("Account created successfully!");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);
};
  return (
    <div className="signup-container">
      <form className="signup-form"
      onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p>Sign up to get started</p>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={handlechangename}
        />
        <label htmlFor="signup-email">Email</label>
        <input
          type="email"
          id="signup-email"
          placeholder="Enter your email"
          value={email}
          onChange={handlechangemail}
        />

        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          id="signup-password"
          placeholder="Create a password"
          value={password}
          onChange={handlechangepass}
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={handlechangeconfirmpass}
        />

        <button type="submit">Sign Up</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <p className="login-text">
          Already have an account? 
          <button type="button" onClick={onSwitch}>Login</button>
        </p>
      </form>
      {/* <p>Name:{name}</p>
      <p>email:{email}</p>    */}
    </div>
  );
}

export default Signup;


// event — receive information about the typing event.

// event.target — get the input element that triggered the event.

// event.target.value — get the text currently inside that input.




// step1 
// create signup form 
// step2:
// create a handle form in signup

// step3:
// display the data in console log 

// step4:
// error handle..if some data is missing ...fill it