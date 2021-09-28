import React from "react";
import "../css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
    <Link to="/">
      <img
        className="header_logo"
        src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png"
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
        <div className="header_option">
          <span className="header_option_lineOne">Hello,Guest</span>
          <span className="header_option_lineTwo">SignIN</span>
        </div>
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
        </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
