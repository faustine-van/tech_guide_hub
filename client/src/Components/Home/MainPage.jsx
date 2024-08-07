import React from "react";
import { FaBriefcase, FaTools, FaBook, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";


import SSlider from "./SlideShow";
import SponsorCard from "./SponsorCard";
import { Articles } from "../Blog/RecentArticles";
import NewsLetters from "../ReusableComponents/NewsLetters";

import "./MainPage.css";


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
      <SSlider />

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
                  <FaBriefcase className="about-icon" />
                  Career and Skill Development
                </h3>
                <p>
                  Access articles on job and internship listings, get tips on
                  resume building, and read insightful career advice from
                  industry professionals.
                </p>
              </div>
              <div>
                <h3>
                  <FaBook className="about-icon" />
                  Academic Support
                </h3>
                <p>
                  Find articles on study resources, tutoring services, and
                  academic tips to excel in your studies.
                </p>
              </div>

              <div>
                <h3>
                  <FaGift className="about-icon" />
                  Opportunities
                </h3>
                <p>
                  Discover exclusive opportunities such as scholarships, job
                  openings, online courses, Mentorship program and special
                  programs designed to help you advance your career and achieve
                  your goals.
                </p>
              </div>
            </div>
            <div className="explore-button-container">
              <Link to='/about-us' className="explore-button">
                Explore More About TechGuide Hub
              </Link>
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
      <div className="Blog-containers">
        <NewsLetters />
      </div>

      <div className="articles-container">
        <div className="articles-section">
          <h2>Latest articles</h2>
          <p>
            Check out the most recent posts on our blog. Hear from people's
            experience who have achieved their career and academic goals with
            the help of TechGuide Hub. Get inspired by their journeys and start
            your own success story today.
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
