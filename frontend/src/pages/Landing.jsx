import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [user, setUser] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    if (token && userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch (e) {
        console.error('Error parsing user from localStorage', e);
      }
    }

    // Parallax mouse effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 35;
      const y = (e.clientY / window.innerHeight - 0.5) * 35;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="landing-container">
      {/* Decorative Blur Blobs with mouse displacement + auto float */}
      <div 
        className="blob-wrapper blob-1-wrapper" 
        style={{ transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)` }}
      >
        <div className="bg-blob blob-1"></div>
      </div>
      <div 
        className="blob-wrapper blob-2-wrapper" 
        style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
      >
        <div className="bg-blob blob-2"></div>
      </div>
      <div 
        className="blob-wrapper blob-3-wrapper" 
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * -0.4}px)` }}
      >
        <div className="bg-blob blob-3"></div>
      </div>

      {/* Absolute Top Navbar */}
      <nav className="landing-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="landing-brand">
            <i className="bi bi-shield-exclamation brand-icon"></i>
            <span>CCMS</span>
          </Link>
          <div className="nav-actions">
            {!user && (
              <Link to="/login" className="btn-secondary-custom">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Main Minimalist Hero */}
      <main className="hero-section">
        <div className="container text-center hero-content">
          <div className="brand-badge mb-4">
            <span className="pulse-dot"></span>
            <span>Campus Support Live</span>
          </div>
          <h1 className="hero-title">
            Campus Complaint<br />
            <span>Management System</span>
          </h1>
          <p className="hero-subtitle">
            Lodge, track, and resolve campus issues in real-time. Simple, transparent, and direct.
          </p>
          <div className="hero-cta">
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/login" className="btn-primary-custom btn-lg-custom">
                Login
              </Link>
              <Link to="/register" className="btn-outline-custom btn-lg-custom">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="landing-footer text-center">
        <div className="container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Campus Complaint Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
