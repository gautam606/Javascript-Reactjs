// const Home = () => {
//   return <h1>Home Page</h1>;
// };

// export default Home;


import React from 'react'
import { Link, useNavigate,NavLink } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();

  const gotocarts=()=>{
    navigate("/cart");
  }

  const gotocontact=()=>{
    navigate("/contact")
  }
  return (
    <div>
      <h2>Welcome to the dashboard</h2>
      <button onClick={gotocarts}>cart</button><br></br>
      <button onClick={gotocontact}>contact</button><br></br>
      <Link to="/products">GO TO PRODUCTS</Link><br></br>
            <NavLink to="/products" style={({ isActive }) => ({
    color: isActive ? "red" : "black"
  })}>Products</NavLink>

    </div>
  )
}

export default Home