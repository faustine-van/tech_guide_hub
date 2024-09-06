import React from "react";
import SearchBar from '../ReusableComponents/SearchBar'
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaVideo } from 'react-icons/fa'; // Importing the virtual event icon


import './Events.css'

function Events() {
  return (
    <div className="events-container">
      <section className="event-hero">
        <h1>Upcoming Tech Events</h1>
        <p>Join us for the latest events in tech, business, and more!</p>
      </section><div className="events-section">
        <SearchBar />

        <section className="featured-events">
          <h2>Featured Events</h2>
          <div className="event-list">
            <div className="event-card">
              <div className="event-img">
                <img src="/Default_blog_websites_contain_blue_1.jpg" alt="Event 1" />
              </div>
              <div className="event-content">
                <h3>Enhancing Your WordPress Website's Security</h3>
                <div className="label">
                  <p>July 20, 2024</p>
                  <p><CiLocationOn /> New York, NY  {/*|  <FaVideo />  Virtual*/}</p>
                </div>

                <div className="speakers">
                  <p>Speakers: John Doe, Jane Smith</p>
                </div>
                <p>Join us for a comprehensive workshop on enhancing your WordPress website's security, covering best practices, tools, and techniques.</p>
                <Link to='/events/1' className="btn">
                  More details
                </Link>
              </div>


            </div>
            <div className="event-card">
              <div className="event-img">
                <img src="/Default_blog_websites_contain_blue_2.jpg" alt="Event 1" />
              </div>
              <div className="event-content">
                <h3>Enhancing Your WordPress Website's Security</h3>
                <div className="label">
                  <p>July 20, 2024</p>
                  <p><CiLocationOn /> New York, NY  {/*|  <FaVideo />  Virtual*/}</p>
                </div>

                <div className="speakers">
                  <p>Speakers: John Doe, Jane Smith</p>
                </div>
                <p>Join us for a comprehensive workshop on enhancing your WordPress website's security, covering best practices, tools, and techniques.</p>
                <Link to='/event' className="btn">
                  More details
                </Link>
              </div>


            </div>
            <div className="event-card">
              <div className="event-img">
                <img src="/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg" alt="Event 1" />
              </div>
              <div className="event-content">
                <h3>Enhancing Your WordPress Website's Security</h3>
                <div className="label">
                  <p>July 20, 2024</p>
                  <p><CiLocationOn /> New York, NY  {/*|  <FaVideo />  Virtual*/}</p>
                </div>

                <div className="speakers">
                  <p>Speakers: John Doe, Jane Smith</p>
                </div>
                <p>Join us for a comprehensive workshop on enhancing your WordPress website's security, covering best practices, tools, and techniques.</p>
                <Link to='/event' className="btn">
                  More details
                </Link>
              </div>


            </div>

          </div>
          <Link className="btn" to="/blogs/entire-article-collections">
            See All Articles
            <svg
              className="btn-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 16 4-4-4-4m6 8 4-4-4-4"
              />
            </svg>
          </Link>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-list">
            <div className="event-card">
              <div className="event-img">
                <img src="/Default_blog_websites_contain_blue_color_articles_2.jpg" alt="Event 1" />
              </div>
              <div className="event-content">
                <h3>Enhancing Your WordPress Website's Security</h3>
                <div className="label">
                  <p>July 20, 2024</p>
                  <p><CiLocationOn /> New York, NY  {/*|  <FaVideo />  Virtual*/}</p>
                </div>

                <div className="speakers">
                  <p>Speakers: John Doe, Jane Smith</p>
                </div>
                <p>Join us for a comprehensive workshop on enhancing your WordPress website's security, covering best practices, tools, and techniques.</p>
                <Link to='/event' className="btn">
                  More details
                </Link>
              </div>


            </div>
            <div className="event-card">
              <div className="event-img">
                <img src="/Default_developer_or_tech_entusiast_3.jpg" alt="Event 1" />
              </div>
              <div className="event-content">
                <h3>Enhancing Your WordPress Website's Security</h3>
                <div className="label">
                  <p>July 20, 2024</p>
                  <p><CiLocationOn /> New York, NY  {/*|  <FaVideo />  Virtual*/}</p>
                </div>

                <div className="speakers">
                  <p>Speakers: John Doe, Jane Smith</p>
                </div>
                <p>Join us for a comprehensive workshop on enhancing your WordPress website's security, covering best practices, tools, and techniques.</p>
                <Link to='/event' className="btn">
                  More details
                </Link>
              </div>


            </div>
            <div className="event-card">
              <div className="event-img">
                <img src="/Default_website_for_A_professional_background_image_showcasing_3.jpg" alt="Event 1" />
              </div>
              <div className="event-content">
                <h3>Enhancing Your WordPress Website's Security</h3>
                <div className="label">
                  <p>July 20, 2024</p>
                  <p><CiLocationOn /> New York, NY  {/*|  <FaVideo />  Virtual*/}</p>
                </div>

                <div className="speakers">
                  <p>Speakers: John Doe, Jane Smith</p>
                </div>
                <p>Join us for a comprehensive workshop on enhancing your WordPress website's security, covering best practices, tools, and techniques.</p>
                <Link to='/event' className="btn">
                  More details
                </Link>
              </div>
            </div>

    
          </div>

          
          <Link className="btn" to="/blogs/entire-article-collections">
            See All Articles
            <svg
              className="btn-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 16 4-4-4-4m6 8 4-4-4-4"
              />
            </svg>
          </Link>
        </section>
      </div >
    </div >
  );
}

export default Events;
