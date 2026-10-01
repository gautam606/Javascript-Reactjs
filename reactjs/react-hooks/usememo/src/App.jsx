import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'
const products=[
    {name:"milk",price:800},
    {name:"ghee",price:660},
    {name:"butter",price:260},
    {name:"ice ",price:1260},
    {name:"ice cream",price:1260}
  ];

const App = () => {
  const[count,setcount]=useState(0);
  const expensivepro=useMemo(()=>{
    console.log("Filtering ");
    return products.filter((product)=>product.price>500
    )
  },[products])

  const updatecount=()=>{
    setcount(count+1);
  }
  return (
    <div>
      <h4>
      Count:{count}
      </h4>
      <button onClick={updatecount}>increment</button>

      <h3>Expensive products</h3>
      {
        expensivepro.map((product)=>(
          <p key={product.name}>
            {product.name} -- ₹{product.price}
          </p>
        ))
      }
    </div>
  )
}

export default App