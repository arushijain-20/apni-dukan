import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";


export const initialState = {
  cartItems: [],
  user:null
};

const CartState = ({ children }) => {
  
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

   
   

  return (
    <div>
      <CartContext.Provider
        value={{ cartItems: state.cartItems , addToCart, removeItem}}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartState;
