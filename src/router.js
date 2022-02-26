import React from "react"
import { Routes, Route } from "react-router-dom"

import ProductsList from "./Pages/ProductsList.js"
import Cart from "./Pages/Cart/index.js"

const Views = () => {
  return (
    <Routes>
      <Route index element={<ProductsList />} />
      <Route path='/carrinho' element={<Cart />} />
      <Route path='*' element={<h2>404 Not Found</h2>} />
    </Routes>
  )
}

export default Views
