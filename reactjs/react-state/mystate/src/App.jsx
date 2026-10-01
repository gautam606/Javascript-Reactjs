import { useState } from 'react';
import User from './components/User';
import Data from './components/Data'
// const App = () => {
//   const [user,setuser]=useState("michael");
//   const [count,usecount]=useState(0);
//   const handleuser=()=>{ 
//     setuser("john") 
//   }
//   // const counter=()=>{
//   //   usecount(count+1);
//   // }
  

//   return (
//     <div>
//     <h4>States in React JS</h4>
//     <h5>Hello USER {user}</h5>
//     <h5>count:{count}</h5>
//     <button onClick={handleuser}>change the user</button><br/>
//     {/* <button onClick={counter}>count</button> */}
//     <button onClick={()=>usecount(count+1)}>count</button>
//     <User/>
//     </div>
//   )
// }

// export default App

// //alwys note that the first argument is default and its a declared valriable ...
// // and second one is to which is make update and its a function 



const App = () => {
  const name="JOHNSON"
  const email="johnsonrt45@gmail.com"
  const obj={
    id:101,
    name:"john",
    age:25
  }
  const arr=[{ name: "Michael", age: 25 },
  { name: "John", age: 30 },
  { name: "Alex", age: 28 }
]
  const [state, setstate] = useState(obj)
  const updateuser=()=>{
    setstate({
      ...obj,
      name:"Miller"
    })
  }
  const [a,setarr]=useState(arr)
  const updatearr = () => {
    setarr(
        a.map((ar) => {
            if (ar.name === "Michael") {
                return {
                    ...ar,
                    name: "David"
                }
            }

            return ar
        })
    )
}
  const adduser=()=>{
    setarr([
      {
        name:"miller",
        age:31
      }
    ])
  }
  return (
    <div>
    <h4>hello from google</h4><br></br>
    <h4 >this is {state.name} id:{state.id} age:{state.age}</h4><br></br>
    <br></br>
    <button onClick={updateuser}>sorry</button>
    {/* <h4>this is {obj.name} id:{obj.id} age:{obj.age}</h4><br></br> */}
    {/* <User/> */}

    <h4>Hello from Microsoft</h4><br></br>
    {
      a.map((ar)=>{
        return(
          <div>
            <h4>this is {ar.name} age:{ar.age}</h4>
            <button onClick={updatearr}>change</button>
            <button onClick={adduser}>click</button>
          </div>
        )
      })

    }

    <Data name={name} email={email}/>
    </div>
  )
}

export default App