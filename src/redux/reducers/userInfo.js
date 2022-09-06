import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  cpf: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  cep: '',
  promo: false,
}

export const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload
    },
    setUserEmail: (state, action) => {
      state.email = action.payload
    },
    setUserCpf: (state, action) => {
      state.cpf = action.payload
    },
    setUserPhone: (state, action) => {
      state.phone = action.payload
    },
    setUserAddress: (state, action) => {
      state.address = action.payload
    },
    setUserCity: (state, action) => {
      state.city = action.payload
    },
    setUserState: (state, action) => {
      state.state = action.payload
    },
    setUserCep: (state, action) => {
      state.cep = action.payload
    },
    setUserPromo: (state, action) => {
      state.promo = !state.promo
    },
  },
})

export const { setUserName, setUserEmail, setUserCpf, setUserPhone, setUserAddress, setUserCity, setUserState, setUserCep, setUserPromo } = userInfo.actions

export default userInfo.reducer