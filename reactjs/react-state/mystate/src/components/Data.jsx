import React, { useState } from 'react'

const Data = ({name,email}) => {
    const [user,userState]=useState("JON")
    const [age,ageState]=useState(25)
    const [useremail,emailstate]=useState("jon34@gmail.com")
    const changeuser=()=>{
        userState(name)
    }
    const changeage=()=>{
        ageState(age+1)
    }
    const changeemail=()=>{
        emailstate(email)
    }
  return (
    <div>
        <h4>Hello from Netflix</h4><br></br>
        <h4></h4><br></br>
        <h4>this is {user}</h4><br></br>
        <button onClick={changeuser}>changename</button>
        <h4>this is {age}</h4><br></br>
        <button onClick={changeage}>changeage</button>
        <h4>this is {useremail}</h4><br></br>
        <button onClick={changeemail}>getemail</button>
        
    </div>
  )
}

export default Data