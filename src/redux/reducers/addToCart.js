import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalValue: 0,
  modalHidden: false,
}

export const shoppingCart = createSlice({
  name: 'ShoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload]
    },
    clearCart: (state, action) => {
      state.products = []
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.filmId !== action.payload
      )
    },
    endCart: (state, action) => {
      state.modalHidden = !state.modalHidden
    },
    goToHome: (state, action) => {
      state.modalHidden = false
    }
  },
})

export const { addToCart, clearCart, removeFromCart, endCart, goToHome } = shoppingCart.actions

export default shoppingCart.reducer