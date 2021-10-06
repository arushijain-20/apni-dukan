import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import "../css/Subtotal.css";

const Subtotal = () => {
  const { cartItems } = useContext(CartContext);
  var tot_amount=0;

    if (cartItems.length !== 0) {
      cartItems.map((item) => {
        return (tot_amount+=item.price);
      })
    };
  
  

  return (
    <div className="subtotal">
      <div>
        <p>
          Subtotal ({cartItems.length} items):
          <strong>${tot_amount}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox" />
          This order contains a gift
        </small>
      </div>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
