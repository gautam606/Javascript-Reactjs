import { useState } from "react";

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome to your Dashboard!</h2>
      ) : (
        <>
          <h2>Login</h2>

          <button onClick={() => setIsLoggedIn(true)}>
            Demo Login
          </button>
        </>
      )}
    </div>
  );
}

export default Auth;