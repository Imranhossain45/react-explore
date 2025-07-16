import React from 'react'

const Product = ({product,addToCart}) => {
  const {name,category,price} = product;
  return (
    <div className='border-2 border-red-500 rounded-md py-3'>
      <h1>{name}</h1>
      <h2>{category}</h2>
      <h3>{price}</h3>
      <button onClick={()=>addToCart(product)} className='bg-red-500 p-3'>Add to Cart</button>
    </div>
  )
}

export default Product