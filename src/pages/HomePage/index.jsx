import React from 'react'

export default function Home() {
  return (
    <div>Home</div>
  )
}
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    if (category) {
      fetch(
        `https://cars-pagination.onrender.com/products/category?category=${category}`
      )
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error(error));
    } else {
      fetch("https://cars-pagination.onrender.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All</option>
        <option value="средний">Средний</option>
      </select>
      <button onClick={filterProducts}>Filter</button>
      <div>
        {products.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <Link to={`/details/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

