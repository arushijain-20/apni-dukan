
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import "../css/Product.css";



const Product = ({id,title,price,image,rating,product}) => {
  const {addToCart}=useContext(CartContext);
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
      <button onClick={()=>addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
