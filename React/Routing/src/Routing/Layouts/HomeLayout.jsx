import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const HomeLayout = () => {
  return (
    <>
    <div className="offers">
        <p>2 Day Delivery in Mumbai</p>
    </div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default HomeLayout