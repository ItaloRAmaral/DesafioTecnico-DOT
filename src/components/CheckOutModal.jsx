import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { goToHome, clearCart } from "../redux/reducers/addToCart";
import { setFavAndShopBar } from "../redux/reducers/sideBarCart";

function CheckOutModal () {
  const name = useSelector((state) => state.userInfo.name);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(goToHome());
    dispatch(clearCart());
    dispatch(setFavAndShopBar());
  }

  return (
    <div className="p-[1rem] border border-2 border-gray w-[30vw] h-[20vh] absolute bg-white top-[25vh] self-center">
      <div className="relative h-[100%]">
        <h1 className="text-[2vw] font-bold text-center">
          {`Obrigado ${name}!`}
        </h1>

        <p className="text-[1.25vw] mt-[1rem] text-center">
          Sua compra foi finalizada com sucesso!
        </p>
        <Link to="/">
          <button
            className="w-[50%] bg-brand-secondary text-white p-1 absolute z-10 bottom-0 left-[24%]"
            onClick={handleModal}
          >
            Ir para loja
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckOutModal;