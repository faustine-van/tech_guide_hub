import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Banner */}
      <div className="about-hero-banner">
        <div className="main-container">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="content-section">
        <div className="main-container">
          <div className="flex-grid">
            <div className="flex-item">
              <h2>Unlock Your Potential</h2>
              <p>Empowering Your Career Journey</p>

              <p>
              SkillQuanta is dedicated to providing a comprehensive platform for career development.
              We offer a wide range of resources, including scholarships, job opportunities, online courses, events, internships, and mentorship programs.
              Our blog section features insightful articles on career tips, professional advice, and inspiring developer stories.
              Our user-friendly website is designed to engage users and help them discover valuable content to enhance their career paths.
              </p>
              <ul className="feature-list">
                <li>Expert Guidance</li>
                <li>24/7 Support</li>
              </ul>
              <p>At SkillQuanta, we are committed to empowering individuals on their career journeys.
                Our platform offers a variety of resources, including scholarships, job listings, online courses, events, internships, and mentorship programs.
                Through our blog section, users can access valuable insights on career development, job advice, and learning materials.
                With a focus on user engagement and content discovery, our responsive website aims to support individuals in achieving their professional goals.
              </p>
            </div>
            <div className="flex-item">
              <img src="/Default_online_course_program_image_1.jpg" alt="Conference" />
              <img src="/Default_developer_or_tech_entusiast_3.jpg" alt="Study" />
            </div>
          </div>
        </div>
      </div>


      {/* Meet the Team and Community Section */}
      <div className="about-part3">
        <div className="main-container">
          <section className="meet-the-team">
            <h2>Meet the Team</h2>
            <div className="team-members">
              <div className="team-member">
                <img src="/team-member-1.jpg" alt="Van Belle" />
                <h3>Van Belle</h3>
                <p>Co-Founder & CEO</p>
              </div>
              <div className="team-member">
                <img src="/team-member-2.jpg" alt="John David" />
                <h3>John David</h3>
                <p>Co-Founder & CTO</p>
              </div>
              <div className="team-member">
                <img src="/team-member-3.jpg" alt="Lea Emus" />
                <h3>Lea Emus</h3>
                <p>[Role]</p>
              </div>
              <div className="team-member">
                <img src="/team-member-4.jpg" alt="Leonel Perry" />
                <h3>Leonel Perry</h3>
                <p>[Role]</p>
              </div>
            </div>
          </section>
          <section className="our-community">
            <div className="testimonial">
            <h2>Our Community</h2>
            <p>
              We serve a diverse community of students, tech enthusiasts, job seekers, and developers. Our platform is designed to provide personalized support and resources to help each member achieve their unique goals.
            </p>
            <blockquote>"TechGuide Hub helped me land my dream internship!" – [User Name]</blockquote>
            <blockquote>"The resume builder and career advice blog were invaluable during my job search." – [User Name]</blockquote>
            </div>
            <div className='testimonial-img'>
            <img src="/Default_A_professional_background_image_showcasing_a_modern_of_2.jpg" alt="Happy Cummunity" />

            </div>
           
          </section>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="achievement-stats">
        <div className="main-container">
          <div className="flex-grid">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Awards Winning</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Our Equipments</p>
            </div>
            <div className="stat-card">
              <h3>250+</h3>
              <p>Field Expertise</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Locations</p>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default AboutUs;
