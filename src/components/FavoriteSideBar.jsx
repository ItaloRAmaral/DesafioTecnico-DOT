import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {clearFavoriteFilms} from "../redux/reducers/favoriteFilms";
import FavoriteSideBarProductCart from "./FavoriteSideBarProductCart";

function FavoriteSideBar () {
  const dispatch = useDispatch();
  const favoriteFilms = useSelector(state => state.favoriteFilms.favoriteFilms);

  const clearFavorite = () => {
    dispatch(clearFavoriteFilms())
  }
  return (
    <section className="favSidebarMq w-[95rem] h-[80vh] bg-gray-200 bg-opacity-40 p-5 relative border-l border-brand-primary border-opacity-40">
      <div className="flex justify-between">
        <h1>Meus Favoritos</h1>
        <button onClick={clearFavorite}>Esvaziar</button>
      </div>

      <div>
        {favoriteFilms.length > 0 &&
          favoriteFilms.map((product) => (
            <FavoriteSideBarProductCart
              key={product.filmId}
              title={product.title}
              price={product.price}
              poster={product.poster}
              quantity={product.quantity}
              filmId={product.filmId}
            />
          ))}
      </div>
    </section>
  );
}

export default FavoriteSideBar;