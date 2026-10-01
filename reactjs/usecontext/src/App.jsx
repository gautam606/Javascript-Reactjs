import React from 'react'
import Usercontext from './Usercontext'
import Navbar from './Navbar'
import { useState } from 'react'

const App = () => {
  const [user,setuser]=useState("Alex")
  return (
    <div>
      <Usercontext.Provider value={{user,setuser}}>
        <Navbar/>
      </Usercontext.Provider>
    </div>
  )
}

export default App
