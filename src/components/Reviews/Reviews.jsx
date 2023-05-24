import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
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
  );
};

export default Reviews;
