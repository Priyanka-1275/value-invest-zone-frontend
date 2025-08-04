import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import Navbar from './components/Navbar';
import HeroTabs from './components/HeroTabs';
import CityCards from './components/CityCards';
import FeaturedProjects from './components/FeaturedProjects';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import BlogPosts from './components/BlogPosts';
import BrochureSection from './data/BrochureSection'; // ✅ Brochure Import
import Footer from './components/Footer';

import PropertyListings from './pages/PropertyListings';
import ContactPage from './pages/Contact';
import BlogSection from './pages/Blog';
import Services from './pages/Services';
import ToolsPage from './pages/ToolsPage';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroTabs />
                {/* ✅ Brochure Section right after Hero */}
                <BrochureSection />

                <CityCards />
                <FeaturedProjects />
                <AboutUs />
                <Testimonials />
                <BlogPosts />
              </>
            }
          />
          <Route path="/property-listings" element={<PropertyListings />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
