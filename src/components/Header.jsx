import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar, setFavSideBar } from "../redux/reducers/sideBarCart";
import { ShoppingCartSimple, Heart, MagnifyingGlass } from "phosphor-react";

function Header() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.shoppingCart.products);

  const setSidebarCart = () => {
    dispatch(setSideBar());
  }

  const setFavoriteSideBar = () => {
    dispatch(setFavSideBar());
  }
  
  return (
    <header className="flex justify-between p-1 bg-brand-primary h-14 items-center">
      <div className="logoMq ml-[3vw]">
        <h1 className="text-xl text-white">FireMovies</h1>
      </div>

      <div className="flex relative">
        <input
          className="searchMq p-[0.2rem] w-[15rem] placeholder:text-slate-300"
          type="text"
          placeholder="Pesquisa"
        />
        <span className="absolute z-10 right-[0.5rem] top-[0.2rem]">
          <MagnifyingGlass size={24} color="#7d7d7d" weight="thin" />
        </span>
      </div>

      <div className="flex space-x-3 mr-[3vw]">
        <button
          onClick={setFavoriteSideBar}
        >
          <Heart size={32} color="#fafafa" weight="fill" />
        </button>

        <button
          className="relative"
          onClick={setSidebarCart}
        >
          <ShoppingCartSimple size={32} color="#fafafa" weight="fill" />
          {products.length > 0 && (
            <span className="absolute z-10 right-0 top-0 bg-brand-tertiary text-white rounded-full w-[1rem] h-[1rem] flex items-center justify-center text-[0.5rem]">
              {products.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
