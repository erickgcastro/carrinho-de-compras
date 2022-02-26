import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./index.css"
import {
  addProduct,
  addProductAsync,
  selectCartProduct,
  removeProduct,
} from "../../store/cartSlice"
import { selectProductById } from "../../store/productsSlice"

const Product = ({ productId }) => {
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const cartProduct = useSelector((state) =>
    selectCartProduct(state, productId)
  )
  const product = useSelector((state) => selectProductById(state, productId))

  const addAsync = async () => {
    setLoading(true)
    await dispatch(addProductAsync(product))
    setLoading(false)
  }

  let buttons
  if (!cartProduct) {
    buttons = (
      <>
        <button onClick={() => dispatch(addProduct(product))}>
          addProduct
        </button>
        <button onClick={addAsync}>addProductAsync</button>
      </>
    )
  } else {
    buttons = (
      <>
        <Link to='/carrinho'>
          <button>Ver produto no carrinho</button>
        </Link>
        <button
          className='re-btn'
          onClick={() => dispatch(removeProduct(productId))}
        >
          Remover produto
        </button>
      </>
    )
  }

  return (
    <div className='product'>
      {/* <Link to={`/products/${productId}`}> */}
      <Link to='#'>
        <img
          src={product.image}
          title={product.name}
          className='pdt'
          alt={product.name}
        />
        <div>
          <h2 title={product.name}>
            {product.name.substring(0, 20)}
            {product.name.length > 21 ? "..." : ""}
          </h2>
        </div>
        <div>
          <span>R$ {product.price}</span>
        </div>
      </Link>
      <div className='btns-product'>
        {loading ? (
          <div className='loading'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
          </div>
        ) : (
          buttons
        )}
      </div>
    </div>
  )
}

export default React.memo(Product)
