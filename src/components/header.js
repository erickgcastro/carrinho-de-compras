import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { selectAllCartProducts } from "../store/cartSlice"

const Header = () => {
  const products = useSelector(selectAllCartProducts)

  return (
    <header className='hn'>
      <h1 style={{color: 'var(--mono-2)'}}>Carrinho de compras</h1>
      <nav>
        <Link to='/' className='nl'>
          Ver produtos
        </Link>
        <Link to='/carrinho' className='nl'>
          Carrinho <span>{products.length}</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
