import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    // if (
    //   email === "alex@gmail.com" &&
    //   password === "hello123"
    // ) {
    //   setMessage("Login successful!");
    // } else {
    //   setMessage("Invalid email or password");
    // }
    if (password.length < 8) {
    setMessage("Password must contain at least 8 characters");
    return;
  }
    if (password !== confirmPassword) {
    setMessage("Passwords do not match");
    return;
  }

  setMessage("Signup form submitted!")

    // setMessage("Login form submitted!");
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <br/>
      <input
  type="password"
  placeholder="Confirm password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  required
/>

      <br /><br />

      <button type="submit">Login</button>

      <p>{message}</p>
    </form>
  );
}

export default Login;