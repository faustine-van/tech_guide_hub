import React from 'react';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
        <div className="about-section">
        <Introduction />
      <OurStory />
      <MissionVisionValues />
      <MeetTheTeam />
      <OurCommunity />
      <OurPartners />
      <OurImpact />
      <JoinUs />
      <ContactInformation />
        </div>
    </div>
  );
};

const Introduction = () => (
  <section className="about-intro">
    <h1>Welcome to TechGuide Hub</h1>
    <p>Your Ultimate Resource for Career Development and Skill Building.</p>
    <p>Explore Resources | Join Now</p>
  </section>
);

const OurStory = () => (
  <section className="our-story">
    <h2>Our Story</h2>
    <p>TechGuide Hub was founded in [Year] by [Founders' Names] with a vision to bridge the gap between education and career success. Our journey began with a simple idea: to create a platform that provides students and aspiring developers with the tools and resources they need to succeed. Over the years, we have grown into a thriving community dedicated to helping individuals navigate their career paths and academic journeys.</p>
  </section>
);

const MissionVisionValues = () => (
  <section className="mission-vision-values">
    <h2>Our Mission, Vision, and Values</h2>
    <h3>Mission</h3>
    <p>To empower individuals with the knowledge, skills, and opportunities they need to succeed in their careers and academics.</p>
    <h3>Vision</h3>
    <p>To become the leading platform for career development and academic support, fostering a community of lifelong learners and professionals.</p>
    <h3>Values</h3>
    <ul>
      <li><strong>Integrity:</strong> We believe in honesty and transparency in all our interactions.</li>
      <li><strong>Collaboration:</strong> We value the power of working together to achieve common goals.</li>
      <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
      <li><strong>Innovation:</strong> We embrace change and encourage creativity and innovation.</li>
    </ul>
  </section>
);

const MeetTheTeam = () => (
  <section className="meet-the-team">
    <h2>Meet the Team</h2>
    <div className="team-member">
      <h3>[Founder Name]</h3>
      <p>Co-Founder & CEO</p>
    </div>
    <div className="team-member">
      <h3>[Founder Name]</h3>
      <p>Co-Founder & CTO</p>
    </div>
    <div className="team-member">
      <h3>[Team Member Name]</h3>
      <p>[Role]</p>
    </div>
  </section>
);

const OurCommunity = () => (
  <section className="our-community">
    <h2>Our Community</h2>
    <p>We serve a diverse community of students, tech enthusiasts, job seekers, and developers. Our platform is designed to provide personalized support and resources to help each member achieve their unique goals.</p>
    <blockquote>"TechGuide Hub helped me land my dream internship!" – [User Name]</blockquote>
    <blockquote>"The resume builder and career advice blog were invaluable during my job search." – [User Name]</blockquote>
  </section>
);

const OurPartners = () => (
  <section className="our-partners">
    <h2>Our Partners</h2>
    <div className="partner">
      <h3>[Partner Organization]</h3>
      <p>[Brief description]</p>
    </div>
    <div className="partner">
      <h3>[Partner Organization]</h3>
      <p>[Brief description]</p>
    </div>
  </section>
);

const OurImpact = () => (
  <section className="our-impact">
    <h2>Our Impact</h2>
    <ul>
      <li><strong>10,000+</strong> users served</li>
      <li><strong>500+</strong> jobs secured through our platform</li>
      <li><strong>1,000+</strong> courses completed</li>
      <li><strong>300+</strong> success stories shared</li>
    </ul>
  </section>
);

const JoinUs = () => (
  <section className="join-us">
    <h2>Join Us</h2>
    <p>Interested in joining our team? Check out our career opportunities and see how you can contribute to TechGuide Hub. We are always looking for passionate individuals to help us grow and make a difference.</p>
  </section>
);

const ContactInformation = () => (
  <section className="contact-information">
    <h2>Contact Information</h2>
    <p>Have questions or want to get in touch? Contact us at:</p>
    <p><strong>Email:</strong> contact@techguidehub.com</p>
    <p><strong>Phone:</strong> +123-456-7890</p>
    <p><strong>Address:</strong> 123 TechGuide St., City, Country</p>
    <div className="social-media">
      <a href="https://facebook.com/techguidehub">Facebook</a>
      <a href="https://twitter.com/techguidehub">Twitter</a>
      <a href="https://linkedin.com/company/techguidehub">LinkedIn</a>
    </div>
  </section>
);

export default AboutUs;
