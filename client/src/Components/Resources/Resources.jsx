import React from 'react';
import { Link } from 'react-router-dom';
import SSlider from '../Home/SlideShow';
import { ContactSupport } from '../AboutUs/ContactUs';
import './Resources.css';
import SearchBar from '../ReusableComponents/SearchBar';
import { CiLocationOn } from 'react-icons/ci';

function Resources() {
    return (
        <div className="resources-page">
            <SSlider />
            <div className="resources">
                <section className="resources-section">
                    <h2>Explore Our Resources</h2>
                    <p>Find various opportunities to enhance your career, gain new skills, and connect with professionals in your field.</p>
                    <SearchBar />
                </section>
                <section className="listen-section">
                    <h1>Listen</h1>
                    <img
                        src="/listen.jpg"
                        alt="Listen Banner"
                        className="listen-banner"
                    />
                    <div className="listen-content">
                        <p>Enhance Your Skills</p>
                        <Link to="/events/1" className="listen-link btn">Explore more</Link>
                    </div>
                </section>

                <section className="career-resources">
                    <h2>Career Resources</h2>
                    <div className="career-grid">
                        <div className="career-item">
                            <h3>Resume Templates</h3>
                            <p>Download professional resume templates for tech roles</p>
                            <Link to="/resume-templates">View Templates</Link>
                        </div>
                        <div className="career-item">
                            <h3>Interview Prep</h3>
                            <p>Tips and tricks for acing your tech interviews</p>
                            <Link to="/interview-prep">Learn More</Link>
                        </div>
                        <div className="career-item">
                            <h3>Job Board</h3>
                            <p>Explore the latest tech job openings</p>
                            <Link to="/job-board">View Jobs</Link>
                        </div>
                    </div>
                </section>

                <section className="mentorship-program">
                    <h2>Mentorship Program</h2>
                    <div className="mentorship-content">
                        <p>Connect with experienced professionals in your field</p>
                        <div className="mentorship-buttons">
                            <Link to='/resources/1' className="find-mentor-btn">Find a Mentor</Link>
                            <Link to='/profile/2' className="become-mentor-btn">Become a Mentor</Link>
                        </div>
                    </div>
                </section>

                <section className="community-forum-section">
                    <h2>Join the Discussion</h2>

                    <div className="community-forum-content">
                        <p>Connect with other learners and professionals in our community forum. Share knowledge, ask questions, and find support.</p>
                        <Link to="/forum" className="btn-forum">Visit Forum</Link>
                    </div>

                </section>
            </div >


            <ContactSupport />
        </div >
    );
}

export default Resources;