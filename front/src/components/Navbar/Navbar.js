import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/Contex";
import { Link } from "react-router-dom";
import "./Nabvar.css";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const { countProducts } = useContext(ApiContext);

  return (
    <nav>
      <Link id="link-estilizado" to="/">
        <span>EcomsurStore</span>
      </Link>
      <Link id="link-estilizado" to="/CartDetail">
        <button className="boton btn-cart">
          <TiShoppingCart /> Cart ({countProducts})
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
