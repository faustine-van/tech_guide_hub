import React from 'react';
import { FaBook, FaAirbnb, FaArrowAltCircleDown, FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";


import SocialButtons from '../ReusableComponents/SocialButtons';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-section">
        <div className="about-part1">
          <div className='intro'>
            <div className="about-intro-story">
              <section className="about-intro">
                <h1>Welcome to TechGuide Hub</h1>
                <p>Your Ultimate Resource for Career Development and Skill Building.</p>
                <div className="explore-button-container">
                  <Link className="explore-button">
                    Explore Resources | Join Now
                  </Link>
                </div>
              </section>
              <section className="our-story">
                <h2> Our Story</h2>
                <p>TechGuide Hub was founded in [Year] by [Founders' Names] with a vision to bridge the gap between education and career success. Our journey began with a simple idea: to create a platform that provides students and aspiring developers with the tools and resources they need to succeed. Over the years, we have grown into a thriving community dedicated to helping individuals navigate their career paths and academic journeys.</p>
              </section>
            </div>
            <div className="about-intro-img">
              <img src="./Default_blog_websites_contain_blue_color_articles_2.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="about-part2">
          <div className='mission-section'>
            <section className="mission-vision-values">
              <h2>Our Mission, Vision, and Values</h2>
              <h3>Mission</h3>
              <p>To empower individuals with the knowledge, skills, and opportunities they need to succeed in their careers and academics.</p>
              <h3>Vision</h3>
              <p>To become the leading platform for career development and academic support, fostering a community of lifelong learners and professionals.</p>

            </section>
            <div className="mission-img">
              <img src="./mission.png" width='500px' alt="400px" srcset="" />
            </div>
          </div>
          <div className='mission-values'>
          <h3>Values</h3>

              <div className="values">
                <div className="value">
                <img src="/integrity.png" width='100px' height='100px' alt="" />

                  <h4>Integrity</h4>
                  <p>We believe in honesty and transparency in all our interactions.</p>
                </div>
                <div className="value">
                <img src="/collaboration.png" width='100px' height='100px' alt="" />

                  <h4>Collaboration</h4>
                  <p>We value the power of working together to achieve common goals.</p>
                </div>
                <div className="value">
                <img src="/excellence.png" width='100px' height='100px' alt="" />

                  <h4>Excellence</h4>
                  <p>We strive for the highest standards in everything we do.</p>
                </div>
                <div className="value">
                  <img src="/innovation.png" width='100px' height='100px' alt="" />
                  <h4>Innovation</h4>
                  <p>We embrace change and encourage creativity and innovation.</p>
                </div>
                </div>

          </div>


        </div>
        <div className="about-part3">

          <div className="communities">
            <section className="meet-the-team">
              <h2>Meet the Team</h2>
              <div className="team-members">
                <div className="team-member">
                  <img src="/team-member-1.jpg" alt="" />
                  <h3>Van belle</h3>
                  <p>Co-Founder & CEO</p>
                </div>
                <div className="team-member">
                  <img src="/team-member-2.jpg" alt="" />

                  <h3>John David</h3>
                  <p>Co-Founder & CTO</p>
                </div>
                <div className="team-member">
                  <img src="/team-member-3.jpg" alt="" />

                  <h3>Lea Emus</h3>
                  <p>[Role]</p>
                </div>
                <div className="team-member">
                  <img src="/team-member-4.jpg" alt="" />

                  <h3>Leonel Perry</h3>
                  <p>[Role]</p>
                </div>
              </div>

            </section>
            <section className="our-community">
              <h2>Our Community</h2>
              <p>We serve a diverse community of students, tech enthusiasts, job seekers, and developers. Our platform is designed to provide personalized support and resources to help each member achieve their unique goals.</p>
              <blockquote>"TechGuide Hub helped me land my dream internship!" – [User Name]</blockquote>
              <blockquote>"The resume builder and career advice blog were invaluable during my job search." – [User Name]</blockquote>
            </section>
          </div>
        </div>
        <div className="about-part4">

          <div className="partner-impact">
            <section className="our-partners">

              <h2>Our Partners</h2>
              <div className="partner">
                <h3>[Partner Organization]</h3>
                <p>Interested in joining our team? Check out our career opportunities and see how you can contribute to TechGuide Hub. We are always looking for passionate individuals to help us grow and make a difference.</p>
              </div>
              <div className="partner">
                <h3>[Partner Organization]</h3>
                <p>Interested in joining our team? Check out our career opportunities and see how you can contribute to TechGuide Hub. We are always looking for passionate individuals to help us grow and make a difference.</p>
              </div>
            </section>
            <section className="our-impact">
              <h2>Our Impact</h2>
              <img src="/analyitics.png" height='300px' width='500px' alt="" />
  
              <ul>
                <li><strong>10,000+</strong> users served</li>
                <li><strong>500+</strong> jobs secured through our platform</li>
                <li><strong>1,000+</strong> courses completed</li>
                <li><strong>300+</strong> success stories shared</li>
              </ul>
            </section>
          </div>
        </div>
        <div className="about-part5">
          <div className="ContactModule">
            <section className="join-us">
              <h2>Join Us <FaArrowAltCircleRight /> </h2>
              <p>Interested in joining our team? Check out our career opportunities and see how you can contribute to TechGuide Hub. We are always looking for passionate individuals to help us grow and make a difference.</p>
            </section>
            <section className="contact-information">
              <h2>Contact Information</h2>
              <p>Have questions or want to get in touch? Reach out to us via:</p>
              <p><strong>Email:</strong> contact@techguidehub.com</p>
              <p><strong>Phone:</strong> +123-456-7890</p>
              <SocialButtons />
            </section>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
