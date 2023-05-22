import './CSS/Opinie.css';
import React, { useState } from 'react';



export default function Formularz(){


    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
    
    const handleRatingChange = (event) => {
      setRating(event.target.value);
    };
    
    const handleReviewChange = (event) => {
      setReview(event.target.value);
    };
    
    const handleFormSubmit = (event) => {
      event.preventDefault();
      
      // Utwórz obiekt reprezentujący recenzję
      const newReview = {
        title: title,
        rating: rating,
        review: review
      };
      
      // Dodaj recenzję do listy w localStorage
      const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push(newReview);
      localStorage.setItem('reviews', JSON.stringify(reviews));
      
      // Wyczyść pola formularza po dodaniu recenzji
      setTitle('');
      setRating('');
      setReview('');
    };
    
    return (
      <form onSubmit={handleFormSubmit} className='Formularz'>
        <label>
          Tytuł:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Ocena:
          <input type="number" value={rating} onChange={handleRatingChange} />
        </label>
        <br />
        <label>
          Opinia:
          <textarea value={review} onChange={handleReviewChange} />
        </label>
        <br />
        <button type="submit">Dodaj recenzję</button>
      </form>
    );
    }
