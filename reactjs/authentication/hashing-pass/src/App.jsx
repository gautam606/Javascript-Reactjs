// import React, { useState } from 'react'

// const App = () => {
//   const[password,setpassword]=useState("");

//   function handlesignup(event){
//     event.preventDefault();

//     // console.log("password entered",password);

//     if(password.length<8)
//     {
//       alert("Password must be alleast 8 characters")
//       return
//     }

//     alert("Password validation succesfull!")
    
//   }
//   return (
//     <div>
//     <form onSubmit={handlesignup}>
//       <h3>Signup</h3>

//       <label>Password:</label>

//       <input
//       type='password'
//       value={password}
//       onChange={(event)=>setpassword(event.target.value)}
//       placeholder='enter password'
//       required
//       />

//       <button type='submit'>click me </button>
//     </form>

//     </div>
//   )
// }

// export default App






import React from 'react'
import Signup from './Signup'

const App = () => {
  return (
    <div>

      <Signup/>
    </div>
  )
}

export default App