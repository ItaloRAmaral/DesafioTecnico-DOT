import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteFilms: [],
  
}

export const favoriteFilms = createSlice({
  name: 'favoriteFilms',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteFilms = [...state.favoriteFilms, action.payload]
    },
    removeFromFavorite: (state, action) => {
      state.favoriteFilms = state.favoriteFilms.filter(
        (film) => film.filmId !== action.payload
      )
    },
    clearFavoriteFilms: (state) => {
      state.favoriteFilms = []
    }
  },
})

export const { addToFavorite, removeFromFavorite, clearFavoriteFilms } = favoriteFilms.actions

export default favoriteFilms.reducer