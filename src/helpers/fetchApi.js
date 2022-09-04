const API_KEY = 'api_key=5cc8b7a8e1853832de38dd09dccaed37';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularFilms = async () => {
  const FETCH_URL = `${BASE_URL}/movie/popular?${API_KEY}`;
  try {
    const response = await fetch(FETCH_URL);
    const data = await response.json();
    console.log('POPULAR FILMS',data)

    return data;
  } catch (error) {
    console.log(error)
  }
};