import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const Student = ({student}) => {
    const [stud,setstudent]=useState({
    name:"Alex",
    age:22
  })

  const studentchnge=()=>{
    setstudent({
      ...stud,
      name:"john",
      age:24
    })
  }


    const [message,setmessage]=useState(" ")
    useEffect(()=>{
    setmessage(`${stud.name} changed now`)
    const timer=setInterval(()=>{
        setmessage(`${stud.name} is active now `)
    },2000)
    return()=>{
        clearInterval(timer);
        console.log("Timer stopped for ",stud.name);
    }   
},[stud])
  return (
    <div>
    <button onClick={studentchnge}>change user</button>
    <h2>Student Name:{stud.name}</h2>
    <h2>Student Age:{stud.age}</h2>
    <p>{message}</p>
    </div>
  )
}

export default Student