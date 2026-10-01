import React, { useState } from 'react'

const User = ({name,age}) => {
    const [username ,setusername]=useState(name);
    const changeuser=()=>{
        setusername("sundar")
    }
  return (
    <div>User Data <br></br>
    <h5>Name:{username}</h5>
    <h5>Age:{age}</h5>
    <button onClick={changeuser}>change</button>
    <br></br>
    </div>
  )
}

export default User