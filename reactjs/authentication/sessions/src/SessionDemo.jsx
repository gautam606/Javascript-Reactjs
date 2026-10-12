
// import { useState } from "react";

// function SessionDemo() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   console.log(isLoggedIn);
  

//   return (
//     <div>
//       <h2>Session Demo</h2>

//       {isLoggedIn ? (
//         <div>
//           <h3>Welcome!</h3>
//           <p>You are logged in.</p>
//           <button onClick={() => setIsLoggedIn(false)}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <div>
//           <p>You are logged out.</p>
//           <button onClick={() => setIsLoggedIn(true)}>
//             Login
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SessionDemo;




import { useState } from "react";

function SessionDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  function handleLogin() {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.setItem("isLoggedIn","false");
    setIsLoggedIn(false);
  }

  console.log(isLoggedIn);
  
  return (
    <div>
      <h2>Session Demo</h2>

      {isLoggedIn ? (
        <div>
          <h3>Welcome!</h3>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are logged out.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default SessionDemo;
