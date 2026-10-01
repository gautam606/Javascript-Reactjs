import React from 'react'
import Data from './Data'
import User from './User'

const App = () => {
  const name="girish"
  const age=25
  const salary=40000;
  return (
    <div>this rendering data using states and props
    <User name={name} age={age}/>
    <Data salary={salary}/>
    </div>
  )
}

export default App