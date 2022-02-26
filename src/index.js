import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import store from "./store"
import { Provider } from "react-redux"

import { loadProducts } from "./store/productsSlice"

const start = () => {
  store.dispatch(loadProducts())

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  )
}

start()
