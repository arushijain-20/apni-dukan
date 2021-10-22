import React from "react";
import "../css/Home.css";
import Products from "../components/Products";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg"
          alt="banner"
          className="home_image"
        />
        <Products/>
      </div>
    </div>
  );
}

export default Home;
