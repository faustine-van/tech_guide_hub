import React from 'react';

function SearchBar() {
    return (
      <section className="search-bar">
        <h2>Search Articles</h2>
        <input type="text" placeholder="Search for articles..." />
        <button type="button">Search</button>
      </section>
    );
  }
  

export default SearchBar;