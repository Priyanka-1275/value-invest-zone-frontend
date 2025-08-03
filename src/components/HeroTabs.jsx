// HeroTabs.jsx
import React, { useState } from 'react';
import '../styles/HeroTabs.css';
import properties from '../data/properties';

const HeroTabs = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProps, setFilteredProps] = useState([]);
  const [searched, setSearched] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleSearch = () => {
    const results = properties.filter(
      (item) =>
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) &&
        item.type === activeTab
    );
    setFilteredProps(results);
    setSearched(true);
  };

  const openModal = (prop) => setSelectedProperty(prop);
  const closeModal = () => setSelectedProperty(null);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Property Search</h1>

        <div className="tabs">
          {['Buy', 'Rent', 'Commercial', 'PG/Co-Living'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => {
                setActiveTab(tab);
                setSearched(false);
                setFilteredProps([]);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city, locality, project or builder"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {searchQuery && searched && (
          <>
            <div className="search-result">
              {filteredProps.length > 0 ? (
                <p>✅ Yes {activeTab} properties found in: "{searchQuery}"</p>
              ) : (
                <p>❌ No {activeTab} properties found in: "{searchQuery}"</p>
              )}
            </div>

            {filteredProps.length > 0 && (
              <div className="property-grid">
                {filteredProps.map((prop) => (
                  <div
                    key={prop.id}
                    className="property-card"
                    onClick={() => openModal(prop)}
                  >
                    <img src={prop.image} alt={prop.title} />
                    <h4>{prop.title}</h4>
                    <p>{prop.price}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="final-msg">
              {filteredProps.length > 0 ? (
                <p className="yes-msg">🎉 Available</p>
              ) : (
                <p className="no-msg">😔 Not at the moment</p>
              )}
            </div>
          </>
        )}
      </div>

      {selectedProperty && (
        <div className="details-modal-overlay" onClick={closeModal}>
          <div className="details-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedProperty.image} alt={selectedProperty.title} />
            <h3>{selectedProperty.title}</h3>
            <p>{selectedProperty.description || 'More information coming soon!'}</p>
            <p><strong>{selectedProperty.price}</strong></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroTabs;
