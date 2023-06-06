import '../CSS/Przegladaj.css'

function Szukaj() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

  return (
    <ul className="Opinia">
      {reviews.map((review, index) => (
        <li key={index} >
          <h3 >{review.title}</h3>
          <p>Ocena: {review.rating}</p>
          <p>Opinia: {review.review}</p>
          <hr></hr>
        </li>
      ))}
    </ul>
  );
  }
  
  export default Szukaj;