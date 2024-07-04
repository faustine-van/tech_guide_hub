import React from 'react';
import './Scholarships.css'; // Import your custom CSS file

function ScholarshipCard({ title, amount, eligibility, link }) {
    return (
        <div className="scholarship-card">
            <h3>{title}</h3>
            <p><strong>Amount:</strong> {amount}</p>
            <p><strong>Eligibility:</strong> {eligibility}</p>
            <a href={link} className="apply-link">Learn More</a>
        </div>
    );
}
function Scholarships() {
    return (
        <div className="scholarship-page">
            <h1>Scholarship Opportunities</h1>
            
            <section className="scholarship-intro">
                <p>
                    Welcome to our scholarship page! Here you will find various scholarship opportunities to support your academic journey. Explore the options below and apply for the ones that suit your needs.
                </p>
            </section>

            <section className="featured-scholarships">
                <h2>Featured Scholarships</h2>
                <ScholarshipCard 
                    title="TechGuide Scholarship"
                    amount="$5,000"
                    eligibility="Open to all students pursuing a degree in technology."
                    link="#"
                />
                <ScholarshipCard 
                    title="Women in STEM Scholarship"
                    amount="$10,000"
                    eligibility="Open to female students pursuing a degree in STEM fields."
                    link="#"
                />
            </section>

            <section className="popular-scholarships">
                <h2>Popular Scholarships</h2>
                <ScholarshipCard 
                    title="Community Leadership Scholarship"
                    amount="$2,500"
                    eligibility="Open to students with a proven record of community service."
                    link="#"
                />
                <ScholarshipCard 
                    title="Academic Excellence Scholarship"
                    amount="$3,000"
                    eligibility="Open to students with a GPA of 3.5 or higher."
                    link="#"
                />
            </section>

            <section className="recent-scholarships">
                <h2>Recent Scholarships</h2>
                <ScholarshipCard 
                    title="Innovation in Tech Scholarship"
                    amount="$4,000"
                    eligibility="Open to students with innovative tech project proposals."
                    link="#"
                />
                <ScholarshipCard 
                    title="Environmental Studies Scholarship"
                    amount="$3,500"
                    eligibility="Open to students pursuing a degree in environmental studies."
                    link="#"
                />
            </section>

            <section className="apply-now">
                <h2>Apply Now</h2>
                <p>Don't miss out on these opportunities! Click the links above to learn more about each scholarship and how to apply.</p>
            </section>
        </div>
    );
}

export default Scholarships;
