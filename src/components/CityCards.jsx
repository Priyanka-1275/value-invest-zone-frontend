import React from 'react';
import '../styles/CityCards.css';

const CityCards = () => {
  const cities = [
    {
      name: 'Vijayawada',
      image: 'https://imagecdn.99acres.com/media1/29939/9/598789453M-1747993278115.webp'
    },
    {
      name: 'Amaravati',
      image: 'https://housing-images.n7net.in/012c1500/fb49f839e2fc405836531d79dd0646f5/v0/medium.jpeg'
    },
    {
      name: 'Benz Circle',
      image: 'https://housing-images.n7net.in/4f2250e8/b23a1094a1ffe05783fb94c9de2da6ab/v5/medium/pavan_meadows-benz_circle-vijayawada-pavan_builders_%26_developers.jpg'
    },
    {
      name: 'Gannavaram',
      image: 'https://imagecdn.99acres.com/media1/19987/2/399742430M-1744905383392.jpg'
    },
    {
      name: 'Poranki',
      image: 'https://imagecdn.99acres.com/media1/28749/5/574985141M-1741178067912.webp'
    },
    {
      name: 'Tadepalli',
      image: 'https://dyimg1.realestateindia.com/prop_images/1846256/903921_1-350x350.jpg'
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

