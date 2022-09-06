import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import SideBarcart from "../components/SideBarCart";
import FavoriteSideBar from "../components/FavoriteSideBar";

function Home() {
  const isSideBarOpen = useSelector(state => state.sideBarCart.sideBar);
  const isFavoriteSideBarOpen = useSelector(state => state.sideBarCart.favSideBar);

  return (
    <div>
      <Header />
      <section className="flex">
        <ProductList />
        {isSideBarOpen && <SideBarcart />}
        {isFavoriteSideBarOpen && <FavoriteSideBar />}
      </section>
    </div>
  );
}

export default Home;
