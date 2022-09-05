import { configureStore } from '@reduxjs/toolkit'
import fetchFilms from '../reducers/fetchPopularFilms'
import fetchFilmsGenres from '../reducers/fetchFilmsGenres'


export const store = configureStore({
  reducer: {fetchFilms, fetchFilmsGenres},
})