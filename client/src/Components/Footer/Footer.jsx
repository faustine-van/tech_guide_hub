import React from 'react';
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";


import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo-container">
                    <img src="/techguide-white-logo.png" alt="TechGuide Hub Logo" />
                </div>
                <div className="footer-links">
                    <h3>Menu</h3>
                    <a className="footer-link" href="#home">Home</a>
                    <a className="footer-link" href="#about">About Us</a>
                    <a className="footer-link" href="#opportunities">Opportunities</a>
                    <a className="footer-link" href="#events">Events</a>
                    <a className="footer-link" href="#blog">Blog</a>
                    <a className="footer-link" href="#contact">Contact Us</a>
                </div>
                <div className="footer-links">
                    <h3>Opportunities</h3>

                    <a className="footer-link" href="#">
                        Scholarships
                    </a>
                    <a className="footer-link" href="#">
                        Jobs
                    </a>
                    <a className="footer-link" href="#">
                        Online Courses
                    </a>
                    <a className="footer-link" href="#">
                        Events
                    </a>
                    <a className="footer-link" href="#">
                        Internships
                    </a>
                    <a className="footer-link">
                        Mentorship Programs
                    </a>
                </div>
                <div className="footer-newsletter">
                    <div className="newsletter">
                        <h3>Subscribe to our newsletter</h3>
                        <input type="email" placeholder="Enter your email" />
                        <button className='submit' type="submit">Subscribe</button>
                    </div>
                    <div className="footer-social-media">
                        {/* <!-- Social media icons --> */}
                        <div className="social-btns">
                            <div className="social"><a className="social-btn facebook" href="#"><FaFacebookSquare /></a></div>
                            <div className="social"><a className="social-btn twitter" href="#"><FaSquareXTwitter /></a>
                            </div>
                            <div className="social"><a className="social-btn whatsapp" href="#"><FaWhatsappSquare /></a>
                            </div>
                            <div className="social">
                                <a className="social-btn linkedin" href="#"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-copyright">
                <p>&copy; 2024 TechGuide Hub. All rights reserved.</p>
                <div className="footer-securty-menu">
                    <div className="footer-menu-column">
                        <a className="footer-link" href="#1">Terms</a>
                        <a className="footer-link" href="#2">Privacy policy</a>
                        <a className="footer-link" href="#3">Job Advice</a>
                        <a className="footer-link" href="#4">Learning Materials</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;