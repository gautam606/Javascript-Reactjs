import React, { Children, createContext } from 'react'

const Usercontext = createContext();
export const UserProvider =({children}) =>{
    //const username="john";

    const userobj={
        name: "Alex",
        age: 30,
        dob: "10-10-1996"
    }
    return (
      <div>
        {/* <Usercontext.Provider value={username}> */}
        <Usercontext.Provider value={userobj}>
            {children}
        </Usercontext.Provider>
      </div>
    )

}
export default Usercontext

// UserProvider
//     ↓
// children = <User />
