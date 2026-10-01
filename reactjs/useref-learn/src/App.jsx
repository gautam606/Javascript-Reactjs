import React from 'react'
import { useRef } from 'react'

const App = () => {
  const countref=useRef(0);

  const handleclick=()=>{
    countref.current=countref.current+1;
    console.log(countref.current);
    
  }
  return (
    <div>
      <button onClick={handleclick}>CLicks</button>
    </div>
  )
}

export default App





























// import React from 'react'
// import { useEffect } from 'react';
// import { useRef } from 'react'

// const App = () => {
//   const inputref=useRef();
//   useEffect(()=>{
//     inputref.current.focus();
//   },[])
//   return (
//     <div>
//       <input ref={inputref}/>
//       <button>submit</button>
//     </div>
//   )
// }

// export default App



