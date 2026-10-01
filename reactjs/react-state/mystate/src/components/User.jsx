
// import React, { useState } from 'react'

// const User = () => {

//   const user1 = {
//     name: "Michael",
//     age: 25
//   };

//   const user2 = {
//     name: "John",
//     age: 30
//   };

//   const user3 = {
//     name: "Alex",
//     age: 28
//   };

//   const [users, setUsers] = useState([user1, user2, user3]);

//   const updatefirstuser = () => {
//     setUsers(
//       users.map((user, index) => {
//         if (index === 0) {
//           return {
//             ...user,
//             name: "David"
//           };
//         }

//         return user;
//       })
//     );
//   };

//   return (
//     <>
//       <h5>User operation</h5>

//       {users.map((user, index) => {
//         return (
//           <div key={index}>
//             <h5>Name: {user.name}</h5>
//             <h5>Age: {user.age}</h5>

//             <button onClick={updatefirstuser}>
//               Update First User
//             </button>
//           </div>
//         )
//       })}

//     </>
//   )
// }

// export default User




import React, { useState } from 'react'

const User = () => {1

  const [users, setUsers] = useState([
    { name: "Michael", age: 25 },
    { name: "John", age: 30 },
    { name: "Alex", age: 28 }
  ]);

  const [newName, setNewName] = useState("");

  const updateFirstUser = () => {
    setUsers(
      users.map((user, index) => {
        if (index === 0) {
          return {
            ...user,
            name: newName
          };
        }

        return user;
      })
    );
  };

  return (
    <div>

      <h2>User Operation</h2>

      <input
        type="text"
        placeholder="Enter new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <button onClick={updateFirstUser}>
        Update First User
      </button>

      {users.map((user) => (
        <div key={user.name}>
          <h4>Name: {user.name}</h4>
          <p>Age: {user.age}</p>
        </div>
      ))}

    </div>
  )
}

export default User
