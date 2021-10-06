import React, { useContext } from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import CartContext from "../context/CartContext";
import Cart_Item from "./Cart_Item";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout">
      <div className="left_part">
        <img
          alt="banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
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
      <div className="right_part">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
