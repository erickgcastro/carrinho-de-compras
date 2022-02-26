import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectAllCartProducts, removeAllProducts } from "../../store/cartSlice"
import './index.css'

import Cep from "./Cep"
import CartProduct from "./CartProduct"
import TotalBoleto from "./TotalBoleto"

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllCartProducts)

  const removeProducts = () => dispatch(removeAllProducts())

  const cartProducts = products.map((productId) => (
    <CartProduct key={productId} productId={productId} />
  ))

  return (
    <main>
      <section className='cc'>
        <section>
          <Cep />
          <section className='cp'>
            <header>
              <h2>Produtos</h2>
              <button onClick={removeProducts}>
                Remover todos os produtos
              </button>
            </header>
            {products.length === 0 ? <p>Vazio....</p> : cartProducts}
          </section>
        </section>
        <TotalBoleto />
      </section>
    </main>
  )
}

export default Cart
