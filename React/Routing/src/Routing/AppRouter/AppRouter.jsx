import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from '../Layouts/HomeLayout'
import Landing from '../Pages/Landing'
import Product from '../Pages/Product'
import About from '../Pages/About'
import Cart from '../Pages/Cart'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    index: true,
                    element: <Landing />
                },
                {
                    path: "landing",
                    element: <Landing />
                },
                {
                    path: "products",
                    element: <Product />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "cart",
                    element: <Cart />
                }
            ]
        }
    ])
  return (
      <div>
          <RouterProvider router={router} />
    </div>
  )
}

export default AppRouter;
