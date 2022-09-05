const API_KEY = 'api_key=5cc8b7a8e1853832de38dd09dccaed37';
const BASE_URL = 'https://api.themoviedb.org/3';
// const PAGE = '1';

export const fetchPopularFilms = async (page) => {
  const FETCH_URL = `${BASE_URL}/movie/popular?${API_KEY}&language=en-US&page=${page}`;
  try {
    const response = await fetch(FETCH_URL);
    const data = await response.json();
    console.log('POPULAR FILMS',data)

    return data;
  } catch (error) {
    console.log(error)
  }
};

export const fetchGenres = async () => {
  const FETCH_URL = `${BASE_URL}/genre/movie/list?${API_KEY}&language=en-US`;
  try {
    const response = await fetch(FETCH_URL);
    const { genres } = await response.json();
    
    console.log('FILM GENRES',genres)

    return genres;
  } catch (error) {
    console.log(error)
  }
}