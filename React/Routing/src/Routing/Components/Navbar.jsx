import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav>
          <Link to="/products">Product Page</Link>
          <Link to="/about">About Page</Link>
          <Link to="/cart">Cart Page</Link>
          <Link to="/landing">Landing Page</Link>
    </nav>
  )
}
export default Navbar;
