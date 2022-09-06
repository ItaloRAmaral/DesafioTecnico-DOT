import React from "react";
import { useDispatch } from "react-redux";
import { Trash, ShoppingCartSimple } from "phosphor-react";
import { removeFromFavorite } from "../redux/reducers/favoriteFilms";
import { addToCart } from "../redux/reducers/addToCart";

function FavoriteSideBarProductCart(props) {
  const { title, price, poster, filmId } = props;
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w780/";

  const dispatch = useDispatch();

  const removeFavorite = () => {
   dispatch(removeFromFavorite(filmId));
  };

  const addToShoppingCart = (title, price, poster, id) => {
    const film = {
      filmId: id,
      title,
      price,
      poster,
      quantity: 1
    }

    dispatch(addToCart(film));
  }

  return (
    <section className="flex gap-[0.5rem] h-[2rem] justify-between text-xs mt-[0.7rem]  items-center">
      <div className="w-[2rem] h-[2rem]">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={`${BASE_URL_IMAGE}${poster}`}
          alt={title}
        />
      </div>

      <div className="flex flex-wrap text-xs w-[7rem]">
        <h1>{title}</h1>
      </div>

      <h1>{`R$ ${price}`}</h1>

      <button
        onClick={() => addToShoppingCart(title, price, poster, filmId)}
      >
        <ShoppingCartSimple size={16} color="#999999" weight="duotone" />
      </button>

      <button onClick={removeFavorite}>
        <Trash size={16} color="#999999" weight="duotone" />
      </button>
    </section>
  );
}

export default FavoriteSideBarProductCart;
