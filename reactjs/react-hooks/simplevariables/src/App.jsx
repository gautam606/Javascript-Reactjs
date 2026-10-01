import React from 'react'

const App = () => {
  let count=0;
  const updatecount=()=>{
    count=count+1;
    console.log(count);
    
  }
  return (
    <div>

      <h5>hello worlds</h5>
      <h5>Count:{count}</h5>
      <button onClick={updatecount}>increment</button>
    </div>
  )
}

export default App