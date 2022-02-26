import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit"

const cartAdapter = createEntityAdapter()

export const addProductAsync = createAsyncThunk(
  "cart/addProductAsync",
  async (product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product)
      }, 3000)
    })
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState: cartAdapter.getInitialState(),
  reducers: {
    addProduct: cartAdapter.addOne, // { id, name, qtd, price, image }
    removeProduct: cartAdapter.removeOne, // 'id'
    updateProduct: cartAdapter.upsertOne, // { id, field }
    removeAllProducts: cartAdapter.removeAll, // state
  },
  extraReducers(builder) {
    builder.addCase(addProductAsync.fulfilled, cartAdapter.addOne)
  },
})

export const { addProduct, removeProduct, removeAllProducts, updateProduct } =
  cartSlice.actions
export default cartSlice.reducer

export const {
  selectAll,
  selectIds: selectAllCartProducts,
  selectById: selectCartProduct,
} = cartAdapter.getSelectors((state) => state.cart)
