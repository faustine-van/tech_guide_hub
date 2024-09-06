import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css';




const ContactUs = () => {
    return (
        <div className="ContactUs-container">
            {/* hero banners from AboutUs components */}
            <div className="about-hero-banner">
                <div className="main-container">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="contact-us">


                <div className="contact-info">
                    <h2>Get in Touch with Us</h2>
                    <p>
                        Welcome to SKILL, your go-to platform for all things education, career, and development.
                        We’re here to help you find the best opportunities to enhance your skills and achieve your goals.
                        If you have any questions, comments, or suggestions, please don’t hesitate to contact us.        </p>
                    <div className="contact-methods">
                        <div className="contact-card">
                            <FaPhone className="contact-icon" />
                            <div className="contact-details">
                                <h3>Call Us</h3>
                                <Link href="tel:+1234567890" className="contact-link">+123 456 7890</Link>
                            </div>
                        </div>
                        <div className="contact-card">
                            <FaEnvelope className="contact-icon" />
                            <div className="contact-details">
                                <h3>Email Us</h3>
                                <Link href="mailto:info@example.com" className="contact-link">info@example.com</Link>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form action="#" method="post">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>

                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>


                </div>
                <div className="contact-img">
                    <img src="/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg" alt="Happy Community" />
                </div>
            </div>
        </div>

    );
};


export default ContactUs;

// css in Contact Us css
export function ContactSupport() {
    return (
      <div className='contactSupport'>
        <div className="contact-support-banner">
          <div className="contact-support-overlay"></div>
          <div className="contactSupport-content">
            <h1>Contact Us for Support</h1>
            <p>
              If you have any questions or need help navigating our platform, feel free to contact us.
              Our dedicated team is here to provide you with information, guidance, or feedback.
              Contact us via email or phone or visit our website—we’re always ready to help!
            </p>
            <Link to="contact-us" className="btn-get-started">Contact us</Link>
          </div>
        </div>
      </div>
    );
}
