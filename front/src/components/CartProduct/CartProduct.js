import React from "react";
import "./CartProduct.css";
import { localStorageService } from "../../service/localStorageService";

const CartProduct = ({
  product,
  cart,
  setCart,
  countProducts,
  setCountProducts,
}) => {
  const onAddToShoppingCart = (product) => {
    const newCart = [...cart];
    const ExistingProduct = newCart.find((x) => x._id === product._id);
    if (ExistingProduct) {
      ExistingProduct.quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCountProducts(countProducts + 1);
    setCart(newCart);
    localStorageService.set("cartItems", newCart);
  };

  const onDeleteShoppingCart = (product) => {
    const newCart = [...cart];
    const ExistingProduct = newCart.find((x) => x._id === product._id);
    if (ExistingProduct.quantity === 1) {
      newCart.splice(newCart.indexOf(ExistingProduct, 1));
    } else {
      ExistingProduct.quantity -= 1;
    }
    setCountProducts(countProducts - 1);
    setCart(newCart);
    localStorageService.set("cartItems", newCart);
  };

  const deleteProductShoppingCart = (product) => {
    const newCart = [...cart];
    const productDelete = newCart.findIndex((pD) => pD._id === product._id);
    newCart.splice(productDelete, 1);
    setCart(newCart);
    setCountProducts(countProducts - product.quantity);
    localStorageService.set("cartItems", newCart);
  };

  return (
    <article className="card-productCart">
      <div className="box-left">
        <img
          src={"http://localhost:5000/" + product.image}
          alt={product.name}
          className="productCart-image"
        />
        <div className="container-btn">
          <button
            className="boton"
            disabled={product.quantity === 1}
            onClick={() => onDeleteShoppingCart(product)}
          >
            -
          </button>
          <p className="quantity-productCart">{product.quantity}</p>
          <button
            className="boton"
            disabled={product.quantity >= product.countInStock}
            onClick={() => onAddToShoppingCart(product)}
          >
            +
          </button>
        </div>
      </div>
      <div className="box-rigth">
        <ul className="info-producCart">
          <li className="productCart-item-list">{product.name}</li>
          <li className="productCart-item-list">{product.brand}</li>
          <li className="productCart-item-list">price: Us${product.price}</li>
          <button
            className="delete-item boton"
            onClick={() => deleteProductShoppingCart(product)}
          >
            Eliminar
          </button>
        </ul>
      </div>
    </article>
  );
};

export default CartProduct;
