import React from "react";
import "../css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png"
        alt="logo"
      />
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
        <div className="header_option_basket">
          <ShoppingCartIcon></ShoppingCartIcon>
        </div>

      </div>
    </div>
  );
}

export default Header;
