import React from 'react'
import { use } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'

const App = () => {
  let cou=0;
  const [count,usecount]=useState(cou);
  const [name,usename]=useState("alex")
  const updatevalue=()=>{
    usecount(count+1)
    const updatevalue=()=>{
      usename("john")
    }

    updatevalue();
  }
  console.log("count value a:",count);
  
  useEffect(()=>{
    console.log("count value b:",count);
    
  },[])
  return (
    <div>
      <h4>hello world this is the useeffect</h4>
      <h4>count:{count}</h4>
      <h4>Name:{name}</h4>
      <button onClick={updatevalue}>increase</button>
    </div>
  )
}

export default App