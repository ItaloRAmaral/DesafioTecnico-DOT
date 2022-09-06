import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideBar: false,
  favSideBar: false,
}

export const sideBarCart = createSlice({
  name: 'sideBarCart',
  initialState,
  reducers: {
    setSideBar: (state, action) => {
      state.sideBar = !state.sideBar
      state.favSideBar = false
    },
    setFavSideBar: (state, action) => {
      state.favSideBar = !state.favSideBar
      state.sideBar = false
    },
    setFavAndShopBar: (state, action) => {
      state.favSideBar = false
      state.sideBar = false
    }
  },
})

export const {
  setSideBar,
  setFavSideBar,
  setFavAndShopBar
} = sideBarCart.actions

export default sideBarCart.reducer