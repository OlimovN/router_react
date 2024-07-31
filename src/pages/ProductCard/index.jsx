import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <Link to={`/details/${product.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
