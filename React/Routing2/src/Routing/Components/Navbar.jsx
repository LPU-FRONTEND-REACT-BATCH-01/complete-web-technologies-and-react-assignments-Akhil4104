import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <NavLink to={"chutki"} >Chutki</NavLink>
        <NavLink to={"jaggu"} >Jaggu</NavLink>
      <NavLink to={"indumathi"} >Indumathi</NavLink>
    </div>
  )
}

export default Navbar