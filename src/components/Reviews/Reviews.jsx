import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import Spinner from 'components/Loader';
import {
  Wrap,
  ReviewTitle,
  ReviewList,
  ReviewListItem,
  Author,
  NoReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async movieId => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <Wrap>
          <ReviewTitle>Reviews</ReviewTitle>
          {reviews.length ? (
            <ReviewList>
              {reviews.map(({ id, author, content }) => (
                <ReviewListItem key={id}>
                  <Author>Author: {author}</Author>
                  <p>{content}</p>
                </ReviewListItem>
              ))}
            </ReviewList>
          ) : (
            <NoReviewsText>
              We don't have any reviews for this movie yet.
            </NoReviewsText>
          )}
        </Wrap>
      )}
    </>
  );
};

export default Reviews;
