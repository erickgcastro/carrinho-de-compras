import React from "react"
import { useSelector } from "react-redux"
import { selectAll } from "../../store/cartSlice"

const TotalBoleto = () => {
  const products = useSelector(selectAll)

  let price = products.reduce((pv, cv) => pv + cv.price * cv.qtd, 0).toString()
  if (price !== "0") {
    price = price.split(".")
    if (price[1] > 9) {
      price[1] = price[1][0] + price[1][1]
    } else {
      price[1] = 0 + price[1]
    }
    price = price.join(",")
  }

  return (
    <aside>
      <div className='totalBoleto'>
        <span>Total:</span>
        <div className='price'>R$ {price}</div>
      </div>
      <button>Ir para o pagamento</button>
    </aside>
  )
}

export default TotalBoleto
