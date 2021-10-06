import React from "react";
import { useEffect, useState } from "react";
import Product from "./Product";
import "../css/Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    setProducts(await response.json());
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="heading">MEN</div>
      <div className="card_container">
        {products
          .filter((product) => product.category === "men's clothing")
          .map((filteredProducts) => {
            return (
              <Product
                id={filteredProducts.id}
                title={filteredProducts.title}
                price={filteredProducts.price}
                image={filteredProducts.image}
                rating={filteredProducts.rating.rate}
                product={filteredProducts}
                key={filteredProducts.id}
              />
            );
          })}
      </div>
      <div className="heading">WOMEN</div>
      <div className="card_container">
        {products
          .filter((product) => product.category === "women's clothing")
          .map((filteredProducts) => {
            return (
              <Product
                title={filteredProducts.title}
                price={filteredProducts.price}
                image={filteredProducts.image}
                rating={filteredProducts.rating.rate}
                product={filteredProducts}
                key={filteredProducts.id}
              />
            );
          })}
      </div>
      <div className="heading">Jewellery</div>
      <div className="card_container">
        {products
          .filter((product) => product.category === "jewelery")
          .map((filteredProducts) => {
            return (
              <Product
                title={filteredProducts.title}
                price={filteredProducts.price}
                image={filteredProducts.image}
                rating={filteredProducts.rating.rate}
                product={filteredProducts}
                key={filteredProducts.id}
              />
            );
          })}
      </div>
      <div className="heading">Electronics</div>
      <div className="card_container">
        {products
          .filter((product) => product.category === "electronics")
          .map((filteredProducts) => {
            return (
              <Product
              key={filteredProducts.id}
                title={filteredProducts.title}
                price={filteredProducts.price}
                image={filteredProducts.image}
                rating={filteredProducts.rating.rate}
                product={filteredProducts}
              />
            );
          })}
      </div>
    </>
  );
};

export default Products;
