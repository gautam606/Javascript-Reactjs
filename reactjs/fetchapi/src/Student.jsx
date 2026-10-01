
import { useState, useEffect } from "react";

const Student = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    // -------------------
    // POST
    // -------------------
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Alex",
        email: "alex34@gmail.com",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("POST request failed!");
        }

        return res.json();
      })
      .then((data) => {
        console.log("POST response:", data);
        setUser([data]);
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    // -------------------
    // PUT
    // -------------------
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "ALex",
        email: "alex35@gmail.com",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("PUT request failed!");
        }

        return res.json();
      })
      .then((data) => {
        console.log("PUT response:", data);
      })
      .catch((err) => {
        console.log(err);
      });

    // -------------------
    // DELETE
    // -------------------
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("DELETE request failed!");
        }

        return res.json();
      })
      .then((data) => {
        console.log("DELETE response:", data);
      })
      .catch((err) => {
        console.log(err);
      });

    // JSON.stringify
    
   const student = {
  name: "Alex",
  age: 22,
  email: "alex@gmail.com",
  skills: ["JavaScript", "React", "Node.js"],
  address: {
    city: "Bangalore",
    country: "India"
  }
};

    const jsonString = JSON.stringify(student);

    console.log("JSON String:", jsonString);
    
  }, []);

  return (
    <div>
      <h2>Student</h2>

      {loading ? (
        <h2>Loading...</h2>
      ) : err ? (
        <p>{err}</p>
      ) : (
        <h2>{user[0]?.name}</h2>
      )}
    </div>
  );
};

export default Student;

// import React from 'react'
// import { useState } from 'react'
// import { use } from 'react'
// import { useEffect } from 'react'

// const Student = () => {

//     const [user,setuser]=useState([])
//     const[loading,setloading]=useState(true)
//     const[err,seterr]=useState(" ");
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         // .then((response)=>response.json())
//         .then((res)=>{
//             if(!res.ok){
//                 throw new Error("request failed!")
//             }
//             return res.json()
//         })
//         .then((data)=>{
//             console.log(data);
            
//             setuser(data)
//             setloading(false)
//         })
//         .catch((err)=>{
//             seterr("something error occurred")
//             setloading(false)
//         })
//         console.log("finally");
//     },[])
//   return (
//     <div>
//     <h2>Student</h2>
//     {loading ? (
//         <h2>Loading...</h2>
//       ) : err ?(
//         <p>{err}</p>
//       ):(
//         <h2>{user[0]?.name}</h2>
//       )}
//       </div>
//   )
// }

// export default Student