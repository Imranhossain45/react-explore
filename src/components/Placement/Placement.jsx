import React from 'react'
import { SingleCart } from '../SingleCart/SingleCart'

const Placement = ({cart}) => {
  return (
    <div>
      {
        cart.map(singleCart => <SingleCart key={singleCart.id} singleCart={singleCart}></SingleCart>)
      }
    </div>
  )
}

export default Placement