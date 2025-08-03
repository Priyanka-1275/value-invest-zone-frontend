import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "Ravi Kumar",
    feedback: "Spark Properties helped me find my dream home. Their service was top-notch and very professional!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Anjali Reddy",
    feedback: "Excellent platform with verified listings. Loved how smooth the whole process was.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Vikram Das",
    feedback: "I used their platform to rent a commercial space. Super reliable and responsive team!",
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-wrapper">
        <h2 className="testimonials-heading">What Our Clients Say 💬</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <img src={t.image} alt={t.name} className="testimonial-image" />
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-feedback">“{t.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
