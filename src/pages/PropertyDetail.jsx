import React, { useState, useEffect } from 'react';
import '../styles/property-detail.css';

import { Link } from 'react-router-dom';
import { uploadProperty, fetchAllProperties } from '../api';

function PropertyDetail() {
  const [role, setRole] = useState('buyer');
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [form, setForm] = useState({
    title: '',
    area: '',
    price: '',
    location: '',
    contact: '',
    description: '',
    previewImage: '',
    certification: ''
  });
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    'https://c4.wallpaperflare.com/wallpaper/575/667/599/trees-design-house-lawn-wallpaper-preview.jpg'
  ];

  useEffect(() => {
    fetchAllProperties()
      .then(setProperties)
      .catch(err => console.error('Error:', err));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setForm({ ...form, previewImage: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadProperty(form);
      alert('✅ Property uploaded');
      setForm({
        title: '',
        area: '',
        price: '',
        location: '',
        contact: '',
        description: '',
        previewImage: '',
        certification: ''
      });
      const updated = await fetchAllProperties();
      setProperties(updated);
    } catch (error) {
      alert('❌ Upload failed');
    }
  };

  const filteredProperties = properties.filter(p =>
    p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="main-heading">Property Details</h1>

      <div className="role-switch">
        <button onClick={() => setRole('buyer')} className={role === 'buyer' ? 'active-role' : ''}>Buyer</button>
        <button onClick={() => setRole('seller')} className={role === 'seller' ? 'active-role' : ''}>Seller</button>
      </div>

      {/* Inline Image Carousel */}
      <div className="carousel-container">
        <img src={carouselImages[carouselIndex]} alt="carousel" className="carousel-image" />
      </div>

      <input
        type="text"
        placeholder="Search for rentals, 2BHK flats, etc..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {role === 'seller' && (
        <div className="seller-form-container">
          <form className="seller-form" onSubmit={handleSubmit}>
            <h2>Upload Property</h2>
            <input name="title" placeholder="Title" value={form.title} onChange={handleFormChange} required />
            <input name="area" placeholder="Area (sq ft)" value={form.area} onChange={handleFormChange} required />
            <input name="price" placeholder="Price (₹)" value={form.price} onChange={handleFormChange} required />
            <input name="location" placeholder="Location" value={form.location} onChange={handleFormChange} required />
            <input name="contact" placeholder="Contact Number" value={form.contact} onChange={handleFormChange} required />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleFormChange} rows="3" required />
            <input type="file" accept="image/*" onChange={handleImageUpload} required />
            <input name="certification" placeholder="Certification Link (optional)" value={form.certification} onChange={handleFormChange} />
            <button type="submit">Upload Property</button>
          </form>
        </div>
      )}

      {role === 'buyer' && (
        <div className="property-list">
          {filteredProperties.map((p, index) => (
            <div key={index} className="property-card">
              <img src={p.previewImage} alt={p.title} />
              <h3>{p.title}</h3>
              <p><strong>Area:</strong> {p.area} sq ft</p>
              <p><strong>Price:</strong> ₹{p.price}</p>
              <p><strong>Location:</strong> {p.location}</p>
              <p>{p.description}</p>
              <p><strong>Contact:</strong> {p.contact}</p>

              <Link to={`/property/${p._id}`} state={{ property: p }}>
                View Details
              </Link>

              {p.certification && (
                <p>
                  <a href={p.certification} target="_blank" rel="noreferrer">📄 View Certification</a>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PropertyDetail;
