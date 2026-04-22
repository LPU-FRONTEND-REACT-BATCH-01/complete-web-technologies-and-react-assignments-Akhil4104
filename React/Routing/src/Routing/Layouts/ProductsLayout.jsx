import React from 'react'
import ProductsNav from '../Components/ProductsNav'
import { Outlet } from 'react-router'

const ProductsLayout = () => {
  return (
    <div>
        <ProductsNav/>
        
        <Outlet/>
    </div>
  )
}

export default ProductsLayout