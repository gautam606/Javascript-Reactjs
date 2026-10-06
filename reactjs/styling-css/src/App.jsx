import React from 'react'
import User from './User'
import Products from './Products'
import Service from './Service'
import Backgroundeffect from './Backgroundeffect'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <div>
      <h4 className='title'>Welcome to Dashboard</h4>
      <User/>
      <Products/>
      <Service/>
      <Backgroundeffect/>
      <BrowserRouter>
      <Routes>
        <Route path='/h' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
