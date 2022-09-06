import React from "react";
import { useDispatch } from "react-redux";
import { Trash } from "phosphor-react";
import { removeFromCart } from "../redux/reducers/addToCart";

function SideBarProductCart(props) {
  const { title, price, poster, quantity, filmId } = props;
  const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w780/";

  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(removeFromCart(filmId));
  };

  return (
    <section className="flex gap-[0.5rem] h-[2rem] justify-between text-xs mt-[0.7rem]  items-center">
      <div className="checkOutCardImgMq w-[2rem] h-[2rem]">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={`${BASE_URL_IMAGE}${poster}`}
          alt={title}
        />
      </div>

      <div className="checkOutFilmTitleMq flex flex-wrap text-xs w-[7rem]">
        <h1>{title}</h1>
      </div>

      <h1 className="checkOutQtMq">{quantity}</h1>
      <h1 className="checkOutPrice">{`R$ ${price}`}</h1>

      <button onClick={removeProduct}>
        <Trash size={16} color="#999999" weight="duotone" />
      </button>
    </section>
  );
}

export default SideBarProductCart;
