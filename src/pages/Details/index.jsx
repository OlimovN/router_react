import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://cars-pagination.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="details">
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {product.image && (
        <img src={product.image} alt={product.name} className="product-image" />
      )}
    </div>
  );
};

export default Details;
