import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <div className="logo-container">
                    <img src="/techguide-logo.png" alt="TechGuide Hub Logo" height="50" />
                </div>
                <div className="navbar-menu">
                    <a className="">Home</a>
                    <a className="about">About Us</a>
                    <a className="blog">Blog</a>
                    <a className="events">Events</a>
                    <a className="resources">Resources</a>
                    <a className="mentorship">Mentorship Programs</a>
                    <a className="contact">Contact Us</a>
                </div>
            </div>
            <div className='navbar-right'>
                <div className="search-container">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="profile-container">
                    <img src="/profile-icon.png" alt="User Profile" height="30" />
                    <div className="profile-dropdown">
                        <a className="profile">My Account</a>
                        <a className="login">Login</a>
                        <a className="signup">Sign Up</a>
                        <a className="logout">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
