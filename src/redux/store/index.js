import { configureStore } from '@reduxjs/toolkit'
import fetchFilms from '../reducers/fetchPopularFilms'
import fetchFilmsGenres from '../reducers/fetchFilmsGenres'
import shoppingCart from '../reducers/addToCart'
import sideBarCart from '../reducers/sideBarCart'
import favoriteFilms from '../reducers/favoriteFilms'
import userInfo from '../reducers/userInfo'


export const store = configureStore({
  reducer: {
    fetchFilms,
    fetchFilmsGenres,
    shoppingCart,
    sideBarCart,
    favoriteFilms,
    userInfo,
  },
})