import React from "react";
import SearchBar from "../Blog/SearchBar";

import './Events.css'

function Events() {
  return (
    <div className="event-section">
      <section class="event-hero">
        <h1>Upcoming Events</h1>
        <p>Join us for the latest events in tech, business, and more!</p>
      </section>

<SearchBar />

      <section class="featured-events">
        <h2>Featured Events</h2>
        <div class="event-card">
          <img src="/Default_blog_websites_contain_blue_2.jpg" alt="Event 1" />
          <h3>Event Title 1</h3>
          <p>Date: July 20, 2024</p>
          <p>Location: New York, NY</p>
          <a href="#" class="btn">
            Learn More
          </a>
        </div>
      </section>

      <section class="upcoming-events">
        <h2>Upcoming Events</h2>
        <div class="event-list">
          <div class="event-card">
            <img src="/Default_blog_websites_contain_blue_1.jpg" alt="Event 2" />
            <h3>Event Title 2</h3>
            <p>Date: August 15, 2024</p>
            <p>Location: Online</p>
            <a href="#" class="event-btn">
              Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
