import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Cart from './Cart'
import Contact from './Contact'

const App = () => {
  return (
    <div>
      {/* <h4>Hello this landing page</h4> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App