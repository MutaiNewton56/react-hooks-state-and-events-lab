import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Step 1: Create a state variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Update state when the select value changes
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Step 3: Filter items based on selectedCategory
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
