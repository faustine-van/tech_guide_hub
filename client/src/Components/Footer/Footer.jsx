import React from "react";
import { Newsletter } from "../ReusableComponents/NewsLetters";
import SocialButtons from "../ReusableComponents/SocialButtons";

import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="social-logo-containers">
          <div className="footer-logo-container">
            <img
              src="/Default_The_SkillQuanta_logo_exudes_quality_and_precision_with_0-removebg-preview.png"
              alt="TechGuide Hub Logo"
              height="50"
            />
            <h2 className="logo-text">SkillQuanta</h2>
          </div>
          <div className="footer-social-media">
            {/* <!-- Social media icons --> */}
            <h3>Follow us</h3>
            <SocialButtons />

          </div>
        </div>

        <div className="footer-links">
          <h3>Menu</h3>
          <Link to='/' className="footer-link">
            Home
          </Link>
          <Link to='/about-us' className="footer-link" href="#about">
            About Us
          </Link>
          
          <Link to='/events' className="footer-link" href="#events">
            Events
          </Link>
          <Link  to ='/blogs/entire-article-collections' className="footer-link" href="#blog">
            Blog
          </Link>
        
        </div>
        <div className="footer-links">
          <h3>Opportunities</h3>

          <Link className="footer-link" href="#">
            Scholarships
          </Link>
          <Link className="footer-link" href="#">
            Jobs
          </Link>
          <Link className="footer-link" href="#">
            Online Courses
          </Link>
          <Link className="footer-link" href="#">
            Events
          </Link>
          <Link className="footer-link" href="#">
            Internships
          </Link>
          <Link className="footer-link">Mentorship Programs</Link>
        </div>
        <div className="footer-newsletter">
          <h2>Stay Updated with TechGuide Hub</h2>
          <p>Subscribe to our newsletter</p>
          <Newsletter />
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 TechGuide Hub. All rights reserved.</p>
        <div className="footer-securty-menu">
          <div className="footer-menu-column">
            <Link className="footer-link" href="#1">
              Terms of use
            </Link>
            <Link className="footer-link" href="#2">
              Privacy policy
            </Link>
            <Link className="footer-link" href="#2">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
