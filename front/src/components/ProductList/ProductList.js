import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/Contex";
import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = () => {
  const {
    products,
    setCart,
    cart,
    total,
    setTotal,
    countProducts,
    setCountProducts,
    obtenerEstrellas
  } = useContext(ApiContext);

  console.log(products)

  return (
    <div className="container_products">
      {products.map((item) => {
        return (
            <Product
            key={item._id}
              page ='/'
              item={item}
              setCart={setCart}
              cart={cart}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              obtenerEstrellas={obtenerEstrellas}
            />
        );
      })}
    </div>
  );
};

export default ProductList;
