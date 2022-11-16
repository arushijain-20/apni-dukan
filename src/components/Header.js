import React, { useReducer, useContext } from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import LoginReducer from "../context/LoginReducer";
import { initialUser } from "../context/LoginReducer";
import CartContext from "../context/CartContext";
import Logo from "../images/logo.png"
import { auth } from "../firebase";

function Header() {
  const { cartItems } = useContext(CartContext);
  const [{ user }] = useReducer(LoginReducer, initialUser);

  const handleAuthentication = (e) => {
    e.preventDefualt();
    if (user) {
      auth.signOut();
    }
  };

  const handleLogin = (user) => {
    if (user!==null) {
      console.log("logged in");
      return (
        <div className="header_option" onClick={handleAuthentication}>
          <span className="header_option_lineOne">Hello,${user.email}</span>

          <span className="header_option_lineTwo">Sign Out</span>
        </div>
      );
    } 
    else {
      console.log("logged out");
      return (
        <>
          <span className="header_option_lineOne">Hello,Guest</span>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="header_option_lineTwo">Sign In</span>
          </Link>
        </>
      );
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={Logo}
          alt="logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <button type="submit" className="searchButton">
          <SearchIcon className="header_searchIcon"></SearchIcon>
        </button>
      </div>
      <div className="header_nav">
        <div className="header_option">{handleLogin(user)}</div>
        <div className="header_option">
          <span className="header_option_lineOne">Returns</span>
          <span className="header_option_lineTwo">&Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_option_basket">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
