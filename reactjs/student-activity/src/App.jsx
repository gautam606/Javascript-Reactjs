import './App.css'
import { useState } from 'react'
import Student from './Student'


const App = () => {
  const student={
    name:"Alex",
    age:22
  }
  return (
    <div>
    <h1>Student APP</h1>

    <Student student={student}/>

    </div>
  )
}

export default App

