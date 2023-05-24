import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie yet.</p>
      )}
    </div>
  );
};

export default Reviews;
