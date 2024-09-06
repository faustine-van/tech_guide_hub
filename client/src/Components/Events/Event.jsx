import React from 'react';

import './Event.css'

function Event() {
    return (
        <div className='events-section'>
        <section className="event-hero-detail">
            <img src="/Default_websites_for_event_designs_zoomwebnar_for_inspiration_3.jpg" alt="Tech World Conference" className="event-banner"/>
            <div className="event-info">
                <h1>Tech World Conference 2024</h1>
                <p><strong>Date:</strong> August 15, 2024</p>
                <p><strong>Time:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Location:</strong> Online (Zoom)</p>
                <a href="#" className="btn register-btn">Register Now</a>
            </div>
        </section>

        <section className="event-details">
            <h2>Event Description</h2>
            <p>The Tech World Conference 2024 brings together the brightest minds in technology and innovation. Join industry leaders, entrepreneurs, and enthusiasts for a day of insightful talks, networking opportunities, and hands-on workshops.</p>

            <h2>Speakers</h2>
            <div className="speakers">
                <div className="speaker">
                    <img src="/Default_tech_enthusiast_0.jpg" alt="Speaker 1"/>
                    <h3>Jane Doe</h3>
                    <p>CEO, Tech Innovations</p>
                </div>
                <div className="speaker">
                    <img src="/Default_different_people_3.jpg" alt="Speaker 2"/>
                    <h3>John Smith</h3>
                    <p>CTO, Future Tech</p>
                </div>
            </div>

            <h2>Agenda</h2>
            <ul className="agenda">
                <li><strong>9:00 AM:</strong> Opening Keynote by Jane Doe</li>
                <li><strong>10:00 AM:</strong> Panel Discussion: The Future of AI</li>
                <li><strong>11:30 AM:</strong> Workshop: Building Scalable Apps</li>
            </ul>

            <h2>Registration</h2>
            <p>To register for the Tech World Conference 2024, click the button below and fill out the registration form. We look forward to seeing you there!</p>
            <a href="#" className="btn register-btn">Register Now</a>
        </section>

        <section className="event-location">
            <h2>Event Location</h2>
            <p>This event will be held online via Zoom. Registered participants will receive a link to join the event.</p>
        </section>
        </div>
    );
}

export default Event;