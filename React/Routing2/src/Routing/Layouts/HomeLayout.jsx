import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  return (
    <div>HomeLayout
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout