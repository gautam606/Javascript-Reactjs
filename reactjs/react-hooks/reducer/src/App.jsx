import React, { useReducer } from 'react'

const App = () => {

  const reducer =(state,action)=>{
    if(action.type==="increase")
      return state+1;

    if(action.type==="decrease")
      return state-1;

    return state;
  }

  const [count ,dispatch]=useReducer(reducer,0)
  return (
    <div>
      <h3>Hello this is the reducerstate</h3>
      <h4>Count:{count}</h4>
      <button onClick={()=>dispatch({type:"increase"})}>Increase</button><br></br>
      <button onClick={()=>dispatch({type:"decrease"})}>decrease</button>
    </div>
  )
}

export default App


// import React, { useState } from "react";

// const App = () => {

//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   };

//   const decrease = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={increase}>
//         Increase
//       </button>

//       <button onClick={decrease}>
//         Decrease
//       </button>
//     </div>
//   );
// };

// export default App;