import React from 'react'

const Products = () => {
    const pro1="water bottle"
    const qty=345;
    const tot=3500;
  return (
    <div>
      <h4 style={{backgroundColor:"rebeccapurple",color:'white',fontVariant:"full-width",fontFamily:"ui-monospace",fontSize:"38px"}}>Product Section!!!</h4>
      <div style={{fontFamily:"sans-serif",fontStyle:"revert-layer",fontSize:"30px"}}>
      <p>Productname:{pro1}</p>
      <p>Quantity:{qty}</p>
      <p>Price:{tot}</p>
      </div>
    </div>
  )
}

export default Products
