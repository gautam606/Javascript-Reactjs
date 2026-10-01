import React from 'react'
import useFetch from './useFetch'

const App = () => {
  const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users");
  if(loading){
    return <h4>Loading....  </h4>
  }

  if(error){
    return <h4>{error}</h4>
  }
  return (
    <div>
      <h2>USERS</h2>
      {
        data.map((user)=>(
          <p key={user.id}>
            {user.name}
          </p>
        ))}
    </div>
  );
};

export default App








// import React from 'react'
// import useCounter from './useCounter'

// const App = () => {
//   const {count,increase,decrease}=useCounter();
//   return (
//     <div>
//       <h4>Hello this is customhooks side </h4>
//       <h4>Count:{count}</h4>
//       <button onClick={increase}>increment</button><br></br>
//       <button onClick={decrease}>decrement</button>
//     </div>
//   )
// }

// export default App
