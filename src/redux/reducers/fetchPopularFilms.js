import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPopularFilms } from '../../api/fetchPopularFilms'

export const fetchPopularFilms = createAsyncThunk('fetchPopularFilms', async () => {
  const products = await getPopularFilms()
  return products
});

const initialState = {
  films: [],
  filmsError: null,
}

export const fetchProducts = createSlice({
  name: 'fetcher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularFilms.fulfilled, (state, action) => {
      state.films = action.payload
    })
    builder.addCase(fetchPopularFilms.rejected, (state, action) => {
      state.filmsError = action.payload
    })
  }
})

export const popularFilms = (state) => state.fetcher.films

export default fetchProducts.reducer