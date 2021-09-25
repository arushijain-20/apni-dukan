import React from "react";
import "../css/Product.css";

const Product = ({title,price,image,rating}) => {
  return (
    <div className="card">
    <div className="product_info">
      <div className="title">{title}</div>
      <div className="price">Price: <strong>${price}</strong></div>
      <div className="rating">Ratings: {rating}/5</div>
      </div>
      <img
        src={image}
        alt="product_img"
      ></img>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
