import React from "react";
import "../css/Home.css";
import Products from "../components/Products";
import Slideshow from "../components/Slideshow";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Slideshow/>
        <Products/>
      </div>
    </div>
  );
}

export default Home;
