import React, { useContext } from 'react'
import Usercontext from './Usercontext'

const User = () => {
    const userobj=useContext(Usercontext)
  return (
    <div>
      <h2>Hello {userobj.name}</h2>
      <h2>and your age  {userobj.age}</h2>
      <h2>born in {userobj.dob}</h2>
    </div>
  )
}

export default User
