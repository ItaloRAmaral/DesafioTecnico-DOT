import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/reducers/addToCart";
import SideBarProductCart from "./SideBarProductCart";

function SideBarcart() {
  const dispatch = useDispatch();

  const cartProducts = useSelector(state => state.shoppingCart.products);
  const totalValue = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
  

  const clearShoppingCart = () => {
    dispatch(clearCart())
  }
  
  return (
    <section className="favSidebarMq w-[95rem] h-[80vh] bg-gray-200 bg-opacity-40 p-5 relative border-l border-brand-primary border-opacity-40">
      <div className="flex justify-between">
        <h1>Meu Carrinho</h1>
        <button onClick={clearShoppingCart}>Esvaziar</button>
      </div>

      <div>
        {cartProducts.length > 0 &&
          cartProducts.map((product) => (
            <SideBarProductCart
              key={product.filmId}
              title={product.title}
              price={product.price}
              poster={product.poster}
              quantity={product.quantity}
              filmId={product.filmId}
            />
          ))}
      </div>

      <div className="flex absolute z-10 bottom-10 ">
        {cartProducts.length > 0 && (
          <div className="flex justify-between space-x-40">
            <h1>Total:</h1>
            <h1>{`R$ ${totalValue.toFixed(2)}`}</h1>
          </div>
        )}
      </div>
      
      <Link to="/checkout">
        <button
          className="w-[100%] bg-brand-secondary text-white p-1 absolute z-10 bottom-0 left-0"
          disabled={cartProducts.length > 0 ? false : true}
          style={{ opacity: cartProducts.length > 0 ? 1 : 0.5 }}
        >
          Finalizar Compra
        </button>
      </Link>
    </section>
  );
}

export default SideBarcart;
