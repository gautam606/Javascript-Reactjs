import React from 'react'
import Usercontext from './Usercontext'
import { useContext } from 'react'

const Navbar = () => {
    const {user,setuser}=useContext(Usercontext)
  return (
    <div>
        <nav>
            welcome {user}
        </nav>

        <button onClick={()=>setuser("john")}>click user</button>
    </div>
  )
}

export default Navbar 