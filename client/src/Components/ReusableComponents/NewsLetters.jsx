import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import SocialButtons from './SocialButtons';

import './GlobalStyles.css';

export function Newsletter() {
  return (
    // css in app.css
    <div className="newsletter">
              <label htmlFor="">Enter you email*</label>

      <div className="input">
        <input type="email" placeholder="Enter your email" />
        <button className="navbar-subscribe" type="submit"> {/*style for navbar-subscribe class in navbar.css file*/}
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
        <p className='subscription-desc'>
          Join our mailing list for the latest tech news, career advice, job tips, and learning materials.
          Stay updated with exclusive opportunities like scholarships, job openings, online courses, and special programs.
          Propel your tech journey forward with our valuable resources and insights.
        </p>

        <Newsletter />
        <div className="newLetterCircle">
          <p>Unlock Exclusive Content!</p>
        </div>
        <div className="social-media-links">
         <SocialButtons />
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
