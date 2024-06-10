import React from "react";

function SearchBar({ onCategoryChange, onFilterchange, sortBy }) {

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="name"
          name="sort"
          checked={sortBy === "name"}
          onChange={onCategoryChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="price"
          name="sort"
          checked={sortBy === "price"}
          onChange={onCategoryChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onFilterchange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
