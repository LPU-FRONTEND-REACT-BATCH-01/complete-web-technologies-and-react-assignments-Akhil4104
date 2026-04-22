import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from '../Layouts/HomeLayout'
import Landing from '../Pages/Landing'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'
import Reusable from '../Components/Reusable'
import Profile from '../Pages/Profile'
import Signup from '../Pages/Signup'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<HomeLayout/>,
            children:[
                {
                    path:'landing',
                    element:<Landing/>
                },
                {
                    path:'products',
                    element:<Products/>
                },
                {
                    path:'cart',
                    element:<Cart/>
                },
                {
                    path:':chotaBheem',
                    element:<Reusable/>
                }, {
                    path: 'profile',
                    element:<Profile/>
                }, {
                    path: 'signup',
                    element:<Signup/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter