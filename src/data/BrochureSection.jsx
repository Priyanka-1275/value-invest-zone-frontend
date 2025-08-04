import React from 'react';
import '../styles/BrochureSection.css';

const BrochureSection = () => {
  return (
    <div className="brochure-container">
      <video
        className="brochure-video"
        src="/video.mp4"
        autoPlay
        muted
        loop
      />

      <div className="brochure-overlay">
        <a
          href="/brochure.pdf"
          download
          className="brochure-button"
        >
          📥 Download Brochure
        </a>
      </div>
    </div>
  );
};

export default BrochureSection;
