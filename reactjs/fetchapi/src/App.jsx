import './App.css'
import React from 'react'
import Student from './Student'

const App = () => {
  return (
    <div>
      <h4>Hello World</h4>

      <Student/>
    </div>
  )
}

export default App










// import { useState } from 'react'
// import { useEffect } from 'react';

// import React from 'react'

// const App = () => {
//   const[students,setstudents]=useState([]);

//   const updatestudent=()=>{
//     setstudents(
//       students.map((students)=>{
//         if(students.id==1)
//         {
//           return{
//             ...students,
//             name:"john"
//           }

//         }
//       })
//     )
//   }

//   useEffect(() =>{

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((data)=>{
//       setstudents(data)
//     });
//   },[])
//   return (
//     <div>
//       <h1>Student App</h1>
//       {
//         students.map((student)=>(
//           <div key={student.id}>
//           <h2>{student.name}</h2>
//           <h2>{student.email}</h2>
//           <button onClick={updatestudent}>update</button>

//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default App
