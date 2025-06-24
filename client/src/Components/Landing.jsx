import React from "react";
import { Link } from "react-router-dom"; 
import "./Landing.css"; 

export default function LandingPage() {
  return (
    <div className="landing-page">
    
      <header className="landing-navbar">
        <div className="brand-logo">SHOPPER</div>
        <nav>
          <Link to="/dashboard" className="nav-dashboard-link">
            Admin Dashboard
          </Link>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">Discover Your Style</p>
          <h1 className="hero-title">Shop the Latest Trends</h1>
          <p className="hero-subtitle">
            Explore our curated collection of fashion, electronics, and home
            essentials.
          </p>
          <Link to="/products" className="hero-button">
            Shop Now
          </Link>
        </div>
      </section>
      <section className="new-arrivals-section">
        <h2 className="section-title">Explore Our New Arrivals</h2>
        <Link to="/products" className="new-arrivals-card">
          <div className="new-arrivals-content">
            <h3>Fresh Styles, Just For You!</h3>
            <p>Be the first to discover our latest collection.</p>
            <span className="new-arrivals-cta">
              View All Products <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </Link>
      </section>

      <section className="value-proposition-section">
        <div className="value-content">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="value-points">
            <div className="value-item">
              <span className="value-icon">⭐</span>
              <h3>Premium Quality</h3>
              <p>Hand-picked products ensuring the highest standards.</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🚚</span>
              <h3>Fast & Free Shipping</h3>
              <p>
                Get your favorites delivered right to your doorstep, quickly and
                free.
              </p>
            </div>
            <div className="value-item">
              <span className="value-icon">🔒</span>
              <h3>Secure Payments</h3>
              <p>Shop with confidence, knowing your transactions are safe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="section-title">Stay Updated!</h2>
          <p>
            Get the latest product updates and exclusive offers directly to your
            inbox.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} YourStore. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
