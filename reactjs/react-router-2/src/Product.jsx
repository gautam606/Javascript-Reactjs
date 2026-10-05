import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id}=useParams();
  return (
    <div>
        <h5>Product Details</h5>
        <h5>Product Id:{id}</h5>
    </div>
  )
}

export default Product