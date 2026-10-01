import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const App = () => {
  const ct=1;
  let n="alex"
const [count,setcount]=useState(ct)
const [name,setname]=useState(n)
const incrementcount=()=>{
  setcount(count+1)
};
const changename=()=>{
  setname("ronny")
};


// useEffect(()=>{
//   console.log("useffect is running:");
  
// })//universal ..listens for each rendering 
// useEffect(()=>{
//   console.log("useffect is running:",count);
  
// },[])//dosent listen because it takes no counter
// useEffect(()=>{
//   console.log("useffect is running:");
  
// },[count])//only listen to particular componenets mentioned



// useEffect(()=>{
//   console.log("effect stared");
  
//   return ()=>{
//     console.log("cleanup");
    
//   }
// },[name])
useEffect(()=>{
  console.log("effect stared:",count);
  
  return ()=>{
    console.log("cleanup:",count);
  }
},[])
  return (
    <div>
      React Hooks
What are Hooks?
useState
useEffect
useRef
useContext
useReducer
Custom Hooks
Rules of Hooks


<div className='comp'>
  <h4>count for useeffect:{count}</h4><br></br>
  <button onClick={incrementcount}>increment</button>
  <h4>change the name:{name}</h4><br></br>
  <button onClick={changename}>changename</button>
</div>
  </div>
  )
}

export default App



//useffect syntax:

// useffectr(()=>{
  //code to run 
  

  //optional return function
  //},[])///dependency...where to listen and react

//note return acts like asynchronous side...where it will exist first and then the main code works

// NO []  → "Every time you render, I'll run."

// []     → "Just when you start, I'll run."

// [count] → "When count changes, I'll run."
