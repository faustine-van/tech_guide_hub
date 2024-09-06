import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className="blog-filters">
      <div className="blog-search-container">
        <input
          type="text"
          placeholder="Search blog..."
          className="blog-search"
        />
<button className="blog-search-icon" ><FaSearch /></button>        
        
      </div>
      <div className="blog-categories">
        <button className="category-btn active">All</button>
        <button className="category-btn">Career Tips</button>
        <button className="category-btn">Professional Insights</button>
        <button className="category-btn">Learning Resources</button>
        <button className="category-btn">Developer Stories</button>
        <button className="category-btn">Job Advice</button>
        <button className="category-btn">Skill Building</button>
        <button className="category-btn">Developer Insightsg</button>

      </div>
    </div>
  );
}


export default Categories;