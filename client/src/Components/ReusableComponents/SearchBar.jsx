import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return (
      <section className="search-filters">
      <div className="search-resources-container">
        <input type="text" placeholder="Search events, scholarships, online courses..." />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="filter-container">
        <select className="filter-select">
          <option value="all">All Types</option>
          <option value="workshop">Workshops</option>
          <option value="webinar">Webinars</option>
          <option value="conference">Conferences</option>
          <option value="scholarship">Scholarships</option>
          <option value="course">Online Courses</option>
        </select>
        <select className="filter-select">
          <option value="all">All Dates</option>
          <option value="july">July 2024</option>
          <option value="august">August 2024</option>
          <option value="september">September 2024</option>
        </select>
        <select className="filter-select">
          <option value="all">All Locations</option>
          <option value="online">Online</option>
          <option value="new-york">New York</option>
          <option value="san-francisco">San Francisco</option>
          <option value="london">London</option>
        </select>
      </div>
    </section>
    
    );
}

export default SearchBar;