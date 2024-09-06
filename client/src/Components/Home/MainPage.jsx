import React from "react";
import { FaBriefcase, FaTools, FaBook, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";


import SponsorCard from "./SponsorCard";
import { Articles } from "../Blog/RecentArticles";
import NewsLetters from "../ReusableComponents/NewsLetters";

import "./MainPage.css";
import { ContactSupport } from "../AboutUs/ContactUs";
import FAQ from "../ReusableComponents/FAQ";


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

      <div className="home-hero">
        <div className="home-hero-overlay"></div>
        <div className="home-hero-content">
          <h1>Empower Your Career Journey Today</h1>
          <Link className="btn-get-started">Get Started</Link>


        </div>
      </div>

      <div className="about-container">
        <div className="intro-section">
          <div className="about-content">
            <h2>About SkillQuanta</h2>

            <div className="highlights">
              <h3>
                Our Mission                </h3>
              <div>
                <p>
                  SkillQuanta is a dedicated platform committed to providing comprehensive career development resources to individuals seeking growth and success. We offer a diverse range of opportunities, including scholarships, job placements, online courses, events, internships, and mentorship programs. Our goal is to empower you with the tools and knowledge needed to thrive in your professional journey.
                </p>
              </div>
              <div>

                <p>
                  At SkillQuanta, we believe in fostering a supportive and engaging environment for all our users. Our user-friendly platform is designed to enhance your experience and facilitate easy access to valuable content, ensuring that you can discover and engage with the resources that matter most to you.
                </p>
              </div>


            </div>
            <Link className="btn" to='about-us'>Explore More</Link>

          </div>
          <div className="about-img">
            <img src="/about-img.png" alt="about" />
          </div>
        </div>
        <div className="potential-unlocked">
          <h1>Unlock Your Potential</h1>
          <div className="left-column">
            <img src="Default_online_course_program_image_1.jpg" alt="Student studying surrounded by books" />
          </div>
          <div className="right-column">
            <p>Unlock your potential with our career development program, providing expert guidance and mentorship to help you achieve your professional goals.</p>
            <ul>
              <li>Free Resources</li>
              <li>Expert Guidance</li>
              <li>Personalized Support</li>
            </ul>
            <a href="#" className="btn">More about us</a>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">250+</div>
                <div className="stat-label">Graduated</div>
              </div>
              <div className="stat">
                <div className="stat-number">640+</div>
                <div className="stat-label">School projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">800+</div>
                <div className="stat-label">Applicants</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sponsors-container">
        <p>Supported by:</p>
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
      <div className="research-hub-container">
        <div className="research-hub">
          <div className="header">
            <h1>Research Hub</h1>
            <p>In-Depth Insights Await</p>
          </div>
          <div className="content">
            <div className="section">
              <img src="Default_tech_world_and_navbar_and_sidebar_1.jpg" alt="Scholarships" />
              <h2>Scholarships</h2>
              <p>Explore various scholarship opportunities to support your educational journey and lessen financial burdens.
                Our curated list includes scholarships for different fields of study and eligibility criteria, helping you find the right fit.
              </p>
              <Link class="read-more-button">Read More</Link>

            </div>
            <div className="section">
              <img src="Default_blog_websites_contain_blue_2.jpg" alt="Internships" />
              <h2>Internships</h2>
              <p>Discover a range of internship programs designed to provide practical experience and skill development in your chosen field.
                From prestigious companies to startups, these opportunities can kickstart your career journey.</p>
                <Link class="read-more-button">Read More</Link>

            </div>
            <div className="section">
              <img src="Default_blog_websites_contain_blue_color_articles_2.jpg" alt="Jobs" />
              <h2>Jobs</h2>
              <p>Access a wide array of job listings in the tech industry, from entry-level positions to senior roles.
                Stay informed about the latest job openings and enhance your career prospects through our job portal.</p>
                <Link class="read-more-button">Read More</Link>

            </div>
            <Link className="btn" to="/blogs/entire-article-collections">
            Explore More
          </Link>

          </div>
          
        </div>
      </div>





      <div className="articles-container">
        <div className="articles-section">
          <h2>Latest articles</h2>

          <Articles />
          <Link className="btn" to="/blogs/entire-article-collections">
            Explore artcles
          </Link>
        </div>
      </div>
      <FAQ />
      <div className="NewsLettter-container">
        <NewsLetters />
      </div>
      <ContactSupport />
    </div>
  );
}

export default MainPage;
