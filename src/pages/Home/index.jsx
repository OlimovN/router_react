import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Filter from "./Filter";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://cars-pagination.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const filterProducts = () => {
    const url = category
      ? `https://cars-pagination.onrender.com/products/category?category=${category}`
      : "https://cars-pagination.onrender.com/products";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="home">
      <Filter
        category={category}
        setCategory={setCategory}
        filterProducts={filterProducts}
      />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
