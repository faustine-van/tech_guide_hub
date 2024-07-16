import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
  FaArchive,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  // initialize openNavbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  // initializes activeDropdown to null, no dropdown is open by default.
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleLinkClick = () => {
    setActiveDropdown(false);
  };
  
  // handling active dropdown
  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo-container">
            <Link to='/'>
            <img
              src="/Default_The_SkillQuanta_logo_exudes_quality_and_precision_with_0-removebg-preview.png"
              alt="TechGuide Hub Logo"
              height="50"
            />
            </Link>
            <h2 className="logo-text">SkillQuanta</h2>
          </div>
          <div className={isMenuOpen ? "side-menu open" : "navbar-menu"}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Home
            </NavLink>
            <Link to='/about-us' className="link about">About Us</Link>
            <div className="dropdown link">
              <a
                className="dropdn"
                onClick={() => handleDropdown("opportunities")}
              >
                Opportunities <FaCaretDown />
              </a>
              {activeDropdown === "opportunities" && (
                <div className="dropdown-content">
                  <div className="mega-menu">
                    <div className="mega-menu-column1">
                      <Link to='/scholarships' className="link" onClick={handleLinkClick}>
                        <FaGraduationCap className="icon" /> Scholarships
                      </Link>
                      <a href="#" className="link" onClick={handleLinkClick}>
                        <FaBriefcase className="icon" /> Jobs
                      </a>
                      <a href="#" className="link" onClick={handleLinkClick}>
                        <FaDesktop className="icon" /> Online Courses
                      </a>
                      <Link to='/events' className="link" onClick={handleLinkClick}>
                        <FaCalendarAlt className="icon" /> Events
                      </Link>
                      <a href="#" className="link" onClick={handleLinkClick}>
                        <FaCalendarAlt className="icon" /> Internships
                      </a>
                      <a className="link" onClick={handleLinkClick}>
                        <FaUserFriends className="icon" /> Mentorship Programs
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="dropdown link">
              <a className="dropdn" onClick={() => handleDropdown("blog")}>
                Blog <FaCaretDown />
              </a>
              {activeDropdown === "blog" && (
                <div className="dropdown-content">
                  <div className="mega-menu">
                    <div className="mega-menu-column">
                      <NavLink to="/blogs/entire-article-collections" className="link" onClick={handleLinkClick}>
                        {" "}
                        <FaArchive className="icon" /> Entire Article Collection{" "}
                      </NavLink>
                      <a href="#1" className="link" onClick={handleLinkClick} >
                        {" "}
                        <FaLightbulb className="icon" /> Career Tips{" "}
                      </a>
                      <a href="#2" className="link" onClick={handleLinkClick}>
                        {" "}
                        <FaUsers className="icon" />
                        Professional Insights{" "}
                      </a>
                      <a href="#3" className="link" onClick={handleLinkClick}>
                        <FaBriefcase className="icon" />
                        Job Advice
                      </a>
                      <a href="#3" className="link" onClick={handleLinkClick}>
                        {" "}
                        <FaBook className="icon" /> Learning Materials
                      </a>
                    </div>
                    <div className="mega-menu-column">
                      <a href="#job1" className="link" onClick={handleLinkClick}>
                        <FaBuilding className="icon" /> Developer Stories
                      </a>
                      <a href="#job2" className="link" onClick={handleLinkClick}>
                        <FaBook className="icon" /> Resources Articles
                      </a>
                      <a href="#job3" className="link" onClick={handleLinkClick}>
                        <FaTools className="icon" />
                        Skill Building
                      </a>
                      <a href="#job3" className="link" onClick={handleLinkClick}>
                        <FaUser className="icon" />
                        Developer Insights
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="navbar-right">
       
        
          {/* Search icon visibility controlled by isSearchOpen state */}
          {!isSearchOpen && (
            <div className="search-icon" onClick={toggleSearch}>
              <FaSearch className="icon" />
            </div>
          )}
           <button className="navbar-subscribe" type="submit" >
            Subscribe               
          </button>
          <div
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
                  strokeLinecap="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            )}
          </div>{" "}
          {isSearchOpen && (
            <div className="search-container">
              <div className="search-input-icon">
                <FaSearch />
              </div>
              <input type="text" placeholder="Search..." />
              <div className="search-close-icon" onClick={toggleSearch}>
                <svg
                  className="close-search-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
              </div>
            </div>
          )}
           
        </div>

      </div>
    </>
  );
}

export default Navbar;
