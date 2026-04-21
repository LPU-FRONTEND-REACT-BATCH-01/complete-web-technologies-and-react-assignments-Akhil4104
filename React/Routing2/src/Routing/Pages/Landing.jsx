import React from 'react'
import { useNavigate } from 'react-router-dom';


const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/cart')
  }
  return (
    <div>Landing
      <button onClick={handleClick}>Click to visit Cart</button>
      </div>
  )
}

export default Landing