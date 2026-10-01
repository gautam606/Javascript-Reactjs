import React, { useEffect, useState } from 'react'

const Data = ({salary}) => {
    const [usersalary,setusersalary]=useState(salary)
    const updatesalary=()=>{
        setusersalary(usersalary+10000)
    }

    useEffect(()=>{
      
    })
  return (
    <div>Data
    <h5>Salary:{usersalary}</h5>
    <button onClick={updatesalary}>changesalary</button>
    </div>
  )
}

export default Data