import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import { setPage, getPopularFilms } from "../redux/reducers/fetchPopularFilms";

function ProductList() {
  const films = useSelector(state => state.fetchFilms.films);
  const allFilms = useSelector(state => state.fetchFilms.allFilms);
  const page = useSelector(state => state.fetchFilms.page);
  // const page = 1
  const dispatch = useDispatch();

  const loadMoreFilms = async (e) => {
    e.preventDefault();
    dispatch(setPage());
    dispatch(getPopularFilms(page));
  };
  
  return (
    <section>
      <div>
        {films !== null && allFilms.map((film) => (
          <MovieCard 
            key={film.id}
            title={film.title}
            genre={film.genre_ids}
            vote={film.vote_average}
            poster={film.poster_path}
            id={film.id}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={loadMoreFilms}
      >
        Carregar Mais
      </button>
    </section>
  );
}

export default ProductList;
