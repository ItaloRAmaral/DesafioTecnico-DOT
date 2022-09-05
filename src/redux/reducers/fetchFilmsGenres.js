import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGenres } from '../../helpers/fetchApi';

export const getGenres = createAsyncThunk('fetchFilmsGenres', async () => {
  const genres = await fetchGenres();
  return genres;
})

const initialState = {
  genres: null,
  genresError: null,
}

export const fetchFilmsGenres = createSlice({
  name: 'fetcher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload
    })
    builder.addCase(getGenres.rejected, (state, action) => {
      state.genresError = action.payload
    })
  }
})

export const filmGenres = (state) => state.fetcher.genres;

export default fetchFilmsGenres.reducer