import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../../Context/Contex";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { obtenerEstrellas } = useContext(ApiContext);
  const { id } = useParams();
  const [productDetail, setproductDetail] = useState([]);
  const {
    name,
    image,
    description,
    brand,
    category,
    price,
    countInStock,
    rating,
    numReviews,
  } = productDetail;
  const api = `http://localhost:5000/api/products/${id}`;

  useEffect(() => {
    async function fetchProductDetail() {
      const response = await fetch(api);
      const data = await response.json();
      setproductDetail(data);
    }
    fetchProductDetail();
  }, [api]);

  console.log(image);

  const stars = obtenerEstrellas(rating);

  return (
    <article>
      <div className="box-back">
        <Link id="link-estilizado" to="/">
          <BsFillArrowLeftSquareFill size={30} />
        </Link>
      </div>
      <div className="box">
        <div className="box-left">
          <div className="box-image">
            <img src={"http://localhost:5000/" + image} alt={name} />
          </div>
          <h2>{name}</h2>
          <p className="description">{description}</p>
        </div>
        <div className="box-rigth">
          <div className="box-information">
            <h3 className="title-information">Information</h3>
            <ul className="list-information">
              <li className="list-item">
                <p>Brand: {brand}</p>
              </li>
              <li className="list-item">
                <p>category: {category}</p>
              </li>
              <li className="list-item">
                <p>Price: ${price}</p>
              </li>
              <li className="list-item">
                <p>Stock: {countInStock}</p>
              </li>
              <li className="list-item">
                <p>Rating: {stars}</p>
              </li>
              <li className="list-item">
                <p>Reviews: {numReviews}👥</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;
