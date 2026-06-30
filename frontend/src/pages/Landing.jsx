import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Parallax mouse effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="landing-container">
      {/* Grid Pattern Background */}
      <div className="landing-grid-bg"></div>

      {/* Decorative Blur Blobs */}
      <div 
        className="bg-blob blob-indigo" 
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      ></div>
      <div 
        className="bg-blob blob-cyan" 
        style={{ transform: `translate(${mousePos.x * -0.7}px, ${mousePos.y * -0.7}px)` }}
      ></div>

      {/* Absolute Navbar */}
      <nav className="landing-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="landing-brand">
            <div className="brand-logo-icon">
              <i className="bi bi-shield-exclamation"></i>
            </div>
            <span>CCMS</span>
          </Link>
          <div className="nav-actions">
            <div className="d-flex gap-2">
              <Link to="/login" className="btn-premium-outline">
                Login
              </Link>
              <Link to="/register" className="btn-premium-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-wrapper text-center d-flex flex-column align-items-center">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span>Active Campus Grievance Portal</span>
        </div>
        <h1 className="hero-title mx-auto text-center">
          Smarter Campus,<br />
          <span>Swift Resolutions.</span>
        </h1>
        <p className="hero-description mx-auto text-center">
          Lodge, categorize, and resolve campus concerns in real-time. We bridge the gap between students and campus operations through a seamless, transparent platform.
        </p>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <Link to="/login" className="btn-premium-primary btn-lg px-4 py-3">
            Login
          </Link>
          <Link to="/register" className="btn-premium-outline btn-lg px-4 py-3">
            Register
          </Link>
        </div>
      </main>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">24h</div>
            <div className="stat-label">Average Response</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Resolution Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Transparency</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="section-label">Main Features</div>
        <h2 className="section-title">Designed for modern campuses</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-lightning-charge"></i>
            </div>
            <h3>Instant Filing</h3>
            <p>File details about maintenance, facilities, internet, or other grievances in under 60 seconds with clear categorization.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-tag"></i>
            </div>
            <h3>Smart Categorization</h3>
            <p>Issues are instantly sorted and routed to the correct department (Plumbing, library, Wi-Fi, etc.) for direct action.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3>Verified Resolution</h3>
            <p>Tickets are only closed once resolved, allowing students to verify results or request further assistance.</p>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Campus Complaint Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
