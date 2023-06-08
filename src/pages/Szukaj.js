import React, { useState } from 'react';
import './CSS/Przegladaj.css';

function Szukaj() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const [searchKeyword, setSearchKeyword] = useState('');
  const [likedReviews, setLikedReviews] = useState([]);
  const [comments, setComments] = useState([]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleLike = (index) => {
    const updatedLikedReviews = [...likedReviews];
    updatedLikedReviews[index] = !likedReviews[index];
    setLikedReviews(updatedLikedReviews);
  };

  const handleCommentChange = (e, index) => {
    const updatedComments = [...comments];
    updatedComments[index] = e.target.value;
    setComments(updatedComments);
  };

  const handleCommentSubmit = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].comments = updatedReviews[index].comments || [];
    updatedReviews[index].comments.push(comments[index]);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setComments([]);
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
            <p><b>Ocena:</b> {review.rating}/10</p>
            <p><b>Opinia:</b> {review.review}</p>
            <button onClick={() => handleLike(index)} className='like'>
              {likedReviews[index] ? 'Polubione' : 'Polub'}
            </button>
            <br></br>
            <br></br>
            <h3>Komentarze</h3>
            <div>
              <input type="text" value={comments[index] || ''} onChange={(e) => handleCommentChange(e, index)} placeholder="Dodaj komentarz..." />
              <br></br>
              <button onClick={() => handleCommentSubmit(index)} className='add'>Dodaj</button>
           
            </div>
            <br></br>
            {review.comments && (
              <ul>
                {review.comments.map((comment, commentIndex) => (
                  <li key={commentIndex}>{comment}</li>
                ))}
              </ul>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Szukaj;
