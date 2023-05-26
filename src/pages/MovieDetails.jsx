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

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Wrap>
        <Link to={location?.state?.from ?? '/'}>
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
    </main>
  );
};

export default MovieDetails;
