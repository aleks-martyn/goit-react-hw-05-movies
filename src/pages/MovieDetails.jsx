import { Suspense, useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import MovieCard from 'components/MovieCard/MovieCard';
import { Wrap, Button, LeftArrow } from './MovieDetails.styled';
import Spinner from 'components/Loader/Loader';

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
    <main>
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <Wrap>
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
        </Wrap>
      )}
    </main>
  );
};

export default MovieDetails;
