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
      
      const newReview = {
        title: title,
        rating: rating,
        review: review
      };
      
      if (!title || !review || !rating) {
        alert('Proszę wypełnić wszystkie pola formularza.');
        return;
      }
      
      const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push(newReview);
      localStorage.setItem('reviews', JSON.stringify(reviews));
      
      setTitle('');
      setRating('');
      setReview('');
    };
    
    return (
      <form onSubmit={handleFormSubmit} className='Formularz'>
        <label>
          <p>Tytuł:</p>
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          <p>Opinia:</p>
          <textarea value={review} onChange={handleReviewChange} />
        </label>
        <br />
        <label>
        <p>Ocena:</p>
          <input type="number" value={rating} min="1" max="10" onChange={handleRatingChange} />
          
        </label>
        <br />
        <button type="submit">Dodaj recenzję</button>
      </form>
    );
    }
