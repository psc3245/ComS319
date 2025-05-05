import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import ProductListings from "./Components/ProductListings";
import Products from "./data/Products";

const App = () => {
  console.log("Step 1 : Grab the selectedCategory or default to all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  function handleTagClick(tag) {
    setSelectedCategory(tag);
  }
  
  return (
    <>
      <div className="flex">
        <Navigation onTagClick={handleTagClick}/>
        <ProductListings selectedCategory={selectedCategory} products={Products}/>
      </div>
    </>
  );
};

export default App;