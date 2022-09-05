import React from "react";
import { useSelector } from "react-redux";

function MovieCard(props) {
  const genres = useSelector(state => state.fetchFilmsGenres.genres);

  const { title, genre, vote } = props;

  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w185/";
  const genreId = genre[0];

  const genreName = genres !== null && genres.filter((genre) => genre.id === genreId).map((genre) => genre.name);

  const filmPrice = (Math.random() * 30 + 1).toFixed(2);
  
  return (
    <div>
      <img src={`${BASE_URL_IMAGE}${props.poster}`} alt={props.title} />
      <h2>{title}</h2>
      <h5>{genreName}</h5>
      <h5>{vote}</h5>
      <h5>{`R$ ${filmPrice}`}</h5>
      <button>Adicionar</button>
    </div>
  );
}

export default MovieCard;
