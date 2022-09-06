import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Star, Heart } from "phosphor-react";
import { addToCart } from "../redux/reducers/addToCart";
import { addToFavorite, removeFromFavorite } from "../redux/reducers/favoriteFilms";

function MovieCard(props) {
  const [isDisabled, setDisabled] = useState(false);

  const dispatch = useDispatch();
  const { title, genre, vote, id } = props;
  
  const genres = useSelector(state => state.fetchFilmsGenres.genres);
  const genreId = genre[0];

  const genreName = genres !== null && genres.filter((genre) => genre.id === genreId).map((genre) => genre.name);
  
  const favoriteFilms = useSelector(state => state.favoriteFilms.favoriteFilms);
  
  const isFavorite = favoriteFilms !== null && favoriteFilms.some((film) => film.filmId === id);
  

  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w185/";


  const filmPrice = 17.98;

  const addToShoppingCart = (title, price, poster, id) => {
    const film = {
      filmId: id,
      title,
      price,
      poster,
      quantity: 1
    }

    dispatch(addToCart(film));
    setDisabled(true);
  }

  const addToFavoriteFilms = (title, price, poster, id) => {
    const film = {
      filmId: id,
      title,
      price,
      poster,
      quantity: 1,
      favorite: true,
    };

    if (isFavorite === true ) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(film));
    }

  }
  
  return (
    <div className="musicCardMq w-[12rem] h-[27rem] gap-[5rem] border bg-brand-primary bg-opacity-30 border-brand-secondary text-center relative">
      <button
        className="absolute right-0 pointer-events-auto"
        onClick={() => addToFavoriteFilms(title, filmPrice, props.poster, id)}
      >
        <Heart
          size={20}
          color="#5DD8D9"
          weight={isFavorite ? "fill" : "duotone"}
        />
      </button>

      <img
        className="imgMq w-[100%] object-cover"
        src={`${BASE_URL_IMAGE}${props.poster}`}
        alt={title}
      />
      <h2 className="titleMq mb-[0.5rem]">{title}</h2>

      <div className="filmInfoMq flex space-x-2 justify-evenly mb-[0.5rem]">
        <div className="flex items-center space-x-1">
          <Star size={18} color="#fcff5c" weight="fill" />
          <h5>{vote}</h5>
        </div>

        <h5>{genreName}</h5>
      </div>

      <h5 className="filmPriceMq">{`R$ ${filmPrice}`}</h5>

      <button
        className="w-[100%] bg-brand-secondary text-white p-1 absolute z-10 bottom-0 left-0"
        disabled={isDisabled}
        onClick={() => addToShoppingCart(title, filmPrice, props.poster, id)}
        style={{ opacity: isDisabled ? 0.5 : 1 }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default MovieCard;
