import React, { useContext } from "react";
import "../css/Checkout.css";
import Subtotal from "../components/Subtotal";
import CartContext from "../context/CartContext";
import Cart_Item from "../components/Cart_Item";
import banner from "../images/pic4.jpg"
const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout">
      <div className="left_part wrapper">
        <img
          alt="banner"
          src={banner}
        ></img>
        <div className="cart_heading">Your Shopping Cart</div>
        <div className="cart_wrapper">
          {cartItems.length === 0 ? (
            <span>The Cart is empty.</span>
          ) : (
            <ul>
              {cartItems.map((item) => {
                return (
                  <Cart_Item
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating.rate}
                    price={item.price}
                    item={item}
                  ></Cart_Item>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="right_part wrapper">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
