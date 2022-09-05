import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-1 border border-black">
      <div>
        <h1>FireStore</h1>
      </div>
      <div>
        <input type="text" placeholder="Pesquisa" />
      </div>
      <div>
        <Link to="">
          <h2>Carrinho de compras</h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
