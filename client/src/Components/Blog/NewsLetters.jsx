import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';

import './NewsLetters.css';
import { FaSquareXTwitter } from 'react-icons/fa6';

export function Newsletter() {
    return (
        <div className="newsletter">
            <div className="input">
                <input type="email" placeholder="Enter your email" />
                <button className="navbar-subscribe" type="submit">
                 Subscribe
                </button>
            </div>
        </div>
    );
}

function NewsLetters() {
    return (
        <section className='News-letters'>
            <div className="news-letter-contents">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaEnvelope style={{ marginRight: '8px' }} /> {/* Adjust margin as needed */}
                    <p style={{ margin: 0 }}>
                    Subscribe to our newsletter
                    </p>
                </div>
            

                <h1>Stay Updated with TechGuide Hub</h1>
                <p className='subscription-desc'> Join our mailing list to receive the latest tech news, insights, and tips
                    directly in your inbox. Our newsletter covers a wide range of topics including
                    career advice, professional insights, job tips, learning materials, and more from the tech world.</p>
                <Newsletter />
                <div className="newLetterCircle">
                <p>Unlock Exclusive Content!</p>
                </div>
                <div className="social-media-links">
                    <div className="social-btns">
              <div className="social">
                <a className="social-btn facebook" href="#">
                  <FaFacebookSquare />
                </a>
              </div>
              <div className="social">
                <a className="social-btn twitter" href="#">
                  <FaSquareXTwitter />
                </a>
              </div>
              <div className="social">
                <a className="social-btn whatsapp" href="#">
                  <FaWhatsappSquare />
                </a>
              </div>
              <div className="social">
                <a className="social-btn linkedin" href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
                </div>
                <div className="testimonials">
                    <h3>What our subscribers say</h3>
                    <blockquote>"TechGuide Hub keeps me informed with the latest trends and technologies. Highly recommend!" - Jane Doe</blockquote>
                    <blockquote>"A must-have resource for any tech enthusiast. The newsletters are insightful and well-curated." - John Smith</blockquote>
                </div>
            </div>
            <div className="newsletter-img">
                <img src="/Default_person_who_subscribe_just_person_2.jpg" alt="newsletter" />
            </div>
        </section>
    );
}

export default NewsLetters;
