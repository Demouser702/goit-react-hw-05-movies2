import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../Pages/common/Services/apiService';
import { useState, useEffect } from 'react';
import { List } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  //Facem o solicitare de fiecare dată când se schimbă movieId
  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
      try {
        const data = await fetchReviews(movieId);
        setReviews([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {!reviews.length && <p>No reviews for this movie...</p>}
      <List>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
      </List>
    </div>
  );
};
