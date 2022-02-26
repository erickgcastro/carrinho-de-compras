import React from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  selectCartProduct,
  updateProduct,
  removeProduct,
} from "../../store/cartSlice"

const CartProduct = ({ productId }) => {
  const dispatch = useDispatch()
  const product = useSelector((state) => selectCartProduct(state, productId))

  const deDisabled = product.qtd === 1
  const inDisabled = product.qtd === 10

  const increment = () =>
    dispatch(updateProduct({ id: productId, qtd: product.qtd + 1 }))

  const decrement = () =>
    dispatch(updateProduct({ id: productId, qtd: product.qtd - 1 }))

  const removeItem = () => dispatch(removeProduct(productId))

  let price = (+product.price * product.qtd).toString().split(".")
  if (price[1].length > 2) {
    price[1] = price[1][0] + price[1][1]
  }

  return (
    <div className='pdt'>
      <div className='inf-1'>
        <img src={product.image} alt={product.name} />
        <span>{product.name}</span>
      </div>
      <div className='inf-2'>
        <div className='actions'>
          <div className='qtd'>
            <button disabled={deDisabled} onClick={decrement}>
              {"<"}
            </button>
            <span>{product.qtd}</span>
            <button disabled={inDisabled} onClick={increment}>
              {">"}
            </button>
          </div>
          <button className='btn-rmv' onClick={removeItem}>
            Remover
          </button>
        </div>
        <span>R$ {price.join(",")}</span>
      </div>
    </div>
  )
}

export default React.memo(CartProduct)
