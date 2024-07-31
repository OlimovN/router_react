import React from "react";
import "./Filter.css";

const Filter = ({ category, setCategory, filterProducts }) => {
  return (
    <div className="filter">
      <select
        className="category-select"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="">All</option>
        <option value="средний">Средний</option>
      </select>
      <button className="filter-button" onClick={filterProducts}>
        Filter
      </button>
    </div>
  );
};

export default Filter;
