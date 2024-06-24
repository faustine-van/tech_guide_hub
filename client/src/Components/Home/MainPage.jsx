import React from "react";
import { FaBriefcase, FaTools, FaBook } from "react-icons/fa";

import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to TechGuide Hub</h1>
          <p>
            Your Ultimate Resource for Career Development and Academic Success
          </p>
          <div className="btns">
            <Link className="btn">Explore Opportunities</Link>
            <Link className="btn">Join a Workshop</Link>
            <Link className="btn">Read Articles</Link>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="intro-section">
          <div className="about-content">
            <h2>About TechGuide Hub</h2>
            <p>
              Welcome to TechGuide Hub, your one-stop platform for career
              development, academic support, and opportunities in the tech
              industry. Our mission is to empower students and tech enthusiasts
              by providing comprehensive resources, and expert advice.
            </p>
            <div className="highlights">
              <div>
                <h3>
                  {" "}
                  <FaBriefcase className="about-icon" />
                  Career Development
                </h3>
                <p>
                  Access job and internship listings, receive guidance on resume
                  building, and read insightful career advice from industry
                  professionals.
                </p>
              </div>
              <div>
                <h3>
                  <FaTools className="about-icon" />
                  Skill Development
                </h3>
                <p>
                  Enhance your skills with our extensive library of learning
                  resources, including tutorials, coding challenges, and online
                  courses.
                </p>
              </div>
              <div>
                <h3>
                  <FaBook className="about-icon" />
                  Academic Support
                </h3>
                <p>
                  Find study resources, tutoring services, and academic tips to
                  excel in your studies.
                </p>
              </div>
            </div>
          </div>
          <div className="about-img">
            <img src="/about-img.png" alt="about" />
          </div>
        </div>
      </div>

      <div className="opportunities-containers">
        <div className="featured-opportunities-section">
          <h2>Latest Opportunities</h2>
          <p>
            {" "}
            Stay ahead of the curve with our curated listings of the latest
            scholarships, jobs, online courses, and programs. Discover
            opportunities that align with your career goals and academic
            interests.
          </p>
          <div class="opportunities">
            <div class="opportunity">
              <img
                src="/Default_online_course_program_image_1.jpg"
                alt="Scholarship"
              />
              <h3>Scholarship</h3>
              <p>
                Apply for our annual scholarship program to get financial
                support for your studies.
              </p>
              <a href="scholarship-application.html" className="read-more">
                Learn more
              </a>
            </div>
            <div class="opportunity">
              <img
                src="/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg"
                alt="Scholarship"
              />
              <h3>Online courses</h3>
              <p>
                Enhance your skills with our comprehensive online courses
                available in various domains.
              </p>
              <a href="scholarship-application.html" className="read-more">
                Learn more
              </a>
            </div>
            <div class="opportunity">
              <img
                src="/Default_online_course_program_image_1.jpg"
                alt="Scholarship"
              />
              <h3>Events</h3>
              <p>
                Join our upcoming events and webinars to network and learn from
                industry experts.
              </p>
              <a href="scholarship-application.html" className="read-more">
                Learn more
              </a>
            </div>
            <div class="opportunity">
              <img
                src="/Default_online_course_program_image_1.jpg"
                alt="Scholarship"
              />
              <h3>Mentorship program</h3>
              <p>
                Get guidance from experienced professionals through our
                mentorship program.
              </p>
              <a href="scholarship-application.html" className="read-more">
                Learn more
              </a>
            </div>
          </div>
          <Link className="btn">View All Opportunities</Link>
        </div>
      </div>

      <div className="articles-container">
        <div className="articles-section">
          <h2>Latest articles</h2>
          <p>
            Hear from our community members who have achieved their career and
            academic goals with the help of TechGuide Hub. Get inspired by their
            journeys and start your own success story today.
          </p>
          <div className="articles">
            <div className="card-article">
              <div className="article-img">
                <img
                  src="/Default_look_good_3.jpg"
                  className="card-img"
                  alt=" article img"
                />
                <small className="tag">Career</small>
              </div>
              <div className="artcles-content">
                <h3 className="card-title">Article Title 1</h3>
                <p className="card-description">
                  This is a brief description of the article. It provides a
                  quick summary to catch the reader's interest.
                </p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
            <div className="card-article">
              <div className="article-img">
                <img
                  src="/Default_look_good_3.jpg"
                  className="card-img"
                  alt=" article img"
                />
                <small className="tag">Career</small>
              </div>
              <div className="artcles-content">
                <h3 className="card-title">Article Title 1</h3>
                <p className="card-description">
                  This is a brief description of the article. It provides a
                  quick summary to catch the reader's interest.
                </p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>

            <div className="card-article">
              <div className="article-img">
                <img
                  src="/Default_look_good_3.jpg"
                  className="card-img"
                  alt=" article img"
                />
                <small className="tag">Career</small>
              </div>
              <div className="artcles-content">
                <h3 className="card-title">Article Title 1</h3>
                <p className="card-description">
                  This is a brief description of the article. It provides a
                  quick summary to catch the reader's interest.
                </p>
                <Link href="#" className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <Link className="btn">
            See All Articles{" "}
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
        </div>
      </div>
    </div>
  );
}

export default MainPage;
