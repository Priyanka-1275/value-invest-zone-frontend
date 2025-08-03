import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <h2 className="about-heading">About Value Invest Zone</h2>
      <p className="about-intro">
        Welcome to <strong>Value Invest Zone</strong>, your premier real estate partner in Vijayawada. 
        As the best real estate company in the region, we take pride in delivering exceptional services to our clients.
        Situated in the heart of Vijayawada, our dedicated team is committed to providing you with unparalleled expertise 
        and personalized assistance in your real estate journey.
      </p>

      <p>
        At Value Invest Zone, we specialize in a variety of real estate offerings including 
        <strong> open plots, apartments, villas, individual houses,</strong> and <strong>open lands</strong>. 
        Whether you are looking for a new home, an investment opportunity, or land for future development, 
        our team is here to guide you every step of the way.
      </p>

      <p>
        With a focus on <strong>transparency, integrity, and customer satisfaction</strong>, we strive to exceed expectations. 
        Choose Value Invest Zone for a seamless and rewarding real estate experience. 
        Your dream property is just a step away with us.
      </p>

      <div className="mission-vision-values">
        <div className="mv-block">
          <h3>Mission</h3>
          <p>
            At Value Invest Zone, our mission is to <strong>transform dreams into addresses</strong>. 
            We are committed to providing unparalleled real estate experiences, 
            connecting individuals and families with homes that reflect their unique aspirations. 
            Through innovation, integrity, and a client-centric approach, 
            we strive to exceed expectations and set new standards in the real estate industry.
          </p>
        </div>

        <div className="mv-block">
          <h3>Vision</h3>
          <p>
            Our vision is to be the <strong>most trusted and admired real estate partner</strong>, 
            recognized for our exceptional service, unwavering ethics, and forward-thinking solutions. 
            We aim to shape the future of real estate, creating sustainable communities 
            and fostering meaningful connections that stand the test of time.
          </p>
        </div>

        <div className="mv-block">
          <h3>Our Core Values</h3>
          <ul className="values-list">
            <li>✔️ Integrity</li>
            <li>✔️ Excellence</li>
            <li>✔️ Client-Centricity</li>
            <li>✔️ Innovation</li>
            <li>✔️ Collaboration</li>
            <li>✔️ Community Impact</li>
            <li>✔️ Empowerment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
