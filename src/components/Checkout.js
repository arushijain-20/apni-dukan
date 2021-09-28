import React from "react";
import "../css/Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="left_part">
        <img
          alt="banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
        ></img>
        <div className="cart_heading">Your Shopping Cart</div>
      </div>
      <div className="right_part">
        <div className="subtotal">SubTotal(0 items): $0</div>
        <div>
          <input type="checkbox"></input>
          This order contains a gift.
        </div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
