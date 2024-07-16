import React from 'react';
import './Scholarships.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUniversity, faMoneyCheckAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function ScholarshipCard({ title, amount, eligibility, link, online, country, fullyFunded, date }) {
    return (
        <div className="scholarship-card">
            <div className="scholarship-header">
                <h3>{title}</h3>
                <p><strong><FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Date:</strong> {date}</p>
            </div>

            <p><strong>Amount:</strong> {amount}</p>
            <p><strong>Eligibility:</strong> {eligibility}</p>
            <div className="scholarship-details">
                <p><strong><FontAwesomeIcon icon={faGlobe} className="icon" /> Online:</strong> {online ? "Yes" : "No"}</p>
                <p><strong><FontAwesomeIcon icon={faUniversity} className="icon" /> Country:</strong> {country}</p>
                <p><strong><FontAwesomeIcon icon={faMoneyCheckAlt} className="icon" /> Fully Funded:</strong> {fullyFunded ? "Yes" : "No"}</p>
            </div>
            <a href={link} className="scholarship-link">Learn More</a>
        </div>
    );
}

function Scholarships() {
    return (
        <div className="scholarship-page">

            <section className="scholarship-intro">
                <h1>Scholarship Opportunities</h1>

                <p className='intro-text'>
                    Welcome to our scholarship page! Here you will find various scholarship opportunities to support your academic journey. Explore the options below and apply for the ones that suit your needs.
                </p>
            </section>
            <div className="scholarship-section">
            <section className="featured-scholarships">
                <h2>Featured Scholarships</h2>
                <div className="schoraships">
                    <ScholarshipCard
                        title="TechGuide Scholarship"
                        amount="$5,000"
                        eligibility="Open to all students pursuing a degree in technology."
                        link="#"
                        online={true}
                        country="USA"
                        fullyFunded={true}
                        date="2024-09-01"

                    />
                    <ScholarshipCard
                        title="TechGuide Scholarship"
                        amount="$5,000"
                        eligibility="Open to all students pursuing a degree in technology."
                        link="#"
                        online={true}
                        country="USA"
                        fullyFunded={true}
                        date="2024-09-01"

                    />
                    <ScholarshipCard
                        title="Women in STEM Scholarship"
                        amount="$10,000"
                        eligibility="Open to female students pursuing a degree in STEM fields."
                        link="#"
                        online={false}
                        country="Canada"
                        fullyFunded={false}
                    />
                </div>

            </section>

            <section className="popular-scholarships">
                <h2>Popular Scholarships</h2>
                <div className="schoraships">
                    <ScholarshipCard
                        title="TechGuide Scholarship"
                        amount="$5,000"
                        eligibility="Open to all students pursuing a degree in technology."
                        link="#"
                        online={true}
                        country="USA"
                        fullyFunded={true}
                        date="2024-09-01"

                    />
                    <ScholarshipCard
                        title="Women in STEM Scholarship"
                        amount="$10,000"
                        eligibility="Open to female students pursuing a degree in STEM fields."
                        link="#"
                        online={false}
                        country="Canada"
                        fullyFunded={false}
                    />
                </div>
            </section>

            <section className="recent-scholarships">
                <h2>Recent Scholarships</h2>
                <div className="schoraships">
                    <ScholarshipCard
                        title="TechGuide Scholarship"
                        amount="$5,000"
                        eligibility="Open to all students pursuing a degree in technology."
                        link="#"
                        online={true}
                        country="USA"
                        fullyFunded={true}
                        date="2024-09-01"

                    />
                    <ScholarshipCard
                        title="Women in STEM Scholarship"
                        amount="$10,000"
                        eligibility="Open to female students pursuing a degree in STEM fields."
                        link="#"
                        online={false}
                        country="Canada"
                        fullyFunded={false}
                        date="2024-09-01"

                    />
                </div>
            </section>

            <section className="apply-now">
                <h2>Apply Now</h2>
                <p>Don't miss out on these opportunities! Click the links above to learn more about each scholarship and how to apply.</p>
            </section>
            </div>
          
        </div>
    );
}

export default Scholarships;
