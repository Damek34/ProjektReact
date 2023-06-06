import React, { useState } from 'react';
import '../CSS/Przegladaj.css';

function Szukaj() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredReviews = reviews.filter((review) => {
    return review.title.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  return (
    <div className='tresc'>
      <input type="text" value={searchKeyword} onChange={handleSearch} placeholder="Wyszukaj opinie..." className='wyszukaj'/>
      <ul className="Opinia">
        {filteredReviews.map((review, index) => (
          <li key={index}>
            <h3>{review.title}</h3>
            <p>Ocena: {review.rating}/10</p>
            <p>Opinia: {review.review}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Szukaj;
