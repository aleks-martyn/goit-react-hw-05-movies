import { Suspense, useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import MovieCard from 'components/MovieCard';
import { StyledSection, Button, LeftArrow } from './MovieDetails.styled';
import Spinner from 'components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <StyledSection>
          <Link to={location.state?.from ?? '/'}>
            <Button type="button">
              <LeftArrow />
              Go back
            </Button>
          </Link>

          <MovieCard movie={selectedMovie} />
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </StyledSection>
      )}
    </>
  );
};

export default MovieDetails;
