import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setUserName,
  setUserEmail,
  setUserPhone,
  setUserAddress,
  setUserCity,
  setUserState,
  setUserCep,
  setUserCpf,
  setUserPromo
} from "../redux/reducers/userInfo";
import { endCart } from "../redux/reducers/addToCart";
import { setFavAndShopBar } from "../redux/reducers/sideBarCart";

import { ArrowSquareLeft } from "phosphor-react";

import InputMask from "react-input-mask";
import CheckOutCard from "../components/CheckOutCard";
import CheckOutModal from "./CheckOutModal";

function CheckOutCart() {
  const isChecked = useSelector((state) => state.userInfo.promo);
  const isModalHidden = useSelector((state) => state.shoppingCart.modalHidden);

  const {name , email, phone, address, city, state, cep, cpf} = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  const cartProducts = useSelector(state => state.shoppingCart.products);
  const totalValue = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);


  const handleChange = ({target}) => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (target.name === 'userName') {
      dispatch(setUserName(target.value));    
      isEndCartBtnValidate()
    }
    if (target.name === 'userEmail' && emailRegex.test(target.value)) {
      dispatch(setUserEmail(target.value));
      isEndCartBtnValidate();
    }
    if (target.name === 'userPhone') {
      dispatch(setUserPhone(target.value));
      isEndCartBtnValidate();
    }
    if (target.name === "userAddress") {
      dispatch(setUserAddress(target.value));
      isEndCartBtnValidate()
    }
    if (target.name === 'userCity') {
      dispatch(setUserCity(target.value));
      isEndCartBtnValidate();
    }
    if (target.name === 'userState') {
      dispatch(setUserState(target.value));
      isEndCartBtnValidate();
    }
    if (target.name === 'userCep') {
      dispatch(setUserCep(target.value));
      isEndCartBtnValidate();
    }
    if (target.name === 'userCpf') {
      dispatch(setUserCpf(target.value));
      isEndCartBtnValidate();
    }
    if (target.name === 'userPromo') {
      dispatch(setUserPromo(target.value));
      isEndCartBtnValidate();
    }

    return false
  }

  const isEndCartBtnValidate = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (
      name.length > 0 &&
      emailRegex.test(email) &&
      phone.length > 0 &&
      address.length > 0 &&
      city.length > 0 &&
      state.length > 0 &&
      cep.length > 0 &&
      cpf.length > 0 &&
      cartProducts.length > 0
    ) {
      return false
    }
    return true;
  };

  const handleClick = () => {
    dispatch(endCart());
  }

  return (
    <section className="flex flex-col relative">
      <header className="flex p-1 bg-brand-primary h-14 items-center text-white justify-center text-[2.5vw] font-bold relative">
        <Link to="/">
          <button
            onClick={() => dispatch(setFavAndShopBar())}
            className="absolute left-[2vw] top-[1.25vh]"
          >
            <ArrowSquareLeft size={32} color="#ffffff" weight="fill" />
          </button>
        </Link>
        <h1 className="checkOutTitle">Meu Carrinho</h1>
      </header>

      <section className="checkOutCardMq flex w-[75vw] h-[45vh] border border-yellow-900 justify-between self-center p-[1.5vw] mt-[6vh]">
        <div className="endCartMq w-[30vw]">
          <h1 className="checkOutCarTitleMq text-[2vw] font-bold mb-[2vh]">
            Finalizar Compra
          </h1>
          <form>
            <label className="width-[100%]" htmlFor="userName">
              <input
                className="p-[0.2rem] w-[100%] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50 mb-[2vh]"
                onChange={handleChange}
                type="text"
                name="userName"
                id="userName"
                placeholder="Nome Completo"
              />
            </label>

            <div className="flex justify-between mb-[2vh]">
              <label htmlFor="userCpf">
                <InputMask
                  className="mediumSizeInputMq p-[0.2rem] w-[12vw] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50"
                  mask="999.999.999-99"
                  placeholder="CPF"
                  name="userCpf"
                  id="userCpf"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="userPhone">
                <InputMask
                  className="mediumSizeInputMq p-[0.2rem] w-[14.5vw] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50"
                  mask="(99) 99999-9999"
                  placeholder="Celular"
                  name="userPhone"
                  id="userPhone"
                  onChange={handleChange}
                />
              </label>
            </div>

            <label htmlFor="userEmail">
              <input
                className="p-[0.2rem] w-[100%] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50 mb-[2vw]"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="E-mail"
                onChange={handleChange}
              />
            </label>

            <div className="flex justify-between mb-[2vh]">
              <label htmlFor="userCEP">
                <InputMask
                  className="mediumSizeInputMq p-[0.2rem] w-[12vw] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50"
                  mask="99999-999"
                  placeholder="CEP"
                  onChange={handleChange}
                  name="userCep"
                />
              </label>

              <label htmlFor="userAddress">
                <input
                  className="mediumSizeInputMq p-[0.2rem] w-[17vw] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50"
                  type="text"
                  name="userAddress"
                  id="userAddress"
                  placeholder="Endereço"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="flex justify-between mb-[2vh]">
              <label htmlFor="userCity">
                <input
                  className="mediumSizeInputMq p-[0.2rem] w-[14.5vw] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50"
                  type="text"
                  name="userCity"
                  id="userCity"
                  placeholder="Cidade"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="userState">
                <input
                  className="mediumSizeInputMq p-[0.2rem] w-[14.5vw] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50"
                  type="tel"
                  name="userState"
                  id="userState"
                  placeholder="Estado"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="flex">
              <input
                className="promoCheckboxMq p-[0.2rem] placeholder:text-slate-300 border rounded border-gray-300 border-opacity-50 mb-[2vw]"
                type="checkbox"
                name="userPromo"
                id="userPromo"
                onChange={handleChange}
                checked={isChecked}
              />
              <label className="promoCheckboxTitleMq text-[1vw] ml-[1vw] " htmlFor="userPromo">
                Desejo receber promoções e novidades por e-mail
              </label>
            </div>
          </form>
        </div>

        <div className="checkOutProductsMq w-[38vw] h-[40vh] bg-gray-200 bg-opacity-40 p-5 relative border-l border-brand-primary border-opacity-40">
          <div className="h-[28vh] overflow-y-auto">
            {cartProducts.length > 0 &&
              cartProducts.map((product) => (
                <CheckOutCard
                  key={product.filmId}
                  title={product.title}
                  price={product.price}
                  poster={product.poster}
                  quantity={product.quantity}
                  filmId={product.filmId}
                />
              ))}
          </div>

          <div className="flex absolute z-10 bottom-10 w-[90%]">
            {cartProducts.length > 0 && (
              <div className="flex justify-between w-[100%]">
                <h1>Total:</h1>
                <h1>{`R$ ${totalValue.toFixed(2)}`}</h1>
              </div>
            )}
          </div>

          <button
            className="endCartBtnMq w-[100%] bg-brand-secondary text-white p-1 absolute z-10 bottom-0 left-0"
            type="button"
            onClick={handleClick}
            disabled={isEndCartBtnValidate()}
            style={{ opacity: !isEndCartBtnValidate() ? 1 : 0.3 }}
          >
            Finalizar Compra
          </button>
        </div>
      </section>

      {isModalHidden && <CheckOutModal />}
    </section>
  );
}

export default CheckOutCart;
