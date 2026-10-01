import React, { useEffect, useState } from 'react'

const App = () => {
  const [count ,setcount]=useState(1);
  const [users,usercount]=useState(" ");
  const [loading,setloading]=useState(true)
  const [isabsent,setisabsent]=useState("present");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data)=>{
      usercount(data);
      setloading(false)
    })
  },[]);  
  const increment=()=>{
    const newcount=count+1;
    setcount(newcount)
    const check=()=>{
      if(newcount>10)
      {
        setisabsent("absent")
      }
    }
    check();
  }

  

  return (
    <div>
      <h4>hello world</h4>
      <p>employees present:{count}</p>

      <button onClick={increment}>day</button>
      <h4>users</h4>
      {loading?(
        <p>loading...</p>
      ):(
        <div>
        <h4>{
          users[count]?.name}</h4>

          <p>{users[count]?.email}</p>
          </div>
      )}
      {/* <p>
  Status: {isabsent ? "Present" : "Absent"}
</p> */}
<p>Status:{isabsent}</p>
    </div>

  )
}

export default App