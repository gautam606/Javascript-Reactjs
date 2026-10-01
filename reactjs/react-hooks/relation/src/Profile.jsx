import React from 'react'
import { useState } from 'react'

const Profile = ({sendmessage}) => {
  return (
    <div>
    <button onClick={sendmessage}>update</button>
    </div>
  )
}

export default Profile





// import React from 'react'

// const Profile = ({name}) => {
//   return (
//     <div>
//     <h3>Hello from {name}</h3>
//     </div>
//   )
// }

// export default Profile //this is parent -child 