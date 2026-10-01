
import React from 'react'
import { useState } from 'react'
import Profile from './Profile'

const Home = () => {
   const [message,setmessage]=useState("Hello Today server is availabe")
   
       const updatemessage=()=>{
           setmessage("Hello Today server is down...not available");
       }
  return (
    <div>
    <h4>Welcome to my dashboard</h4>
    <h4>{message}</h4>
    <Profile sendmessage={updatemessage}/>
    </div>
  )
}

export default Home








// import React from 'react'
// import Profile from './Profile';

// const Home = () => {
//     const name="Alex";
//   return (
//     <div>
//     <Profile name={name}/>
//     </div>
//   )
// }

// export default Home //this parent -child 