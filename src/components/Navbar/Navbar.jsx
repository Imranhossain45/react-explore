import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-rose-500'>
      <Link to={'/home'}>Home</Link>
      <Link to={'/product'}>Product</Link>
    </div>
  )
}

export default Navbar