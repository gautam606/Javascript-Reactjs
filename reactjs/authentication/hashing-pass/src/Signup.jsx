// import React, { useState } from 'react'

// const Signup = () => {
//     const [password,setpassword]=useState("");
//     const[hash,sethash]=useState("");

//     const handlesignup = async (event) => {   
//         event.preventDefault();

//         if(password.length<8)
//         {
//             alert("Password must be atleast 8 characters");
//             return;
//         }

//         const encoder= new TextDecoder();
//         const data=encoder.encode(password);

//         const hashbuffer=await crypto.subtle.digest("SHA-256",
//             data
//         );

//         const hasharray=Array.from(new Uint8Array(hashbuffer))

//         const hashstring =hasharray.map((byte)=>byte.toString(16).padStart(2,"0")).join("");

//         sethash(hashstring)
//         console.log();
        
//     }
//   return (
//     <div>

//         <form onSubmit={handlesignup}>
//             <h3>Password Hashing demo</h3>

//             <input
//             type="password"
//             value={password}
//             onChange={(event) => setpassword(event.target.value)}
//             placeholder="Enter password (8+ characters)"
//             required

//             />

//             <br/>
//             <button type='submit'>hash demo</button>

//             {hash && (
//                 <div>
//                 <h3>Demo hash:</h3>
//                 <p style={{ overflowWrap: "anywhere" }}>{hash}</p>
//                 </div>
//                 )}
//         </form>
//     </div>
//   )
// }

// export default Signup




import { useState } from "react";

function Signup() {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");

  async function handleSignup(event) {
    event.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      data
    );

    const hashArray = Array.from(new Uint16Array(hashBuffer));

    const hashString = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashString);
  }

  return (
    <form onSubmit={handleSignup}>
      <h2>Password Hashing Demo</h2>

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter password (8+ characters)"
        required
      />

      <br/>
      <button type="submit">Generate Demo Hash</button>

      {hash && (
        <div>
          <h3>Demo hash:</h3>
          <p style={{ overflowWrap: "anywhere" }}>{hash}</p>
        </div>
      )}
    </form>
  );
}

export default Signup;
