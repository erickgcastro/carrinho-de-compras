import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { selectProductsIds } from "../../store/productsSlice"

import arrow from "../../assets/arrow.png"
import Product from "./Product"

const ProductsList = () => {
  const products = useSelector(selectProductsIds)
  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  let allProducts = products.map((item) => (
    <Product key={item} productId={item} />
  ))

  if (allProducts.length === 0) {
    allProducts = <h2>Nenhum produto encontrado</h2>
  }

  return (
    <main>
      <section className='carousel'>
        <button className='arrow' onClick={handleLeftClick}>
          <img src={arrow} alt='' />
        </button>
        <section className='pl' ref={carousel}>
          {allProducts}
        </section>
        <button className='arrow' onClick={handleRightClick}>
          <img src={arrow} alt='' />
        </button>
      </section>
    </main>
  )
}

export default ProductsList
