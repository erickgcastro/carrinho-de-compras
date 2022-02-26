import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import dataProducts from "../products"

const productsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.price.localeCompare(b.price),
})

const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState(),
  reducers: {
    loadProducts(state, action) {
      productsAdapter.addMany(state, dataProducts)
    },
  },
})

export const { loadProducts } = productsSlice.actions
export default productsSlice.reducer

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductsIds,
} = productsAdapter.getSelectors((state) => state.products)
