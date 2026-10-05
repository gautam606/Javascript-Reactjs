import React from 'react'
import { UserProvider } from './Usercontext'
import User from './User'

const App = () => {
  return (
    <div>
      <UserProvider>
        <h5>MY APP</h5>
        <User />
      </UserProvider>
    </div>
  )
}

export default App

// UserProvider
//     ↓
// children = <User />

// import User from "./User";
// import { UserProvider } from "./UserContext";

// const App = () => {
//   return (
//     <UserProvider user={<User />} />
//   );
// };

// export default App;