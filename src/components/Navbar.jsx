import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Value Invest Zone</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/property-listings">🏠 Property Listings</Link></li>
        <li><Link to="/property-detail">📋 Property Detail</Link></li>
        <li><Link to="/about">👤 About Us</Link></li>
        <li><Link to="/services">🛠 Services</Link></li>
        <li><Link to="/blog">📝 Blog</Link></li>
        <li><Link to="/contact">📞 Contact</Link></li>
        <li><Link to="/tools">🧰 Tools</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
