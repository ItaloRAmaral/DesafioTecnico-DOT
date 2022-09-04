import { configureStore } from '@reduxjs/toolkit'
import fetchPopularFilms from './reducers/fetchPopularFilms'


export const store = configureStore({
  reducer: {fetchPopularFilms},
})