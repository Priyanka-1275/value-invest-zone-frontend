import React from "react"; 
import '../styles/AboutPage.css';
// Removed broken imports of teamImage and certImage

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Company Intro */}
      <section className="company-intro">
        <h1>About Value Invest Zone</h1>
        <p>
          At <strong>Value Invest Zone</strong>, we go beyond just real estate—we build trust,
          foster transparency, and deliver unmatched value for our clients. Whether you're buying,
          selling, or investing, our platform offers end-to-end solutions that make every step
          seamless and stress-free.
        </p>
      </section>

      {/* Story Section */}
      <section className="company-story">
        <h2>Our Journey</h2>
        <p>
          What started as a vision to simplify real estate transactions has now evolved into one
          of the most dependable platforms for property enthusiasts across India. Founded by
          seasoned experts with backgrounds in real estate and investment, <strong>Value Invest Zone</strong>
          brings together professionalism, ethics, and the power of digital tools.
          <br /><br />
          With a growing network of happy customers and successful property closures, we continue
          to expand our reach—helping families find their dream homes and investors unlock smart opportunities.
        </p>
      </section>

      {/* Values Section */}
      <section className="core-values">
        <h2>What We Stand For</h2>
        <ul>
          <li>✅ 100% Transparency & Trust in Every Transaction</li>
          <li>📈 Ethical Dealings Backed by Market Knowledge</li>
          <li>🎯 Personalized Guidance for Buyers & Sellers</li>
          <li>💬 Responsive, Friendly & Professional Support</li>
          <li>🔐 Secure Handling of Legal & Certification Processes</li>
        </ul>
      </section>

      {/* Founders Section */}
      <section className="team-founders">
        <h2>Meet the Visionaries</h2>
        <div className="team-box">
          <img src="https://via.placeholder.com/300x200?text=Founders" alt="Founders" />
          <div className="team-info">
            <h3>Ravi Kumar & Sneha Sharma</h3>
            <p>
              With over 15 years of collective experience in real estate, Ravi and Sneha established
              <strong> Value Invest Zone</strong> to redefine how people engage with property in India.
              Their deep market insights, strong ethics, and technology-driven mindset form the foundation
              of our platform's success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-offered">
        <h2>Our Services</h2>
        <p>We provide tailored real estate services to meet the diverse needs of:</p>
        <ul>
          <li>🏡 Residential Property Buying & Selling</li>
          <li>🏢 Commercial Spaces & Investment Planning</li>
          <li>🌱 Land & Plot Deals (with Legal Verification)</li>
          <li>🧭 Personalized Investment Consulting</li>
          <li>📢 Property Marketing for Sellers</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <h2>Certifications & Credentials</h2>
        <div className="cert-list">
          <div className="cert-item">
            <img src="https://via.placeholder.com/150x100?text=RERA+Certified" alt="RERA" />
            <p>Registered Under RERA</p>
          </div>
          <div className="cert-item">
            <img src="https://via.placeholder.com/150x100?text=ISO+Certified" alt="ISO Certified" />
            <p>ISO 9001:2015 Quality Certified</p>
          </div>
          <div className="cert-item">
            <img src="https://via.placeholder.com/150x100?text=Certified+Advisor" alt="Consultant" />
            <p>Certified Property Advisors</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> To transform property transactions through technology, trust,
          and transparency—while prioritizing client satisfaction every step of the way.
        </p>
        <p>
          <strong>Vision:</strong> To become India’s most trusted and digitally advanced
          real estate ecosystem by offering tailored, honest, and result-driven solutions.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
