import React from "react";
import { FaBriefcase, FaTools, FaBook } from "react-icons/fa";

import SSlider from "./SlideShow";
import SponsorCard from "./SponsorCard";
import { Articles } from "../Blog/RecentArticles";
import "./MainPage.css";

import { Link } from "react-router-dom";

function MainPage() {
  
  const sponsors = [
    {
      name: "Platinum Sponsor",
      logo: "/pngwing.com.png",
      link: "https://platinumsponsor.com",
    },
    {
      name: "Gold Sponsor",
      logo: "/techguide-logo.png",
      link: "https://goldsponsor.com",
    },
    {
      name: "Silver Sponsor",
      logo: "/silver-badge-awards.png",
      link: "https://silversponsor.com",
    },
    {
      name: "Silver Sponsor",
      logo: "/google spondor.png",
      link: "https://silversponsor.com",
    },
    {
      name: "Silver Sponsor",
      logo: "/pepsl.png",
      link: "https://silversponsor.com",
    },
    
    
  ];

  return (
    <div className="homepage">
      <div className="slide-show">
        <SSlider />
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

      <div className="sponsors-container">
        {/* <h2>Our Sponsors</h2> */}
        <div className="sponsors">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              name={sponsor.name}
              logo={sponsor.logo}
              link={sponsor.link}
            />
          ))}
        </div>
      </div>

      {/* <div className="event-containers">
        <div className="events-section">
          <h2 className="event-head">Upcoming events</h2>
          <div className="events">
            <div class="event">
              <div class="event-header">
                <h3>Annual Tech Conference 2024</h3>
                <p>June 30, 2024 | Silicon Valley, CA</p>
              </div>
              <img
                src="/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg"
                alt="Event Image"
                class="event-img"
              />
              <div class="event-description">
                <p>
                  Join us for the Annual Tech Conference 2024, where industry
                  leaders and tech enthusiasts come together to explore the
                  latest trends and innovations in technology. The event will
                  feature keynote speeches, panel discussions, and networking
                  opportunities.
                </p>
              </div>
              <a href="#" class="cta-button">
                Register Now
              </a>
              <div class="contact-info">
                <p>
                  For more information, contact us at{" "}
                  <a href="mailto:info@techconference.com">
                    info@techconference.com
                  </a>
                </p>
              </div>
            </div>
            <div class="event">
              <div class="event-header">
                <h3>Annual Tech Conference 2024</h3>
                <p>June 30, 2024 | Silicon Valley, CA</p>
              </div>
              <img
                src="/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg"
                alt="Event Image"
                class="event-img"
              />
              <div class="event-description">
                <p>
                  Join us for the Annual Tech Conference 2024, where industry
                  leaders and tech enthusiasts come together to explore the
                  latest trends and innovations in technology. The event will
                  feature keynote speeches, panel discussions, and networking
                  opportunities.
                </p>
              </div>
              <a href="#" class="cta-button">
                Register Now
              </a>
              <div class="contact-info">
                <p>
                  For more information, contact us at{" "}
                  <a href="mailto:info@techconference.com">
                    info@techconference.com
                  </a>
                </p>
              </div>
            </div>
            <div class="event">
              <div class="event-header">
                <h3>Annual Tech Conference 2024</h3>
                <p>June 30, 2024 | Silicon Valley, CA</p>
              </div>
              <img
                src="/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg"
                alt="Event Image"
                class="event-img"
              />
              <div class="event-description">
                <p>
                  Join us for the Annual Tech Conference 2024, where industry
                  leaders and tech enthusiasts come together to explore the
                  latest trends and innovations in technology. The event will
                  feature keynote speeches, panel discussions, and networking
                  opportunities.
                </p>
              </div>
              <a href="#" class="cta-button">
                Register Now
              </a>
              <div class="contact-info">
                <p>
                  For more information, contact us at{" "}
                  <a href="mailto:info@techconference.com">
                    info@techconference.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <Link className="btn" href="#">
            See All Events
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
      </div> */}

      <div className="articles-container">
        <div className="articles-section">
          <h2>Latest articles</h2>
          <p>
          Check out the most recent posts on our blog.
            Hear from people's experience who have achieved their career and
            academic goals with the help of TechGuide Hub. Get inspired by their
            journeys and start your own success story today.
          </p>
          <Articles />
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
        </div>
      </div>
    </div>
  );
}

export default MainPage;
