import React from 'react';

function SearchBar() {
    return (
      <section class="search-filters">
        <input type="text" placeholder="Search events..." />
        <select>
          <option value="all">All Types</option>
          <option value="workshop">Workshops</option>
          <option value="webinar">Webinars</option>
          <option value="conference">Conferences</option>
        </select>
        <select>
          <option value="all">All Dates</option>
          <option value="july">July 2024</option>
          <option value="august">August 2024</option>
        </select>
        <select>
          <option value="all">All Locations</option>
          <option value="online">Online</option>
          <option value="new-york">New York</option>
        </select>
      </section>
    );
  }
  

export default SearchBar;