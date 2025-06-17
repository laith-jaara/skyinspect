import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Components.css";

const Navbar = ({ user, onLogout }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    // Close mobile menu when route changes
    useEffect(() => { setIsOpen(false); }, [location]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.nav-links') && !event.target.closest('.mobile-menu-btn')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleLogout = () => {
        if (onLogout) onLogout();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">SkyInspect</Link>
            <button
                className="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <div className={`nav-links${isOpen ? ' open' : ''}`}>
                {user ? (
                    <>
                        <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
                        <Link to="/add" className={`nav-link${isActive('/add') ? ' active' : ''}`}>Add Record</Link>
                        <Link to="/records" className={`nav-link${isActive('/records') ? ' active' : ''}`}>View Records</Link>
                        <Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About</Link>
                        <button
                            className="nav-link logout-btn"
                            onClick={handleLogout}
                            style={{
                                border: "none",
                                background: "none",
                                color: "#c00",
                                cursor: "pointer",
                                padding: 0,
                                marginLeft: "1rem"
                            }}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signup" className={`nav-link${isActive('/signup') ? ' active' : ''}`}>Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;