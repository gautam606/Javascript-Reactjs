import React from 'react'
import { useState } from 'react'

const App = () => {
  let c=0;
  const [count,setcount]=useState(c)

  const updatecount=()=>{
    setcount(count+1)
  }
  return (
    <div>
      <h4>hello words</h4>
      <h4>count:{count}</h4>

      <button onClick={updatecount}>increment</button>
    </div>
  )
}

export default App