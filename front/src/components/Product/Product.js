import { Link } from "react-router-dom";
import { localStorageService } from "../../service/localStorageService";

import "./Product.css";

const Product = ({
  item,
  setCart,
  cart,
  countProducts,
  setCountProducts,
  obtenerEstrellas,
}) => {
  const onAddToCart = (item) => {
    const newCart = [...cart];
    const ExistingProduct = newCart.find((x) => x._id === item._id);
    if (ExistingProduct) {
      ExistingProduct.quantity += 1;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }
    setCart(newCart);
    setCountProducts(countProducts + 1);
    localStorageService.set("cartItems", newCart);
  };

  const stars = obtenerEstrellas(item.rating);

  console.log(cart);

  const productQuantity = cart.find((x) => x._id === item._id)?.quantity ?? 0;

  return (
    <div className="container">
      <Link id="link-estilizado" to={`${item._id}`} key={item._id}>
        <img
          className="image_item"
          src={"http://localhost:5000/" + item.image}
          alt={item.name + " image"}
        />
      </Link>
      <h3 className="title_product">{item.name}</h3>
      <div className="container-rating">
        <p className="rating-stars">{stars}</p>
        <p className="reviews">Reviews {item.numReviews}</p>
      </div>
      <div className="container_info">
        <p>{"$" + item.price}</p>

        <button
          className="add_to_cart boton"
          onClick={() => {
            onAddToCart(item);
          }}
          disabled={productQuantity >= item.countInStock}
          // disabled={productQuantity === item.countInStock}
        >
          Add item to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
