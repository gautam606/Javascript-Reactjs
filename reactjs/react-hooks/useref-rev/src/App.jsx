import React from 'react'
import { useRef } from 'react'

const App = () => {
  const inputref=useRef();
  const focusinput=()=>{
    inputref.current.focus();
  }
  return (
    <div>
    <h3>hello this is usereff</h3>
    <input ref={inputref}  type='text' placeholder='enter your name' />
    <button onFocus={focusinput}>click</button>
    </div>
  )
}

export default App