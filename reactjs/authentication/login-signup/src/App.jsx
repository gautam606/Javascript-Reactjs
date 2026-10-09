import React, { useState } from 'react'
import Login from './components/Login'
import Signup from "./components/Signup";

const App = () => {
  const [islogin,setlogin]=useState(true);
  const [account, setAccount] = useState(null);

  const handlesignup =(userdata)=>{
    setAccount(userdata)
    setlogin(true)
  }
  return (
    <div>
      {/* <Login/>  
      <Signup /> */}
      {islogin ? (
<Login onSwitch={() => setlogin(false)} 
  account={account}
/>
) : (
<Signup onSwitch={() => setlogin(true)} 
  onSignup={handlesignup}
/>
)}
    </div>
  )
}

export default App



// import React from 'react'

// const App = () => {
//   const handleclick=(event)=>{
//     console.log(event);
    
//   }
//   return (
//     <div>App
    
//     <button onClick={handleclick}>
//     click me
//     </button>
//     </div>
//   )
// }

// export default App