import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLightbulb,
  FaUser,
  FaUsers,
  FaBriefcase,
  FaBook,
  FaTools,
  FaBuilding,
  FaCaretDown,
  FaSearch,
  FaGraduationCap,
  FaDesktop,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  // initialize openNavbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // initializes activeDropdown to null, no dropdown is open by default.
  const [activeDropdown, setActiveDropdown] = useState(null);
  // handling active dropdown
  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src="/techguide-logo.png" alt="TechGuide Hub Logo" height="50" />
        </div>
        <div className={isMenuOpen ? "side-menu open" : "navbar-menu"}>
          <a className="link">Home</a>
          <a className="link about">About Us</a>
          <div className="dropdown link">
            <a
              className="blog"
              onClick={() => handleDropdown("opportunities")}
            >
              Opportunities <FaCaretDown />
            </a>
            {activeDropdown === "opportunities" && (
              <div className="dropdown-content">
                <div className="mega-menu">
                  <div className="mega-menu-column1">
                    <a href="#" className="link">
                      <FaGraduationCap className="icon" /> Scholarships
                    </a>
                    <a href="#" className="link">
                      <FaBriefcase className="icon" /> Jobs
                    </a>
                    <a href="#" className="link">
                      <FaDesktop className="icon" /> Online Courses
                    </a>
                    <a href="#" className="link">
                      <FaCalendarAlt className="icon" /> Events
                    </a>
                    <a className="link">
                      <FaUserFriends className="icon" /> Mentorship Programs
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown link">
            <a href="#" className="" onClick={() => handleDropdown("blog")}>
              Blog <FaCaretDown />
            </a>
            {activeDropdown === "blog" && (
              <div className="dropdown-content">
                <div className="mega-menu">
                  <div className="mega-menu-column">
                    <a href="#1" className="link">
                      {" "}
                      <FaLightbulb className="icon" /> Career Tips{" "}
                    </a>
                    <a href="#2" className="link">
                      {" "}
                      <FaUsers className="icon" />
                      Professional Insights{" "}
                    </a>
                    <a href="#3" className="link">
                      <FaBriefcase className="icon" />
                      Job Advice
                    </a>
                    <a href="#3" className="link">
                      {" "}
                      <FaBook className="icon" /> Learning Materials
                    </a>
                  </div>
                  <div className="mega-menu-column">
                    <a href="#job1" className="link">
                      <FaBuilding className="icon" /> Developer Stories
                    </a>
                    <a href="#job2" className="link">
                      <FaBook className="icon" /> Resources Articles
                    </a>
                    <a href="#job3" className="link">
                      <FaTools className="icon" />
                      Skill Building
                    </a>
                    <a href="#job3" className="link">
                      <FaUser className="icon" />
                      Developer Insights
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a className="link contact">Contact Us</a>
        </div>
      </div>
      <div className="navbar-right">
        <div className="search-icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <FaSearch />
        </div>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? (
            <svg
              className="menu"
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
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          ) : (
            <svg
              className="close"
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
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          )}
        </div>{" "}
        <div className="search-container">
        <div className="search-input-icon">
          <FaSearch />
        </div>
        <input type="text" placeholder="Search articles..." />
        <div className="search-close-icon" onClick={() => setIsSearchOpen(false)}>
          <svg
            className="close-search-icon"
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
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>{" "}
        </div>
      </div>
        
      </div>
    </div>
  );
}

export default Navbar;
