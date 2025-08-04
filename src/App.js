import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import './styles/property-detail.css'; // ✅ Retained for PropertyDetail styling

// Components
import Navbar from './components/Navbar';
import HeroTabs from './components/HeroTabs';
import CityCards from './components/CityCards';
import FeaturedProjects from './components/FeaturedProjects';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import BlogPosts from './components/BlogPosts';
import BrochureSection from './data/BrochureSection'; // ✅ From 1st code
import Footer from './components/Footer';

// Pages
import PropertyListings from './pages/PropertyListings';
import ContactPage from './pages/Contact';
import BlogSection from './pages/Blog';
import Services from './pages/Services';
import ToolsPage from './pages/ToolsPage';

// ✅ Added from 2nd code
import AboutPage from './pages/AboutPage';
import PropertyDetail from './pages/PropertyDetail';
import PropertyView from './pages/PropertyView';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroTabs />
                <BrochureSection /> {/* ✅ Kept from 1st version */}
                <CityCards />
                <FeaturedProjects />
                <AboutUs />
                <Testimonials />
                <BlogPosts />
              </>
            }
          />

          {/* Main Pages */}
          <Route path="/property-listings" element={<PropertyListings />} />
          <Route path="/property-detail" element={<PropertyDetail />} />
          <Route path="/property/:id" element={<PropertyView />} />
          <Route path="/about" element={<AboutPage />} />
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
