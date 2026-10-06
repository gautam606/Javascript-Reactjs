import React from 'react'
import user from './User.module.css'

const User = () => {
    const name="alex"
    const age=25;
  return (
    <div>
      <h3 id='intro'>This is :{name} age:{age}</h3>
    </div>
  )
}

export default User
