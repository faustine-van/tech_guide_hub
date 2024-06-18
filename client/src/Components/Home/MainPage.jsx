import React from 'react';

import './MainPage.css'
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className="homepage">
            <div class="hero-section">
                <div className="hero-content">
                    <h1>Welcome to TechGuide Hub</h1>
                    <p>Your Ultimate Resource for Career Development and Academic Success</p>
                    <div className="btns">
                        <Link className='btn'>Explore Opportunities</Link>
                        <Link className='btn'>Join a Workshop</Link>
                        <Link className='btn'>Read Articles</Link>
                    </div>
                </div>
            </div>

            <div class="introduction-section">
                <h2>About TechGuide Hub</h2>
                <p>TechGuide Hub is your one-stop platform designed to empower students and tech enthusiasts in their journey toward career success and academic excellence. Whether you're seeking job opportunities, aiming to enhance your skills, or looking for academic support, TechGuide Hub provides the resources, guidance, and community you need to thrive."
                </p>
            </div>

            <div class="featured-opportunities-section">
                <h2>Latest Opportunities</h2>
                pStay ahead of the curve with our curated listings of the latest scholarships, jobs, online courses, and programs. Discover opportunities that align with your career goals and academic interests.
                {/* <!-- Grid or carousel of opportunities --> */}
                <Link className='btn'>View All Opportunities</Link>
            </div>

            <div class="upcoming-events-section">
                <h2>Upcoming Events</h2>
                <p>Don't miss out on our exciting events and webinars designed to boost your knowledge and skills. Join industry experts and fellow enthusiasts in our interactive sessions.</p>
                {/* <!-- List or carousel of events --> */}
                <Link className='btn'>See All Events</Link>
            </div>

            <div class="career-advice-section">
                <h2>Career Advice</h2>
                {/* <!-- Blog post previews --> */}
                <p>Navigate your career path with confidence. Explore our comprehensive blog posts and articles offering tips on job searching, resume building, interview preparation, and more.</p>
                <Link className='btn'>Read More</Link>
            </div>

            <div class="success-stories-section">
                <h2>Success Stories</h2>
                <p>Hear from our community members who have achieved their career and academic goals with the help of TechGuide Hub. Get inspired by their journeys and start your own success story today.</p>
                {/* <!-- Testimonials or case studies --> */}
            </div>

            <div class="join-community-section">
                <h2>Join Our Community</h2>
                <p>Become a part of the TechGuide Hub community to access exclusive resources, participate in discussions, and connect with mentors and peers. Together, we can achieve more.</p>
                <Link className='btn'>Sign Up Now</Link>
            </div>
        </div>
    );
}

export default MainPage;