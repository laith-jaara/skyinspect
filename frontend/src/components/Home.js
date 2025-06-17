import React from "react";
import "./Components.css";

const Home = () => (
    <div className="home-container">
        <h1 className="home-title">Welcome to SkyInspect</h1>
        <p className="home-description">
            Manage and track your drone fleet's maintenance efficiently.<br />
            Use the navigation bar to add, view, or update maintenance records.
        </p>

        <div className="home-hero home-hero-vertical">
            <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
                alt="Drone fleet"
                className="home-hero-image home-hero-image-large"
            />
            <div className="home-hero-text home-hero-text-center">
                <h2>Optimize Your Drone Operations</h2>
                <p>
                    SkyInspect helps you keep your drones in top condition, reduce downtime, and ensure safety compliance.
                    Our platform is designed for drone operators, maintenance teams, and fleet managers who want a simple, powerful solution.
                </p>
            </div>
        </div>

        <div className="home-features">
            <h2>Key Features</h2>
            <div className="features-grid">
                <div className="feature-card">
                    <h3>Centralized Records</h3>
                    <p>All your drone maintenance data in one secure, accessible place.</p>
                </div>
                <div className="feature-card">
                    <h3>Status Tracking</h3>
                    <p>Monitor the status of every drone and maintenance task in real time.</p>
                </div>
                <div className="feature-card">
                    <h3>Easy Scheduling</h3>
                    <p>Plan and schedule maintenance to minimize operational disruptions.</p>
                </div>
                <div className="feature-card">
                    <h3>Team Collaboration</h3>
                    <p>Assign tasks and communicate with your team for seamless operations.</p>
                </div>
            </div>
        </div>

        <div className="home-cta">
            <h2>Get Started Today</h2>
            <p>
                Ready to streamline your drone maintenance? <a href="/add" className="cta-link">Add your first record</a> or <a href="/about" className="cta-link">learn more about SkyInspect</a>.
            </p>
        </div>
    </div>
);

export default Home;