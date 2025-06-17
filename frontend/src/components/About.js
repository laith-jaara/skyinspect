import React from "react";
import "./Components.css";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About SkyInspect</h1>

            <section className="about-section">
                <h2>Our Mission</h2>
                <p>
                    SkyInspect is dedicated to revolutionizing drone fleet maintenance management.
                    We provide a comprehensive solution for tracking, managing, and optimizing
                    maintenance operations for drone fleets of any size.
                </p>
            </section>

            <section className="about-section features-section">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Maintenance Tracking</h3>
                        <p>Easily track and manage maintenance records for your entire drone fleet.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Real-time Updates</h3>
                        <p>Stay informed with real-time status updates on all maintenance activities.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Technician Management</h3>
                        <p>Efficiently assign and track maintenance tasks to your technical team.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Comprehensive Records</h3>
                        <p>Maintain detailed records of all maintenance activities and drone status.</p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2>Why Choose SkyInspect?</h2>
                <ul className="benefits-list">
                    <li>Streamlined maintenance workflow</li>
                    <li>Improved fleet reliability</li>
                    <li>Reduced downtime</li>
                    <li>Better resource allocation</li>
                    <li>Enhanced safety compliance</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Contact Us</h2>
                <p>
                    Have questions or need support? Reach out to our team at{' '}
                    <a href="mailto:support@skyinspect.com" className="contact-link">
                        support@skyinspect.com
                    </a>
                </p>
            </section>
        </div>
    );
};

export default About; 