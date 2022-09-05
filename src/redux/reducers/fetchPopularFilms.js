import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPopularFilms } from '../../helpers/fetchApi'

export const getPopularFilms = createAsyncThunk('fetchFilms', async (page) => {
  const products = await fetchPopularFilms(page)
  return products
});

const initialState = {
  films: null,
  allFilms: [],
  page: 2,
  filmsError: null,
}

export const fetchFilms = createSlice({
  name: 'fetcher',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = state.page + 1
    },    
  },
  extraReducers: (builder) => {
    builder.addCase(getPopularFilms.fulfilled, (state, action) => {
      state.films = action.payload.results
      state.allFilms = [...state.allFilms, ...action.payload.results]
    })
    builder.addCase(getPopularFilms.rejected, (state, action) => {
      state.filmsError = action.payload
    })
  }
})

export const popularFilms = (state) => state.fetcher.films
export const { loadMore, setPage } = fetchFilms.actions

export default fetchFilms.reducer