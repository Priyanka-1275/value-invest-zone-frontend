import React from 'react';
import '../styles/CityCards.css';

const CityCards = () => {
  const cities = [
    {
      name: 'Vijayawada',
      image: 'https://images.unsplash.com/photo-1632222160475-e0dfd67a758d?auto=format&fit=crop&w=800&q=60'
    },
    {
      name: 'Amaravati',
      image: 'https://images.unsplash.com/photo-1582885116383-c0920e7ee9ff?auto=format&fit=crop&w=800&q=60'
    },
    {
      name: 'Benz Circle',
      image: 'https://images.unsplash.com/photo-1593951517987-2a7c9b56d2e0?auto=format&fit=crop&w=800&q=60'
    },
    {
      name: 'Gannavaram',
      image: 'https://images.unsplash.com/photo-1616587895721-182a59c10e31?auto=format&fit=crop&w=800&q=60'
    },
    {
      name: 'Poranki',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=60'
    },
    {
      name: 'Tadepalli',
      image: 'https://images.unsplash.com/photo-1563284202-9a13625c6c59?auto=format&fit=crop&w=800&q=60'
    }
  ];

  return (
    <div className="city-cards">
      <h2 className="city-title">🏙️ Explore Properties in and around Vijayawada</h2>
      <div className="city-grid">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <img src={city.image} alt={city.name} />
            <p>{city.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCards;
